"use strict";

console.log("Hello!");
$(document).ready(function () {
  console.log("HesSchool Hello!");
}); // toggle mobile nav menu

var navBtn = document.querySelector("#navMobileBtn");
var navMobileMenu = document.querySelector("#navMobileMenu");
navBtn.addEventListener("click", function () {
  navMobileMenu.classList.toggle("hidden");
}); //=== Swiper ====//
// // import Swiper bundle with all modules installed
// import Swiper from "swiper-bundle";
// // import styles bundle
// import "swiper/css/bundle";
// Initialize swiper

var swiper = new Swiper(".course-swiper", {
  autoplay: {
    disableOnInteraction: false,
    delay: 1000
  },
  speed: 1500,
  loop: true,
  slidesPerView: "auto",
  //多欄
  breakpoints: {
    360: {
      spaceBetween: 8
    },
    768: {
      spaceBetween: 16
    },
    992: {
      spaceBetween: 16
    }
  }
});
var swiperCustomer = new Swiper(".review-swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
//# sourceMappingURL=all.js.map
