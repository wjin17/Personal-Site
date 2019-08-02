$(document).ready(function() {
  $(".nav-item-container").hide();
  $(".fingerprint").focus(function() {
    $(".nav-item-container").fadeIn(200, function() {});
  });
  $(".fingerprint").blur(function() {
    $(".nav-item-container").fadeOut(200, function() {});
  });
});
