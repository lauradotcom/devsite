const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const multiparty = require('multiparty');
require('dotenv').config();

// Use port 5000 for testing
const PORT = process.env.PORT || 5000;

// Initialize Express app
const app = express();

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json()); // accept JSON
app.use(express.urlencoded({ extended: true })); // accept URL-encoded data
app.use(express.static('public')); // make public directory static

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Set up Nodemailer transporter object
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

// Verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready');
  }
});

// Create POST route to send the message
app.post('/', (req, res) => {

  // Accept form data and parse it with Multiparty
  let form = new multiparty.Form();
  let data = {};
  form.parse(req, function (err, fields) {
    console.log(fields);
    Object.keys(fields).forEach(function (property) {
      data[property] = fields[property].toString();
    });

    // Create a mail object with the needed properties (fields)
    const mail = {
      from: data.name,
      to: process.env.EMAIL,
      subject: `New message from ${data.name}`,
      text: `Name: ${data.name} \nEmail: ${data.email} \nMessage: ${data.message}`,
    };

    // Send the email
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send('Something went wrong.');
        return;
      } else {
        res.status(200).send('Email successfully sent!');
      }
    });
  });
});

/*
// Define homepage for app
app.route('/').get(function (req, res) {
  res.sendFile(process.cwd() + '/public/index.html');
});
*/

// Express server listening...
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
