import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 75px;
  background: ${({ theme }) => theme.colors.white};
  z-index: 999999;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-top: 2px solid ${({ theme }) => theme.colors.beigeDark3};
  @media screen and (max-width: 680px) {
    height: 75px;
  }
`;

export const NavItemsWrapper = styled.ul`
  margin: auto;
  height: 100%;
  max-width: 1250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1200px) {
    width: 90%;
  }
`;

export const HomeAndHambrgerWrapper = styled.div`
  position: absolute;
  width: auto;
  height: 35px;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%);
  z-index: -1;
  transition: 0.5s 0.85s ease;
  &.show {
    transition: 0.5s ease;
    bottom: 0px;
  }
  @media screen and (max-width: 1200px) {
    position: static;
    transform: none;
    z-index: 999999;
    display: flex;
    overflow: hidden;
    height: auto;
    width: 35%;
    max-width: 160px;
    align-items: center;
    justify-content: space-between;
    outline: none;
  }
`;

export const Logo = styled.div`
  position: relative;
  width: 250px;
  height: 100%;
  list-style: none;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.white};
  img {
    width: 100%;
    height: 100%;
  }
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.beigeDark3};
    left: 0;
    bottom: 0;
    border-radius: ${({ theme }) => theme.borderRadius.radius};
  }
  @media screen and (max-width: 1200px) {
    &::before {
      display: none;
    }
  }
  @media screen and (max-width: 680px) {
    width: 160px;
  }
`;
