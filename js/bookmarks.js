$(document).ready(function () {
  loadDetails();

  $(".container")
    .on("swipeleft", swipeleftHandler)
    .on("swiperight", swiperighttHandler);

  $("#header").click(function () {
    window.location.href = 'index.html';
  });

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
  // var array = [];
  // array.push(0);
  // localStorage.setItem("dishes", JSON.stringify(array));

  var storedItems = JSON.parse(localStorage.getItem("dishes"));
  if (storedItems) {
    storedItems.forEach(function (t) {
      $("#" + dishesMap[t].id).attr("src", "./img/" + dishesMap[t].img);
      $("#container" + dishesMap[t].id).addClass("visible");
    });
  }
}


