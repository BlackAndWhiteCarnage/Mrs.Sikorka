import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled(NavLink).attrs({ activeClassName: 'active-link' })`
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  text-decoration: none;
  list-style: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  letter-spacing: 2px;
  z-index: 1;
  &.desktopNavItem {
    position: relative;
    width: 130px;
    height: 40px;
    text-transform: uppercase;
    overflow: hidden;
    font-size: ${({ theme }) => theme.fontSize.m};
    cursor: pointer;
    transition: 0.35s ease;
    padding: 20px 30px;
    white-space: nowrap;
    border: 2px solid ${({ theme }) => theme.colors.white};
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      width: 0%;
      height: 10%;
      transition: 0.5s 0.25s ease;
      z-index: -1;
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 5%;
      z-index: -1;
      transition: 0.25s ease;
    }
    @media screen and (min-width: 1250px) {
      &:hover,
      &:focus,
      &.active-link {
        transition: 0.5s 0.25s ease;
        color: ${({ theme }) => theme.colors.white};
        &::before {
          transition: 0.25s ease;
          width: 100%;
          background: ${({ theme }) => theme.colors.beigeDark2};
        }
        &::after {
          transition: 0.25s 0.25s ease;
          width: 100%;
          height: 100%;
          background: ${({ theme }) => theme.colors.beigeDark3};
        }
      }
    }
    @media screen and (max-width: 1200px) {
      display: none;
    }
  }
  &.modalItem {
    position: absolute;
    top: -25%;
    left: 0;
    width: 100%;
    height: 25%;
    font-size: ${({ theme }) => theme.fontSize.l};
    text-decoration: none;
    @media screen and (max-width: 680px) {
      font-size: ${({ theme }) => theme.fontSize.m};
    }
    &:nth-child(1) {
      background: ${({ theme }) => theme.colors.beigeDark3};
      z-index: 4;
      transition: 0.5s ease-in-out;
      &.show {
        top: 0%;
        transition: 1s 0.1s ease-in-out;
      }
    }
    &:nth-child(2) {
      background: ${({ theme }) => theme.colors.beigeDark2};
      z-index: 3;
      transition: 0.5s ease-in-out;
      &.show {
        top: 25%;
        transition: 1s 0.2s ease-in-out;
      }
    }
    &:nth-child(3) {
      background: ${({ theme }) => theme.colors.beigeDark1};
      z-index: 2;
      transition: 0.5s ease-in-out;
      &.show {
        top: 50%;
        transition: 1s 0.3s ease-in-out;
      }
    }
    &:nth-child(4) {
      background: ${({ theme }) => theme.colors.beigeDark};
      z-index: 1;
      transition: 0.5s ease-in-out;
      &.show {
        top: 75%;
        transition: 1s 0.4s ease-in-out;
      }
    }
    &.active-link {
      background: ${({ theme }) => theme.colors.darkGrey};
      color: ${({ theme }) => theme.colors.beigeDark3};
    }
  }
`;
