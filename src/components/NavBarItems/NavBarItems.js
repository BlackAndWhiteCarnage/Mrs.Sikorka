import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import Hamburger from 'components/Hamburger/Hamburger';
import HomeIcon from 'components/HomeIcon/HomeIcon';
import NavItem from 'components/NavItem/NavItem';
import logoIcon from 'assets/icons/logo-icon.svg';
import { Wrapper, NavItemsWrapper, HomeAndHambrgerWrapper, Logo } from './NavBarItems.styles';
import { navAnim } from 'assets/animations/animations';

const NavBarItems = ({ toggleModal, toggleModalHandler }) => {
  const location = useLocation().pathname;

  return (
    <Wrapper variants={navAnim} initial='hidden' animate='show'>
      <NavItemsWrapper>
        <NavItem to='/o_mnie' text='O Mnie' className='desktopNavItem' />
        <NavItem to='/oferta' text='Oferta' className='desktopNavItem' />
        <Logo>
          <img src={logoIcon} alt='Logo Eweliny Sikory' />
        </Logo>
        <NavItem to='/cennik' text='Cennik' className='desktopNavItem' />
        <NavItem to='/kontakt' text='Kontakt' className='desktopNavItem' />
        <HomeAndHambrgerWrapper className={location !== '/' && 'show'}>
          <HomeIcon location={location} toggleModalHandler={toggleModalHandler} />
          <Hamburger toggleModalHandler={toggleModalHandler} toggleModal={toggleModal} />
        </HomeAndHambrgerWrapper>
      </NavItemsWrapper>
    </Wrapper>
  );
};

NavBarItems.propTypes = {
  toggleModal: PropTypes.bool.isRequired,
  toggleModalHandler: PropTypes.func.isRequired,
};

export default NavBarItems;
