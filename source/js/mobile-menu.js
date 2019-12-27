// Мобильное меню

var closeButton = document.getElementsByClassName('main-nav__switch')[0];
var navMenu = document.getElementsByClassName('main-nav__list')[0];
var mainNav = document.querySelector('.main-nav');
var mainNavToggle = mainNav.querySelector('.main-nav__switch');

closeButton.classList.add('main-nav__switch_state-shown');
navMenu.classList.add('main-nav__list_state-hide');

closeButton.addEventListener('click', function() {
  navMenu.classList.toggle('main-nav__list_state-hide');
});

mainNavToggle.addEventListener('click', function () {

  if (mainNav.classList.contains('main-nav--close')) {
    mainNav.classList.remove('main-nav--close');
  } else {
    mainNav.classList.add('main-nav--close');
  }
})
