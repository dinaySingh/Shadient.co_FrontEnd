// Animation for Navbar 

gsap.from(".navbar", {
  duration: 1,
  y: -50,
  opacity: 0,
  ease: "power3.out",
});

// Animation for Responsive Navbar

document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu-bar");
  const navLink = document.querySelector(".nav-link");

  menu.addEventListener("click", () => {
    navLink.classList.toggle("active");
  });
});
// Animation for Hero 
document.addEventListener("DOMContentLoaded", () => {
  const words = document.querySelectorAll(".animated-title .word");
  gsap.from(words, {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.18,
    ease: "power3.out",
  });
});
gsap.from(".hero p", {
  duration: 1.5,
  y: 50,
  opacity: 0,
  ease: "power3.out",
  delay: 0.8,
});
gsap.from(".hero input, .hero button", {
  duration: 1.5,
  y: 50,
  opacity: 0,
  ease: "power3.out",
  delay: 1.1,
});

// Animation for Trust Section 
document.addEventListener("DOMContentLoaded", () => {
  const counterElem = document.getElementById("count");
  let counterObj = { count: 0 };

  gsap.to(counterObj, {
    count: 200,
    duration: 2,
    ease: "power1.out",
    onUpdate: () => {
      counterElem.innerText = Math.round(counterObj.count);
    },
    scrollTrigger:{
      trigger:".trusted-section #count",
    scroller:"body",
    start:"top 80%"
  }

  });
});
gsap.registerPlugin(ScrollTrigger);

gsap.from(".trusted-heading", {
  x: -100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".trusted-section",
    start: "top 70%",
    end: "top 30%",
    scrub: true,
  }
});

gsap.from(".trusted-text", {
  x: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".trusted-section",
    start: "top 70%",
    end: "top 30%",
    scrub: true,
  }
});

// Animation for brand 

gsap.registerPlugin(ScrollTrigger);

gsap.to(".first-row", {
  x: "-50%",
  ease: "none",
  scrollTrigger: {
    trigger: ".Brands",
    start: "top bottom",
    end: "bottom top", 
    scrub: true, 
  }
});

gsap.to(".second-row", {
  x: "50%",
  ease: "none",
  scrollTrigger: {
    trigger: ".Brands",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  }
});

// Animation for What We are Offering 
gsap.from(".offer-para,.offer-headline", {
  duration: 1.5,
  y: 70,
  opacity: 0,
  ease: "power3.out",
  delay: 1,
  stagger:true,
  scrollTrigger: {
    trigger: ".offer-header",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  }

});

gsap.from(".offer-card", {
  opacity: 0,
  y: 50,
  duration: 0.8,
  stagger: 0.3,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".offer-grid",
    start: "top 80%",
    toggleActions: "play none none none"
  },
});

