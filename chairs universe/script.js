document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.menu-toggle');
  const navUl = document.querySelector('nav ul');

  if (toggle && navUl) {
    toggle.addEventListener('click', function () {
      navUl.classList.toggle('open');
    });
  }
});