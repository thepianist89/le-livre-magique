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

/*=============== HOME SWIPER ===============*/

/*=============== FEATURED SWIPER ===============*/

/*=============== NEW SWIPER ===============*/

/*=============== TESTIMONIAL SWIPER ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
