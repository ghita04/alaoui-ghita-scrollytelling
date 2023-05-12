/* ---- Pluggins ---- */

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
//gsap.registerPlugin(DrawSVGPlugin);
//gsap.registerPlugin(MorphSVGPlugin);

/* ---- Pré-requis pour la spritesheet ---- */

let body = document.querySelector("body");
let timeScroller;

window.addEventListener("scroll", function () {
  body.classList.add("is-scrolling");

  timeScroller = setTimeout(function () {
    body.classList.remove("is-scrolling");
  }, 100);
});

/* ---- Appel à l'action ---- */

const defilement = gsap.to(".bi-chevron-double-down", {
  y: "30%",
  duration: 0.75,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
});

/* ---- Animation de l'homme qui tombe avec Ixy qui apparait Chapitre 1 ---- */

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#chapitre1",
      toggleActions: "restart complete reverse reset",
      scrub: true,
    },
  })

  .from(".homme_qui_tombe", { y: "-200%", duration: 3 })
  .from(".ixy_vole", { x: "250%", duration: 3 });

/* ---- Animation des feuilles tombantes chapitre 2 ---- */

gsap.to(".feuille", {
  scrollTrigger: {
    trigger: "#chapitre2",
    toggleActions: "restart complete reverse reset",
    scrub: true,
  },
  y: "270%",
  ease: "power1.inOut",
  duration: 50,
});

/* ---- Animation de la roche qui grossit chapitre 3 ---- */

const roche = document.querySelector(".roche");

roche.addEventListener("click", () => {
  gsap.to(".roche", {
    scaleX: "250%",
    scaleY: "250%",
    duration: 2,
    ease: "power1.inOut",
  });
});

/* ---- Animation des racines qui disparaissent chapitre 4 ---- */

gsap.to(".racine", {
  scrollTrigger: {
    trigger: "#chapitre4",
    toggleActions: "restart complete reverse reset",
    scrub: true,
  },
  opacity: -0,
  duration: 15,
});

gsap.to(".racine_opposee", {
  scrollTrigger: {
    trigger: "#chapitre4",
    toggleActions: "restart complete reverse reset",
    scrub: true,
  },
  opacity: -0,
  duration: 10,
});

/* ---- Animation de la feuille qui vole avec le MotionPath chapitre 5 ---- */

gsap.to(".feuille_svg", {
  motionPath: {
    align: ".cls-1",
    path: ".cls-1",
  },
  scrollTrigger: {
    start: 0,
    end: 1,
    duration: 10,
    yoyo: true,
  },
});

/* ---- Animation d'Ixy qui s'envole au paradis, puis le mot Fin apparait Chapitre 6 ---- */

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#fin",
      toggleActions: "restart complete reverse reset",
    },
  })

  .to(".ixy_fin", { y: "30%", duration: 3 })
  .from(".motdefin", { x: "100%", duration: 3 });

/* ---- Animation des Spritesheets ---- */

gsap.to(".spritesheet01", {
  scrollTrigger: {
    trigger: "#chapitre2",
    toggleActions: "restart complete reverse reset",
  },
  x: "50%",
  duration: 10,
});

gsap.to(".spritesheet01", {
  scrollTrigger: {
    trigger: "#chapitre4",
    toggleActions: "restart complete reverse reset",
  },
  x: "50%",
  duration: 10,
});

/* ---- Parallaxe ---- */

gsap.to("#section-parallax", {
  backgroundSize: "200%",
  ease: "none",
  scrollTrigger: {
    trigger: "#section-parallax",
    start: "top bottom",
    end: "bottom top",
    scrub: 0.5,
  },
});
gsap.to(".scrolly-texte", {
  xPercent: 200,
  ease: "none",
  scrollTrigger: {
    trigger: "#section-parallax",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

/* ---- Draw dans le parallaxe ---- */

/*gsap.to(".path", {
  scrollTrigger: {
    trigger: "#section-parallax",
    start: "top center",
    end: "top 400px",
    scrub: true,
  },
  drawSVG: "0% 100%",
});
*/

/* ---- Morphing ---- */

/*let anim = gsap.to("#circle", {
  scrollTrigger: {
    trigger: "#chapitre5",
    toggleActions: "restart complete reverse reset",
  },
  morphSVG: "#star",
  duration: 6,
  repeat: -1,
});

gsap.to(".morph", {
  scrollTrigger: {
    trigger: "#chapitre5",
    toggleActions: "restart",
  },
  y: "-50%",
  duration: 10,
  repeat: -1,
});*/
