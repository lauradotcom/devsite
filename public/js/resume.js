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
