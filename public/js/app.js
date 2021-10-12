// Client-side form handling

const form = document.getElementById('contact-form');

// Add event listener to the form
const formEvent = form.addEventListener('submit', event => {
  event.preventDefault();
  let mail = new FormData(form);
  sendMail(mail);
  console.log(mail);
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
}