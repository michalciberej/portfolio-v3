import gsap from "gsap";

const loadAnimation = () => {
  const block = document.querySelector("[data-loadbg]");

  if (block) {
    gsap.set(block, { scaleY: 0 });
    gsap.to(block, {
      duration: 1,
      scaleY: 1,
      ease: "power2.out",
    });
  }
};

export default loadAnimation;
