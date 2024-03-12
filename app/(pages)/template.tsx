'use client';

import TransitionBlocks from '../components/blocks/TransitionBlocks';

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <TransitionBlocks />
    </>
  );
};

export default Template;
