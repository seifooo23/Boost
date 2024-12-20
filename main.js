// select nav trigger btn
const navTrigger = document.getElementById("navTrigger");
// select navigation
const nav = document.getElementById("nav");
// select the nav trigger close btn
const closeBtn = document.getElementById("navCloseBtn");

// select the header
const header = document.getElementById("header");

// make a navigation event listener
navTrigger.addEventListener("click", () => {
  // toggle the "is-open" class on the navigation element to open/close the menu
  nav.classList.toggle("is-open");
});

closeBtn.addEventListener("click", () => {
  // remove the "is-open" class from the navigation
  nav.classList.remove("is-open");
});

// add a scroll event listener to the window
window.addEventListener("scroll", () => {
  // get the current vertical scroll position
  const scrollY = window.scrollY;

  // console.log(scrollY)

  // add or remove the active class from the header based on the scroll position
  scrollY > 50
    ? header.classList.add("is-active")
    : header.classList.remove("is-active");
});

// swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  slidePerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// faq
const faqItems = document.querySelectorAll(".faq__item");

faqItems.forEach((item) => {
  item.addEventListener("click", () => {
    const isOpen = item.classList.toggle("is-open");
    const iconClass = isOpen ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line";
    const iconElement = item.querySelector("i");
    iconElement.classList = `${iconClass}`;
  });
});

// scroll reveal
const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 3000,
  delay: 500,
  // reset: true, resets the animations
});

// custom configurations for specific elements
const revealFromTop = {
  origin: "top",
};

const revealWithInterval = {
  distance: "100px",
  interval: 100,
};

const revealFromLeft = {
  distance: "100px",
  origin: "left",
};
const revealFromRight = {
  distance: "100px",
  origin: "right",
};
const revealWithDelay = {
  distance: "100px",
  delay: 400,
};
const revealWithShortDistance = {
  distance: "60px",
  interval: 100,
};

// banner 
sr.reveal(".banner__text", revealFromTop);
sr.reveal(".banner__image", );

// brands
sr.reveal(".brands__title", revealWithDelay);
sr.reveal(".brands__img", revealWithInterval);

// benfits
sr.reveal(".benfits__title", revealWithShortDistance);
sr.reveal(".benfit__text", revealFromLeft);
sr.reveal(".benfit__img", revealFromRight);
sr.reveal(".benfit--2 .benfit__text", revealFromLeft);

// testimonials
sr.reveal(".testimonials, .testimonials__container", {
  distance: "100px",
});

// services
sr.reveal(".services__title, .services__item", revealWithInterval);

// FAQ
sr.reveal(".faq__img", {
  distance: "100px",
  origin: "top",
  interval: 100,
})

sr.reveal(".faq__title, .faq__item", revealWithInterval);

// contact
sr.reveal(".contact__form-wrapper");
sr.reveal(".contact__img", revealFromTop);

// footer
sr.reveal(".footer");