/*jshint esversion: 6 */

/* Animate hamburger icon on mobile devices by adding CSS class 'open'
when hamburger icon is clicked. Code referenced from YouTube tutorial:
Title: Animated Hamburger Menu Tutorial
Link: https://www.youtube.com/watch?v=dIyVTjJAkLw&t=336s */

const hamburgerIcon = document.querySelector(".hamburger-icon");
let isMenuOpen = false;

hamburgerIcon.addEventListener("click", function () {
  if (!isMenuOpen) {
    isMenuOpen = true;
    hamburgerIcon.classList.add("open");
  } else {
    isMenuOpen = false;
    hamburgerIcon.classList.remove("open");
  }
});
