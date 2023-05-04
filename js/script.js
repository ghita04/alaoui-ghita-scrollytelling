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
    scaleX: "250%",
    scaleY: "250%",
    duration: 2,
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

const vent = gsap.to(".feuille_svg", {
  motionPath: {
    path: "#Calque_4",
  },
  duration: 70,
});

gsap.to(".cls-1", {
  scrollTrigger: {
    trigger: ".chapitre1",
    scrub: 0.5,
    start: "top top",
    end: "+=300%",
  },
  ease: "none",
  drawSVG: "75% 75%",
});

gsap.to(".feuille_orange_04", {
  motionPath: "#courbe",
  duration: 4,
  repeat: -1,
  yoyo: true,
});

gsap
  .timeline()
  .from(".homme_qui_tombe", { y: "-500%", duration: 3 })
  .from(".ixy_vole", { x: "700%", duration: 3 });

gsap
  .timeline()
  .to(".ixy_fin", { y: "-80%", duration: 3 })
  .from(".motdefin", { x: "100%", duration: 3 });
