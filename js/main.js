'use strict';

// menu-open function
function openMenu() {
  let toggle = document.getElementById("menuOpenContainer");
  if (toggle.style.display === "none") {
    toggle.style.display ="block";
  } else {
    toggle.style.display ="none";
  } 
}
function closeMenu() {
  let toggle = document.getElementById("menuOpenContainer");
  if (toggle.style.display === "block") {
    toggle.style.display ="none";
  } else {
    toggle.style.display ="block";
  } 
}