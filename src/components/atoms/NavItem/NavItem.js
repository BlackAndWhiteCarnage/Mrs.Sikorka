import React from 'react';
import PropTypes from 'prop-types';
// STYLES
import { Wrapper } from './NavItem.styles';

const NavItem = ({ to, text }) => (
  <Wrapper to={to} exact activeClassName='active-link'>
    {text}
  </Wrapper>
);

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavItem;
