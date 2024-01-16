const btn = document.querySelector(".header__list-menu-btn");
const menu = document.querySelector(".menu");
const blur = document.querySelector(".blur");
const wave = document.querySelector(".wave");
const menuClosebtn = document.querySelector(".menu-close-btn");

/*Menu*/

btn.addEventListener("click", function () {
  menu.classList.add("menu-active");
  blur.classList.add("blur-active");
});

menuClosebtn.addEventListener("click", function () {
  menu.classList.remove("menu-active");
  blur.classList.add("blur-disactive");
  setTimeout(() => {
    blur.classList.remove("blur-active");
    blur.classList.remove("blur-disactive");
  }, 300);
});

/*Find btn*/

const findbtn = document.querySelector(".header__list-find-btn");
const findinput = document.querySelector(".search-input");
findbtn.addEventListener("click", function () {
  findinput.classList.add("search-input-active");
});

/*Scroll Anim*/

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
