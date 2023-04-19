"use strict";

console.log("Hello!");
$(document).ready(function () {
  console.log("HesSchool Hello!");
}); // toggle mobile nav menu

var navBtn = document.querySelector("#navMobileBtn");
var navMobileMenu = document.querySelector("#navMobileMenu");
navBtn.addEventListener("click", function () {
  navMobileMenu.classList.toggle("hidden");
});
//# sourceMappingURL=all.js.map
