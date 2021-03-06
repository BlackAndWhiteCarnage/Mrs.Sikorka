import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './NavItem.styles';

const NavItem = ({ to, text, className }) => (
  <Wrapper to={to} exact activeClassName='active-link' className={className} id='active'>
    {text}
  </Wrapper>
);

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default NavItem;
