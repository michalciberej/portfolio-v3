'use client';

import { SetStateAction } from 'react';
import S from './MenuBurgerButton.module.scss';
import menuAnimation from '@/app/animations/menuAnimation';
import logoAnimation from '@/app/animations/LogoAnimation';

const MenuBurgerButton = ({
  menuState,
  setMenuState,
}: {
  menuState: boolean;
  setMenuState: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const handleClick = () => {
    logoAnimation(menuState);
    menuAnimation(menuState);
    setMenuState(!menuState);
  };

  return (
    <button
      type='button'
      aria-label='Menu'
      onClick={handleClick}
      className={S.container}>
      <div
        className={S.upper}
        data-burgertop='true'
      />
      <div
        className={S.lower}
        data-burgerbottom='true'
      />
    </button>
  );
};

export default MenuBurgerButton;
