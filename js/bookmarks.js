$(document).ready(function () {
  loadDetails();

  $(".container")
    .on("swipeleft", swipeleftHandler)
    .on("swiperight", swiperighttHandler);

});

function swipeleftHandler(event) {
  $(event.currentTarget.firstElementChild).addClass("hide");
}

function swiperighttHandler(event) {
  $(event.currentTarget.firstElementChild).addClass("hide");
  // setTimeout(function () {
  //   $(event.currentTarget.firstElementChild).addClass("hide");
  // }, 500)
}

function loadDetails() {

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


