$(document).ready(function () {
  // $(".loader").style.display = "none";
  $(".spinner").fadeOut(2000, function () {
    $("body").css("overflow", "auto");
    $(this).parent().fadeOut(1000);
    $(this).parent().remove();
  });
});

function toggleBox() {
  $("#colors-options").fadeToggle(1000);
}

$("#colors-options li").click(function () {
  $("link[href*='theme']").attr("href", $(this).attr("data-value"));
});

let mainCarousel = document.getElementById("mainCarousel"),
  carousel1 = new bootstrap.Carousel(mainCarousel, { interval: 5000 }),
  testimonialsCarousel = document.getElementById("testimonialsCarousel"),
  carousel2 = new bootstrap.Carousel(testimonialsCarousel, { interval: 5000 });

$(window).scroll(function () {
  // console.log($(this).scrollTop());
  if ($(this).scrollTop() >= 550) {
    $(".scroll-top").show(300);
  } else {
    $(".scroll-top").hide(300);
  }
});

$(".scroll-top").click(function () {
  $("html").animate({ scrollTop: 0 }, 300);
});
