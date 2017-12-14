var bookmarked = false;
var isScrolling;

$(document).ready(function () {
  loadDetails();

  $("#container1").click(function () {
    window.location.href = 'details.html';
  });

  $("#container2").click(function () {
    window.location.href = 'details.html';
  });

  $("#container3").click(function () {
    window.location.href = 'details.html';
  });
});

function loadDetails() {
  $("#header").text("CHIN CHIN");

  $("#bigImage1").attr("src", "./img/fried-rice.PNG");
  $("#smallImageA1").attr("src", "./img/stir-fry.PNG");
  $("#smallImageB1").attr("src", "./img/crispy-soft.PNG");
  $("#category1").text("RICE & NOODLES");
  $("#photosLabel1").text("4 dishes");


  $("#bigImage2").attr("src", "./img/stir-fry.PNG");
  $("#smallImageA2").attr("src", "./img/pad-thai.PNG");
  $("#smallImageB2").attr("src", "./img/fried-rice.PNG");
  $("#category2").text("GREEN STUFF");
  $("#photosLabel2").text("3 dishes");

  $("#bigImage3").attr("src", "./img/pad-thai.PNG");
  $("#smallImageA3").attr("src", "./img/crispy-soft.PNG");
  $("#smallImageB3").attr("src", "./img/stir-fry.PNG");
  $("#category3").text("CURRIES");
  $("#photosLabel3").text("3 dishes");
}


