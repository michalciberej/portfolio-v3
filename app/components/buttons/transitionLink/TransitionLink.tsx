'use client';

import { useRouter } from 'next/navigation';
import pageTransition from '@/app/animations/pageTransition';
import S from './TransitionLink.module.scss';

const TransitionLink = ({ href, label }: { href: string; label: string }) => {
  const router = useRouter();

  const handleClick = () => {
    pageTransition(href, router);
  };

  return (
    <button
      type='button'
      aria-label={`Link to ${label}`}
      data-menulink
      className={S.link}
      onClick={handleClick}>
      {label}
    </button>
  );
};

export default TransitionLink;
