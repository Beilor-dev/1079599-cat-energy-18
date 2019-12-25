// Мобильное меню

var closeButton = document.getElementsByClassName('main-nav__switch')[0];
var navMenu = document.getElementsByClassName('main-nav__list')[0];

closeButton.classList.add('main-nav__switch_state-shown');
navMenu.classList.add('main-nav__list_state-hide');

closeButton.addEventListener('click', function() {
  navMenu.classList.toggle('main-nav__list_state-hide');
});
