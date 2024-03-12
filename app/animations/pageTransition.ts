import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import gsap from 'gsap';

const duration = 0.6;
const stagger = 0.06;
const ease = 'power2.out';

const pageTransition = (href: string, router: AppRouterInstance) => {
  const transitionEls = gsap.utils.toArray<HTMLElement>('.transition');

  if (transitionEls) {
    const tl = gsap.timeline();

    tl.set(transitionEls, {
      scaleY: 0,
      transformOrigin: 'top',
    });

    tl.to(transitionEls, {
      scaleY: 1,
      duration,
      stagger,
      ease,
      onComplete: () => router.push(href),
    });
    tl.set(transitionEls, { transformOrigin: 'bottom' });
    tl.to(transitionEls, {
      scaleY: 0,
      duration,
      stagger,
      ease,
    });
  }
};

export default pageTransition;
