'use client';

import { useEffect } from 'react';

const SmoothScrollW = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return <>{children}</>;
};

export default SmoothScrollW;
