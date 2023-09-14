import React, {ReactNode} from 'react';
import { AnimatedWrapper, Circles } from './animatedBackground.style';


const AnimatedBackground = ({ children }: { children: ReactNode }) => {

  return (
    <AnimatedWrapper>
      {children}
      <Circles>
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
      </Circles>
    </AnimatedWrapper>
  )
};

export default AnimatedBackground;


