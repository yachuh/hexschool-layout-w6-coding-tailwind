//=== toggle mobile nav menu ===//
const navBtn = document.querySelector("#navMobileBtn");
const navMobileMenu = document.querySelector("#navMobileMenu");

navBtn.addEventListener("click", () => {
  navMobileMenu.classList.toggle("hidden");
});

//=== Swiper ====//
// Initialize swiper
const swiper = new Swiper(".course-swiper", {
  autoplay: {
    disableOnInteraction: false,
    delay: 1000,
  },
  speed: 1500,
  loop: true,
  slidesPerView: "auto",
  //多欄
  breakpoints: {
    360: {
      spaceBetween: 8,
    },
    768: {
      spaceBetween: 16,
    },
    992: {
      spaceBetween: 16,
    },
  },
});

const swiperCustomer = new Swiper(".review-swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//=== login Modal ===//
const loginModal = document.getElementById("loginModal");
const loginBtn = document.getElementById("btn-login");
const closeBtn = document.getElementById("btn-close");
const body = document.querySelector("body");

const toggleLoginModal = () => {
  loginModal.classList.toggle("hidden");

  // Make body unscrollable when modal is opened
  if (!loginModal.classList.contains("hidden")) {
    // Disable scroll
    body.style.overflow = "hidden";
  } else {
    // Enable scroll
    body.style.overflow = "auto";
  }
};

//=== vanillajs-datepicker ===//
const elem = document.querySelector('input[name="foo"]');
const datepicker = new Datepicker(elem, {
  autohide: true,
  format: "yyyy/mm/dd",
  language: "zh-TW",
  todayHighlight: "true",
});

//=== AOS animation ===//
AOS.init();
