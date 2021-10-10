import React from 'react';
import PropTypes from 'prop-types';
// STYLES
import { Wrapper } from './ModalNavItem.styles';

const ModalNavItem = ({ className, to, text }) => (
  <Wrapper className={className} to={to} exact activeClassName='active-link'>
    {text}
  </Wrapper>
);

ModalNavItem.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ModalNavItem;
