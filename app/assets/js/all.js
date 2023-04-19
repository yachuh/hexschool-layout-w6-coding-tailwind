console.log("Hello!");

$(document).ready(() => {
  console.log("HesSchool Hello!");
});

// toggle mobile nav menu
const navBtn = document.querySelector("#navMobileBtn");
const navMobileMenu = document.querySelector("#navMobileMenu");

navBtn.addEventListener("click", () => {
  navMobileMenu.classList.toggle("hidden");
});
