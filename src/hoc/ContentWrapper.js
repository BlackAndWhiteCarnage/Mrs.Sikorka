import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { contentAnim } from 'assets/animations/animations';

const Wrapper = styled(motion.section)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 100px 0;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-top: 2px solid ${({ theme }) => theme.colors.beigeDark3};
  margin-top: calc(100vh - 75px);
  &.column {
    flex-direction: column;
  }
`;

const ContentWrapper = ({ children, className }) => (
  <Wrapper className={className} variants={contentAnim} initial='hidden' animate='show' exit='exit'>
    {children}
  </Wrapper>
);

ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContentWrapper;
