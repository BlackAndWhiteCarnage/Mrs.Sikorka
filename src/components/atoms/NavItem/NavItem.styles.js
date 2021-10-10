import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled(NavLink).attrs({ activeClassName: 'active-link' })`
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
  color: ${({ theme }) => theme.colors.darkGrey};
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
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
