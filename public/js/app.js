// Client-side form handling

const { response } = require("express");

const form = document.getElementById('contact-form');
let statusMessage = document.getElementById('status-message');
let userName = document.getElementById('name');
let userEmail = document.getElementById('email');
let userMessage = document.getElementById('message');

// Add event listener to the form
const formEvent = form.addEventListener('submit', event => {
  event.preventDefault();
  let mail = new FormData(form);
  sendMail(mail);
})

// Create sendMail function to submit the form data
const sendMail = (mail) => {
  fetch('http://localhost:5000', {
    method: "post",
    body: mail,
  })
  .then((response) => {
    return response.json();
  })
  if (response.status === 500) {
    statusMessage.innerText = 'Sorry, your message could not be sent! Please try again in a minute.';
  } else {
    statusMessage.innerText = 'Thanks for your message!';
    userName.value = '';
    userEmail.value = '';
    userMessage.value = '';
  }
}