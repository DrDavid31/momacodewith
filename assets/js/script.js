/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (!elem) return;
  if (elem.length && elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
     } else if (elem.length === 1) {
    elem[0].addEventListener(type, callback);
  } else {
    elem.addEventListener(type, callback);
  }


/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar?.classList.toggle("active");
  navToggler?.classList.toggle("active");
};

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar?.classList.remove("active");
  navToggler?.classList.remove("active");
};

}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
     header?.classList.add("active");
    backTopBtn?.classList.add("active");
  } else {
  header?.classList.remove("active");
    backTopBtn?.classList.remove("active");
  }
});

window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
   if (!preloader) return;
  setTimeout(function () {
    preloader.classList.add("hidden");
  }, 3000);
});
