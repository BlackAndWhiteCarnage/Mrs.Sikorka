import React from 'react';
import PropTypes from 'prop-types';
// ATOMS
import HamburgerLine from 'components/atoms/HamburgerLine/HamburgerLine';
// STYLES
import { Wrapper } from './Hamburger.styles';

const Hamburger = ({ toggleModal, toggleModalHandler }) => (
  <Wrapper onClick={toggleModalHandler}>
    <HamburgerLine className={`top ${toggleModal && 'toggle'}`} />
    <HamburgerLine className={`mid ${toggleModal && 'toggle'}`} />
    <HamburgerLine className={`bot ${toggleModal && 'toggle'}`} />
  </Wrapper>
);

Hamburger.propTypes = {
  toggleModal: PropTypes.bool.isRequired,
  toggleModalHandler: PropTypes.func.isRequired,
};

export default Hamburger;
