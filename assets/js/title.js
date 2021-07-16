$(document).ready(function () {
  setTimeout(function () {
    $("div.hidden").fadeTo(1000, 1);
  }, 2000);
});

new Vivus("ear-drawing", { duration: 150 });

new Vivus("logo-heading", {
  duration: 150,
  type: "sync",
  animTimingFunction: Vivus.EASE_OUT,
});

function hideTitlePage() {
  $("#hide-container").fadeTo(400, 0);
  $(".game-container")
    .removeClass("game-container")
    .addClass("game-container-show");
}
