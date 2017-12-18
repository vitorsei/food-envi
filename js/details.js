let isScrolling;
let storedItems = JSON.parse(localStorage.getItem("dishes")) || [];
let urlParams;
let section;

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
      carousel.animate({scrollLeft: index * width}, 350);
    }, 350);

  });

  $(".main").click(function (e) {
    var id = Number(e.currentTarget.firstElementChild.id);

    const index = storedItems.findIndex(item => item.section === section && item.id === id);
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
  $("#like" + id).css({fill: "#b4b4b4"});
}

function bookmark(id) {
  const storeItem = {id, section};
  storedItems.push(storeItem);
  localStorage.setItem("dishes", JSON.stringify(storedItems));

  $("#bookmark").addClass('showBookmark');
  setTimeout(function () {
    $("#bookmark").removeClass('showBookmark');
  }, 1200);
  $('#like' + id).css({fill: "#ed4956"});
}

function indicator(scroll, width) {
  return Math.round(scroll / width);
}


function loadDetails() {
  urlParams = new URLSearchParams(window.location.search);
  // section = Number(urlParams.get('section'));
  section = 0;

  const dishes = dishesMap.find(item => item.section === section).dishes;
  for (let i = 0; i < dishes.length; i++) {
    $("#" + i).attr("src", dishes[i].img);
    $("#dishName" + i).text(dishes[i].name);
    $("#description" + i).text(dishes[i].description);
    $("#price" + i).text(dishes[i].price);
    $("#allergy" + i).text(dishes[i].allergy);
  }
}


