var storedItems = JSON.parse(localStorage.getItem("dishes")) || [];

$(document).ready(function () {
  loadDetails();

  $(".container")
    .on("swipeleft", swipeHandler)
    .on("swiperight", swipeHandler);

  $("#header").click(function () {
    window.location.href = 'index.html';
  });

});

function swipeHandler(e) {
  $(e.currentTarget.firstElementChild).addClass("hide");
  var id = Number(e.currentTarget.firstElementChild.id);
  var index = storedItems.indexOf(id);
  unbookmark(index, id);
}

function unbookmark(index, id) {
  storedItems.splice(index, 1);
  localStorage.setItem("dishes", JSON.stringify(storedItems));
}

function loadDetails() {
  // var array = [];
  // array.push(0);
  // localStorage.setItem("dishes", JSON.stringify(array));

  var storedItems = JSON.parse(localStorage.getItem("dishes"));
  if (storedItems) {
    storedItems.forEach(function (t) {
      const dishes = dishesMap.find(dish => dish.section === t.section).dishes;
      $("#" + dishes[t.id].id).attr("src", dishes[t.id].img);
      $("#container" + dishes[t.id].id).addClass("visible");
    });
  }
}


