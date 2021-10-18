// Have contact info populate at the bottom of the header when an icon is hovered over
// Define variable for detail text plus the header icons


const detail = document.getElementById('contact-detail');
let email = document.getElementById('email');
let phoneNumber = document.getElementById('phone');
let city = document.getElementById('location');

// Add mouseover/mouseout event listeners for each icon

email.addEventListener('mouseover', function() {
  detail.innerHTML = 'lrhwkns@gmail.com';
})

email.addEventListener('mouseout', function() {
  detail.innerHTML = '<br/>';
})

phoneNumber.addEventListener('mouseover', function() {
  detail.innerHTML = '520.909.5901';
})

phoneNumber.addEventListener('mouseout', function() {
  detail.innerHTML = '<br/>';
})

city.addEventListener('mouseover', function() {
  detail.innerHTML = 'Olympia, WA';
})

city.addEventListener('mouseout', function() {
  detail.innerHTML = '<br/>';
})

// Make it so branded icons appear when you hover over the languages & skills tags
// Define variables for each skill tag

let skillTags = document.getElementsByClassName('skill');
let skillText = skillTags.innerHTML;
let HTML = skillTags[0];
let CSS = skillTags[1];
let javaScript = skillTags[2];
let react = skillTags[3];
let node = skillTags[4];
let sql = skillTags[5];
let bootstrap = skillTags[6];
let sass = skillTags[7];

// Add mouseover/mouseout event listeners for each tag

/*
HTML.addEventListener('mouseover', function() {
  this.innerHTML += `<span class="fab fa-html5"></span>`;
})

HTML.addEventListener('mouseout', function() {
  this.innerHTML = 'HTML';
})

CSS.addEventListener('mouseover', function() {
  this.innerHTML += `<span class="fab fa-css3"></span>`;
})

CSS.addEventListener('mouseout', function() {
  this.innerHTML = 'CSS';
})

javaScript.addEventListener('mouseover', function() {
  this.innerHTML += `<span class="fab fa-js"></span>`;
})

javaScript.addEventListener('mouseout', function() {
  this.innerHTML = 'JavaScript';
})

react.addEventListener('mouseover', function() {
  this.innerHTML += `<span class="fab fa-react"></span>`;
})

react.addEventListener('mouseout', function() {
  this.innerHTML = 'React';
})

node.addEventListener('mouseover', function() {
  this.innerHTML += `<span class="fab fa-node"></span>`;
})

node.addEventListener('mouseout', function() {
  this.innerHTML = 'Node';
})

bootstrap.addEventListener('mouseover', function() {
  this.innerHTML += `<span class="fab fa-bootstrap"></span>`;
})

bootstrap.addEventListener('mouseout', function() {
  this.innerHTML = 'Bootstrap';
})

sql.addEventListener('mouseover', function() {
  this.innerHTML += `<span class="fas fa-database"></span>`;
})

sql.addEventListener('mouseout', function() {
  this.innerHTML = 'SQL';
})

sass.addEventListener('mouseover', function() {
  this.innerHTML += `<span class="fab fa-sass"></span>`;
})

sass.addEventListener('mouseout', function() {
  this.innerHTML = 'Sass';
})
*/
