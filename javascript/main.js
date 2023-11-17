$(document).ready(function () {
  console.log("document loaded");


  $("#btn1").click(function () {
    $("#img1").fadeToggle(2000);
  })


  $("#btn2").on("click", function () {
    $("#div1").slideToggle(5000);
  });

  $("#p1").on("mouseover", function () {
    $(this).css('color', 'yellow');
  });

  $("#p1").on("mouseout", function () {
    $(this).css('color', 'white');
  });

  $("#img2").hover(function () {
    alert("U bent over de aarde!");
  });
  $("#p2").on("mouseover", function () {
    $("#p2").fadeOut(2000);
  });
  $("#p2").on("mouseout", function () {
    $("#p2").fadeIn();
  });


});