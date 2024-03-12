'use client';

import MenuBurgerButton from '../buttons/burgerMenu/MenuBurgerButton';
import Logo from '../logo/Logo';
import styles from './Header.module.scss';
import NavMenu from '../navigation/NavMenu';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <nav className={styles.container}>
      <Logo />
      <NavMenu />
      <MenuBurgerButton
        menuState={isMenuOpened}
        setMenuState={setIsMenuOpened}
      />
    </nav>
  );
};

export default Header;
