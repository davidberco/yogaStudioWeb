'use strict';

// navigation menu
const navbar = document.querySelector('.navbar-open')

function closeNav() {
  console.log('clicked');
  navbar.classList.add('navbar-close');
  navbar.classList.remove('navbar-open');
}

document.getElementById('cross').addEventListener('click', closeNav);
