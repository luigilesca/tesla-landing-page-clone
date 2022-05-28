//menu toggle
let hamburger = document.querySelector('.header__hamburger');
hamburger.addEventListener('click', function () {
  document.body.classList.toggle('menu-open');
});

// Header scroll
window.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    document.body.classList.add('scroll-down');
  } else {
    document.body.classList.remove('scroll-down');
  }
});

// scroll side navigation
let links = document.querySelectorAll('.nav-dots a');

links.forEach((link, i) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    links.forEach((item) => {
      item.classList.remove('nav-dot--active');
    });

    this.classList.add('nav-dot--active');

    let selector = this.getAttribute('href');
    // console.log(selector)
    let selectorElement = document.querySelectorAll(selector);

    window.scroll({
      top: selectorElement[0].offsetTop,
      behavior: 'smooth',
    });
  });
});

// set dot on scroll
let covers = document.querySelectorAll('.section');
let dots = document.querySelectorAll('.nav-dots a');

window.addEventListener('scroll', function () {
  covers.forEach((cover) => {
    let checkedCover = isInWiew(cover);

    if (checkedCover == true) {
      dots.forEach((item) => {
        item.classList.remove('nav-dot--active');
      });

      // [href="#section-2"]
      let currentDot = document.querySelector('[href="#' + cover.id + '"]');
      // console.log(currentDot)
      currentDot.classList.add('nav-dot--active');
    }
  });
});

function isInWiew(element) {
  let myElement = element.getBoundingClientRect();
  // console.log(myElement.top + " altezza window" + window.innerHeight)
  // console.log(myElement)

  if (myElement.top < window.innerHeight / 2 && myElement.top >= 0) {
    // console.log(element.id + " sono dentro ")
    return true;
  } else {
    return false;
  }
}
