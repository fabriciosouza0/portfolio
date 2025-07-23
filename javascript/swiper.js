const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});
