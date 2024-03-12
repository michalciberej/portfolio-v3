import colorsVars from '../scss/_colors.module.scss';
import SplitType from 'split-type';
import gsap from 'gsap';

const duration = 0.5;
const stagger = 0.05;
const ease = 'power2.out';
const rotation = 45;
const offset = 8;

const menuAnimation = (menuState: boolean) => {
  const animationBg = gsap.utils.toArray('[data-menubg]');
  const animationLinks = gsap.utils.toArray('[data-menulink]');
  const { chars } = new SplitType('[data-socials]');
  const t = document.querySelector('[data-burgertop]');
  const b = document.querySelector('[data-burgerbottom]');
  const elementsReady = animationBg && animationLinks && chars && t && b;

  if (elementsReady && menuState) {
    const tl = gsap.timeline();

    tl.set(animationBg, {
      scaleY: 1,
    });
    tl.set(animationLinks, { opacity: 1 });
    tl.set(chars, { yPercent: 0, opacity: 1 });
    tl.set(t, { rotate: rotation, y: offset });
    tl.set(b, { rotate: -rotation, y: -offset });

    tl.to(chars.reverse(), {
      yPercent: -100,
      opacity: 0,
      duration: 0.1,
      stagger: 0.03,
      ease,
    });
    tl.to(
      animationLinks.reverse(),
      { opacity: 0, stagger, duration: 0, ease },
      '<'
    );
    tl.to(
      animationBg,
      {
        scaleY: 0,
        duration,
        stagger,
        ease,
      },
      '<'
    );
    tl.to(
      t,
      {
        rotate: 0,
        y: 0,
        backgroundColor: colorsVars.colorBackground,
        duration,
        ease,
      },
      '<0.5'
    );
    tl.to(
      b,
      {
        rotate: 0,
        y: 0,
        backgroundColor: colorsVars.colorBackground,
        duration,
        ease,
      },
      '<'
    );
  }

  if (elementsReady && !menuState) {
    const tl = gsap.timeline();

    tl.set(animationBg, {
      scaleY: 0,
    });
    tl.set(animationLinks, { opacity: 0 });
    tl.set(chars, { yPercent: 100, opacity: 0 });
    tl.set([t, b], { rotate: 0, y: 0 });

    tl.to(
      animationBg,
      {
        scaleY: 1,
        duration,
        stagger,
        ease,
      },
      '<'
    );
    tl.to(animationLinks, { opacity: 1, stagger, duration, ease }, '<');

    tl.to(
      t,
      {
        rotate: rotation,
        y: offset,
        backgroundColor: colorsVars.colorText,
        duration,
        ease,
      },
      '<0.3'
    );
    tl.to(
      b,
      {
        rotate: -rotation,
        y: -offset,
        backgroundColor: colorsVars.colorText,
        duration,
        ease,
      },
      '<'
    );
    tl.to(
      chars,
      {
        yPercent: 0,
        stagger: 0.05,
        opacity: 1,
        ease,
      },
      '<0.2'
    );
  }
};

export default menuAnimation;
