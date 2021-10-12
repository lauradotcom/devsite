const express = require('express');
const nodemailer = require('nodemailer');
const multiparty = require('multiparty');
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