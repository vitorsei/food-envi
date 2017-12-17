var isScrolling;
var storedItems = JSON.parse(localStorage.getItem("dishes")) || [];

$(document).ready(function () {
  loadDetails();
  $("#circle0").addClass("selected");

  var carousel = $('.carousel');


  carousel.scroll(function () {
    const width = $("#0").width();
    const scroll = $("#0").offset().left * -1;

    const index = indicator(scroll, width);
    const selector = '#circle' + index;

    $(".circle").removeClass("selected");
    $(selector).addClass("selected");

    // Clear our timeout throughout the scroll
    window.clearTimeout(isScrolling);


    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(function () {
      // carousel.scrollLeft( index * width );
      carousel.animate({ scrollLeft: index * width }, 350);
    }, 350);

  });

  $(".main").click(function (e) {
    var id = Number(e.currentTarget.firstElementChild.id);

    var index = storedItems.indexOf(id);
    if (index === -1) {
      bookmark(id);
    } else {
      unbookmark(index, id);
    }
  });

  $("#bookmarkIcon").click(function (e) {
    window.location.href = 'bookmarks.html';
    // e.stopPropagation();
    // bookmark();
  });
});

function unbookmark(index, id) {
  storedItems.splice(index, 1);
  localStorage.setItem("dishes", JSON.stringify(storedItems));
  $("#like" + id).css({ fill: "#b4b4b4" });
}

function bookmark(id) {
  storedItems.push(id);
  localStorage.setItem("dishes", JSON.stringify(storedItems));

  $("#bookmark").addClass('showBookmark');
  setTimeout(function () {
    $("#bookmark").removeClass('showBookmark');
  }, 1200);
  $('#like' + id).css({ fill: "#ed4956" });
}

function indicator(scroll, width) {
  return Math.round(scroll / width);
}


function loadDetails() {

  $("#0").attr("src", "./img/" + dishesMap[0].img);
  $("#dishName0").text(dishesMap[0].name);
  $("#description0").text(dishesMap[0].description);
  $("#price0").text(dishesMap[0].price);
  $("#allergy0").text(dishesMap[0].allergy);

  $("#1").attr("src", "./img/" + dishesMap[1].img);
  $("#dishName1").text(dishesMap[1].name);
  $("#description1").text(dishesMap[1].description);
  $("#price1").text(dishesMap[1].price);
  $("#allergy1").text(dishesMap[1].allergy);

  $("#2").attr("src", "./img/" + dishesMap[2].img);
  $("#dishName2").text(dishesMap[2].name);
  $("#description2").text(dishesMap[2].description);
  $("#price2").text(dishesMap[2].price);
  $("#allergy2").text(dishesMap[2].allergy);

  $("#3").attr("src", "./img/" + dishesMap[3].img);
  $("#dishName3").text(dishesMap[3].name);
  $("#description3").text(dishesMap[3].description);
  $("#price3").text(dishesMap[3].price);
  $("#allergy3").text(dishesMap[3].allergy);
}


