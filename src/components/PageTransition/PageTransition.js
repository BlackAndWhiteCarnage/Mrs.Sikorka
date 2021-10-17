import React from 'react';
import PropTypes from 'prop-types';

import { slider, sliderContainer } from 'assets/animations/animations';

import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper2 = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100vh;
  z-index: 9999;
  pointer-events: none;
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.beigeDark};
`;

const Frame2 = styled(Frame1)`
  background: ${({ theme }) => theme.colors.beigeDark1};
`;

const Frame3 = styled(Frame1)`
  background: ${({ theme }) => theme.colors.beigeDark2};
`;

const Frame4 = styled(Frame1)`
  background: ${({ theme }) => theme.colors.beigeDark3};
`;

const PageTransition = () => {
  return (
    <Wrapper2 variants={sliderContainer} initial='hidden' animate='show' exit='exit'>
      <Frame1 variants={slider} />
      <Frame2 variants={slider} />
      <Frame3 variants={slider} />
      <Frame4 variants={slider} />
    </Wrapper2>
  );
};

PageTransition.propTypes = {};

export default PageTransition;
