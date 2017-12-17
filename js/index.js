$(document).ready(function () {
  loadDetails();

  $("#container0").click(function () {
    window.location.href = 'details.html?section=0';
  });

  $("#container1").click(function () {
    window.location.href = 'details.html?section=1';
  });

  $("#container2").click(function () {
    window.location.href = 'details.html?section=2';
  });
});

function loadDetails() {
  $("#header").text("CHIN CHIN");

  // $("#bigImage1").attr("src", "./img/fried-rice.PNG");
  // $("#smallImageA1").attr("src", "./img/stir-fry.PNG");
  // $("#smallImageB1").attr("src", "./img/crispy-soft.PNG");
  // $("#category1").text("RICE & NOODLES");
  // $("#photosLabel1").text("4 dishes");
  //
  //
  // $("#bigImage2").attr("src", "./img/stir-fry.PNG");
  // $("#smallImageA2").attr("src", "./img/pad-thai.PNG");
  // $("#smallImageB2").attr("src", "./img/fried-rice.PNG");
  // $("#category2").text("GREEN STUFF");
  // $("#photosLabel2").text("3 dishes");



  for (let i = 0; i < dishesMap.length; i++) {
    const section = dishesMap.find(dish => dish.section === i);
    const dishes = section.dishes;
    const category = section.category;

    $("#bigImage" + i).attr("src", dishes[0].img);
    $("#smallImageA" + i).attr("src", dishes[1].img);
    $("#smallImageB" + i).attr("src", dishes[2].img);
    $("#category" + i).text(category);
    $("#photosLabel" + i).text(dishes.length + " dishes");
  }
}


