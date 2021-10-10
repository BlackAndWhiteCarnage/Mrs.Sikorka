import React from 'react';
import PropTypes from 'prop-types';
// MOLECULES
import Hamburger from 'components/molecules/Hamburger/Hamburger';
// ATOMS
import NavItem from 'components/atoms/NavItem/NavItem';
import Logo from 'components/atoms/Logo/Logo';
// STYLES
import { Wrapper, NavItemsWrapper } from './NavigationItems.styles';

const NavigationItems = ({ toggleModal, toggleModalHandler }) => (
  <Wrapper>
    <NavItemsWrapper>
      <NavItem to='/o_mnie' text='O Mnie' />
      <NavItem to='/oferta' text='Oferta' />
      <Logo />
      <NavItem to='/cennik' text='Cennik' />
      <NavItem to='/kontakt' text='Kontakt' />
      <Hamburger toggleModalHandler={toggleModalHandler} toggleModal={toggleModal} />
    </NavItemsWrapper>
  </Wrapper>
);

NavigationItems.propTypes = {
  toggleModal: PropTypes.bool.isRequired,
  toggleModalHandler: PropTypes.func.isRequired,
};

export default NavigationItems;
