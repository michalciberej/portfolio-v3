import gsap from 'gsap';
import colors from '../scss/_colors.module.scss';

const logoAnimation = (menuState: boolean) => {
  const logo = document.querySelector('[data-logo]');

  if (logo && menuState) {
    gsap.set(logo, { color: colors.colorText });
    gsap.to(logo, { color: colors.colorBackground });
  }

  if (logo && !menuState) {
    gsap.set(logo, { color: colors.colorBackground });
    gsap.to(logo, { color: colors.colorText });
  }
};

export default logoAnimation;
