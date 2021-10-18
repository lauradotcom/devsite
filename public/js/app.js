// Client-side form handling

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
    console.log(response.status);
    // Display a message to the user after form is submitted
    if (response.status !== 200) {
      statusMessage.innerText = 'Sorry, your message could not be sent! Please try again in a minute.';
      } else {
      statusMessage.innerText = 'Thanks for your message!';
      userName.value = '';
      userEmail.value = '';
      userMessage.value = '';
      setTimeout(function() {
        statusMessage.innerText = '';
      }, 5000)
      }
    return response.json();
  })
}