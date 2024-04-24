/*=============== SEARCH ===============*/
const searchButton = document.getElementById('search-button');
const searchClose = document.getElementById('search-close');
const searchContent = document.getElementById('search-content');

/* Menu show */
if (searchButton) {
  searchButton.addEventListener('click', () => {
    searchContent.classList.add('show-search');
  });
}

/* Menu hidden */
if (searchClose) {
  searchClose.addEventListener('click', () => {
    searchContent.classList.remove('show-search');
  });
}

/*=============== LOGIN ===============*/
const loginButton = document.getElementById('login-button');
const loginClose = document.getElementById('login-close');
const loginContent = document.getElementById('login-content');

/* LOGIN show */
if (loginButton) {
  loginButton.addEventListener('click', () => {
    loginContent.classList.add('show-login');
  });
}

/* LOGIN hidden */
if (loginClose) {
  loginClose.addEventListener('click', () => {
    loginContent.classList.remove('show-login');
  });
}

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById('header');
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50
    ? header.classList.add('shadow-header')
    : header.classList.remove('shadow-header');
};
window.addEventListener('scroll', shadowHeader);

/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home__swiper', {
  loop: true,
  spaceBetween: -24,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1220: {
      spaceBetween: -32,
    },
  },
});

/*=============== FEATURED SWIPER ===============*/
let swiperFeatured = new Swiper('.featured__swiper', {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    1150: {
      slidesPerView: 4,
      centeredSlides: false,
    },
  },
});

/*=============== NEW SWIPER ===============*/
let swiperNew = new Swiper('.new__swiper', {
  loop: true,
  spaceBetween: 16,
  slidesPerView: 'auto',

  breakpoints: {
    1150: {
      slidesPerView: 3,
    },
  },
});

/*=============== TESTIMONIAL SWIPER ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
