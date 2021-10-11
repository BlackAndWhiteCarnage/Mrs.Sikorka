import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
// MOLECULES
import Hamburger from 'components/molecules/Hamburger/Hamburger';
import HomeIcon from 'components/molecules/HomeIcon/HomeIcon';
// ATOMS
import NavItem from 'components/atoms/NavItem/NavItem';
import Logo from 'components/atoms/Logo/Logo';
// STYLES
import { Wrapper, NavItemsWrapper, HomeAndHambrgerWrapper } from './NavigationItems.styles';

const NavigationItems = ({ toggleModal, toggleModalHandler }) => {
  const location = useLocation().pathname;

  return (
    <Wrapper>
      <NavItemsWrapper>
        <NavItem to='/o_mnie' text='O Mnie' />
        <NavItem to='/oferta' text='Oferta' />
        <Logo />
        <NavItem to='/cennik' text='Cennik' />
        <NavItem to='/kontakt' text='Kontakt' />
        <HomeAndHambrgerWrapper className={location !== '/' && 'show'}>
          <HomeIcon location={location} toggleModalHandler={toggleModalHandler} />
          <Hamburger toggleModalHandler={toggleModalHandler} toggleModal={toggleModal} />
        </HomeAndHambrgerWrapper>
      </NavItemsWrapper>
    </Wrapper>
  );
};

NavigationItems.propTypes = {
  toggleModal: PropTypes.bool.isRequired,
  toggleModalHandler: PropTypes.func.isRequired,
};

export default NavigationItems;
