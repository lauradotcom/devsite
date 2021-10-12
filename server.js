const express = require('express');
const nodemailer = require('nodemailer');
const multiparty = require('multiparty');
const SMTPConnection = require('nodemailer/lib/smtp-connection');
require('dotenv').config();

// Initialize Express app
const app = express();

// Define homepage for app
app.route('/').get(function (req, res) {
  res.sendFile(process.cwd() + 'index.html');
});

// Use port 5000 for testing
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
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