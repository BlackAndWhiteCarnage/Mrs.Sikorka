import React from 'react';
// ANIMATIONS
import { slider, sliderContainer } from 'assets/animations/animations';
// STYLES
import { Wrapper, Frame1, Frame2, Frame3, Frame4 } from './PageTransition.styles';

const PageTransition = () => {
  return (
    <Wrapper variants={sliderContainer} initial='hidden' animate='show' exit='exit'>
      <Frame1 variants={slider} />
      <Frame2 variants={slider} />
      <Frame3 variants={slider} />
      <Frame4 variants={slider} />
    </Wrapper>
  );
};

export default PageTransition;
