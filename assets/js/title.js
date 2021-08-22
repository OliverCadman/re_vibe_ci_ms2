/*jshint esversion: 6 */


/* Fades in text content 'ear training'
and button to enter home-page.html */
$(document).ready(function () {
  setTimeout(function () {
    $("div.hidden").fadeTo(1000, 1);
  }, 2000);
});


/* VivusJS Library used to create drawing animation with SVGs */
const earAnimation = new Vivus("ear-drawing", { duration: 150 });

const logoAnimation = new Vivus("logo-heading", {
  duration: 150,
  type: "sync",
  animTimingFunction: Vivus.EASE_OUT
});
