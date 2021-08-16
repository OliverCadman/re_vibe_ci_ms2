/*jshint esversion: 6 */

$(document).ready(function () {
  setTimeout(function () {
    $("div.hidden").fadeTo(1000, 1);
  }, 2000);
});

const earAnimation = new Vivus("ear-drawing", { duration: 150 });

const logoAnimation = new Vivus("logo-heading", {
  duration: 150,
  type: "sync",
  animTimingFunction: Vivus.EASE_OUT,
});
