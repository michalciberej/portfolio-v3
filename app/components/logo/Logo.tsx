'use client';

import S from './Logo.module.scss';
import pageTransition from '@/app/animations/pageTransition';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();

  const handleClick = () => {
    pageTransition('/', router);
  };
  return (
    <div className={S.container}>
      <button
        type='button'
        onClick={handleClick}
        data-logo
        className={S.logo}>
        <span>MICHAL</span>
        <span>CIBEREJ</span>
      </button>
      <div className={S.mask} />
    </div>
  );
};

export default Logo;
