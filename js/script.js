gsap.registerPlugin(ScrollTrigger);

let body = document.querySelector("body");
let timeScroller;

window.addEventListener("scroll", function () {
  body.classList.add("is-scrolling");

  timeScroller = setTimeout(function () {
    body.classList.remove("is-scrolling");
  }, 100);
});

const defilement = gsap.to(".bi-chevron-double-down", {
  y: "30%",
  duration: 0.75,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
});

const feuille = gsap.to(".feuille", {
  scrollTrigger: ".feuille",
  y: "250%",
  ease: "power1.inOut",
  duration: 5,
  opacity: 3,
});

const roche = document.querySelector(".roche");

roche.addEventListener("click", () => {
  gsap.to(".roche", {
    scaleX: "200%",
    scaleY: "200%",
    duration: 1,
    ease: "power1.inOut",
  });
});

const racinedroite = gsap.to(".racine", 10, {
  scrollTrigger: ".racine",
  opacity: -0,
});

const racinegauche = gsap.to(".racine_opposee", 10, {
  scrollTrigger: ".racine_opposee",
  opacity: -0,
});

gsap
  .timeline()
  .from(".homme_qui_tombe", { y: "-500%", duration: 3 })
  .from(".ixy_vole", { x: "700%", duration: 3 });

gsap
  .timeline()
  .to(".ixy_fin", { y: "-200%", duration: 3 })
  .from(".motdefin", { x: "100%", duration: 3 });
