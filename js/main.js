$(document).ready(function () {
  $("#img1").attr("src", "./img/fried-rice.PNG");
  $("#dishName1").text("PINEAPPLE & EGG FRIED RICE");
  $("#description1").text("spiced shredded chicken, cashew, mint & chilli");
  $("#price1").text("$25.5");
  $("#allergy1").text("dairy & gluten free");

  $("#img2").attr("src", "./img/stir-fry.PNG");
  $("#dishName2").text("STIR FRY OF BUG TAIL & CHOPPED PRAWN");
  $("#description2").text("egg noodle & hellfire chilli oil");
  $("#price2").text("$28.5");
  $("#allergy2").text("dairy free");

  $("#img3").attr("src", "./img/pad-thai.PNG");
  $("#dishName3").text("PAD THAI NOODLES");
  $("#description3").text("dried shrimp & bean sprouts");
  $("#price3").text("$25.5");
  $("#allergy3").text("dairy free");

  $("#img4").attr("src", "./img/crispy-soft.PNG");
  $("#dishName4").text("CRISPY SOFT SHELL CRAB");
  $("#description4").text("green curry fried rice, thai basil");
  $("#price4").text("$26.5");
  $("#allergy4").text("dairy free");

  $("#circle0").addClass("selected");

  $(".carousel").scroll(function () {
    const width = $("#img1").width();
    const scroll = $("#img1").offset().left * -1;

    const index = indicator(scroll, width);
    const selector = '#circle' + index;

    $(".circle").removeClass("selected");
    $(selector).addClass("selected");
  });

  var bookmarked = false;

  $(".carousel").click(function () {
    if (!bookmarked) {
      bookmarked = true;
      $("#bookmark").addClass('showBookmark');
      $("#bookmarkIcon").addClass("bookmarked");
      setTimeout(function () {
        $("#bookmark").removeClass('showBookmark');
      }, 1200);
    }
  });

  $("#bookmarkIcon").click(function () {
    $("#bookmarkIcon").removeClass('bookmarked');
    bookmarked = !bookmarked;
  });

});

function indicator(scroll, width) {
  return Math.round(scroll / width);
}
