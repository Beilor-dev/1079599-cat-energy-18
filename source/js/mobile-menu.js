// Мобильное меню

var mainNav = document.querySelector('.main-nav');
var mainNavSwitch = mainNav.querySelector('.main-nav__switch');


mainNavSwitch.addEventListener('click', function () {

  if (mainNav.classList.contains('main-nav--close')) {
    mainNav.classList.remove('main-nav--close');
  } else {
    mainNav.classList.add('main-nav--close');
  }
})
