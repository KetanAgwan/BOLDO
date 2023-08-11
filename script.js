

AOS.init({
    duration: 1000,
    offset: 220
});

// javascript for swiper 
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  initialSlide: 2,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});