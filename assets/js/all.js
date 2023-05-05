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
}); // login Modal

var loginModal = document.getElementById("loginModal");
var loginBtn = document.getElementById("btn-login");
var closeBtn = document.getElementById("btn-close");
var body = document.querySelector("body");

var toggleLoginModal = function toggleLoginModal() {
  loginModal.classList.toggle("hidden"); // Make body unscrollable when modal is opened

  if (!loginModal.classList.contains("hidden")) {
    // Disable scroll
    body.style.overflow = "hidden";
  } else {
    // Enable scroll
    body.style.overflow = "auto";
  }
}; // vanillajs-datepicker


var elem = document.querySelector('input[name="foo"]');
var datepicker = new Datepicker(elem, {
  autohide: true,
  format: "yyyy/mm/dd"
});
//# sourceMappingURL=all.js.map
