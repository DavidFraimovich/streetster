const burger = document.querySelector(".burger");
const navbarNav = document.querySelector(".navbar-nav");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navbarNav.classList.toggle("active");
});

var owl = $(".owl-carousel");
owl.owlCarousel({
  loop: true,
  dots: false,
});
$(".owl-next").click(function () {
  owl.trigger("next.owl.carousel");
});
$(".owl-prev").click(function () {
  owl.trigger("prev.owl.carousel", [300]);
});
