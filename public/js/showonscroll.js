// Trigger animations on scroll

const articles = document.querySelector('article');
const container = document.getElementById('portfolio');
container.addEventListener('scroll', function () {
  articles.forEach((e, i) => {
    const top = (e.getBoundingClientRect().top);
    if ( top == 0) {
      e.classList.add('is-inview');
    } else {
      e.classList.remove('is-inview');
    }
  })
})
container.dispatchEvent(newCustomEvent('scroll'));