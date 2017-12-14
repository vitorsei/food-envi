var bookmarked = false;
var isScrolling;

$(document).ready(function () {
  loadDetails();
});



function loadDetails() {
  $("#img1").attr("src", "./img/fried-rice.PNG");
  $("#img2").attr("src", "./img/fried-rice.PNG");
  $("#img3").attr("src", "./img/fried-rice.PNG");
  $("#category1").text("RICE & NOODLES");
  $("#photosLabel1").text("4 dishes");
}


