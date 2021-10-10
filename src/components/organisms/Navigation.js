import React from 'react';
import styled from 'styled-components';
import logoIcon from 'assets/icons/logo-icon.svg';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: ${({ theme }) => theme.colors.white};
  z-index: 9999;
  border-top: 4px solid ${({ theme }) => theme.colors.beigeDark3};
`;

const NavItemsWrapper = styled.ul`
  margin: auto;
  height: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavItem = styled(NavLink).attrs({ activeClassName: 'active-link' })`
  position: relative;
  width: 130px;
  height: 50px;
  list-style: none;
  text-transform: uppercase;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 3px;
  font-size: ${({ theme }) => theme.fontSize.m};
  cursor: pointer;
  transition: 0.35s ease;
  border-radius: ${({ theme }) => theme.borderRadius.radius};
  text-decoration: none;
  &::before,
  &::after {
    position: absolute;
    left: 0;
    content: '';
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.beigeDark1};
    z-index: -1;
    transition: 0.25s ease;
  }
  &::before {
    top: 100%;
  }
  &::after {
    top: -100%;
  }
  &:hover,
  &:focus,
  &.active-link {
    transition: 0.35s 0.25s ease-out;
    letter-spacing: 1px;
    background: ${({ theme }) => theme.colors.darkGrey};
    color: ${({ theme }) => theme.colors.beigeDark3};
    outline: none;
    &::before,
    &::after {
      top: 0;
      transition: 0.5s ease;
    }
  }
`;

const LogoImageWrapper = styled.div`
  position: relative;
  width: 250px;
  height: 100%;
  list-style: none;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 4px;
    background: ${({ theme }) => theme.colors.beigeDark3};
    left: 0;
    bottom: 0;
    border-radius: ${({ theme }) => theme.borderRadius.radius};
  }
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

const Navigation = () => {
  return (
    <Wrapper>
      <NavItemsWrapper>
        <NavItem to='/o_mnie' exact activeClassName='active-link'>
          O Mnie
        </NavItem>
        <NavItem to='/oferta' exact activeClassName='active-link'>
          Oferta
        </NavItem>
        <LogoImageWrapper>
          <Logo src={logoIcon} />
        </LogoImageWrapper>
        <NavItem to='/cennik' exact activeClassName='active-link'>
          Cennik
        </NavItem>
        <NavItem to='/kontakt' exact activeClassName='active-link'>
          Kontakt
        </NavItem>
      </NavItemsWrapper>
    </Wrapper>
  );
};

export default Navigation;
