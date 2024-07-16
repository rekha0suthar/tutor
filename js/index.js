// Toggle menu
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.nav-mobile-menu-list');
  toggleButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('menu-active');
  });
});

window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (this.window.scrollY > 0) {
    navbar.classList.add('navbar-scroll');
  } else {
    navbar.classList.remove('navbar-scroll');
  }
});
