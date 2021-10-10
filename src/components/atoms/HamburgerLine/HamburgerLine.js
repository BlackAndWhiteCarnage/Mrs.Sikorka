import React from 'react';
import PropTypes from 'prop-types';
// STYLES
import { Wrapper } from './HamburgerLine.styles';

const HamburgerLine = ({ className }) => (
  <Wrapper className={className}>
    <div />
    <div />
  </Wrapper>
);

HamburgerLine.propTypes = {
  className: PropTypes.string.isRequired,
};

export default HamburgerLine;
