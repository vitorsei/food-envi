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
  var array = [];
  array.push(0);
  localStorage.setItem("dishes", JSON.stringify(array));

  var storedItems = JSON.parse(localStorage.getItem("dishes"));
  if (storedItems) {
    for (var i = 0; i < storedItems.length; i++) {
      $("#" + i).attr("src", "./img/" + dishesMap[0].img);
    }
  }
}


