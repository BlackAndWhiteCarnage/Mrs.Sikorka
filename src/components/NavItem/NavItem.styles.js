import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled(NavLink).attrs({ activeClassName: 'active-link' })`
  &.desktopNavItem {
    position: relative;
    width: 130px;
    height: 40px;
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
    color: ${({ theme }) => theme.colors.darkGrey};
    text-decoration: none;
    padding: 20px 30px;
    white-space: nowrap;
    border-radius: 10px;
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
  }
  &.modalItem {
    position: absolute;
    top: -25%;
    left: 0;
    width: 100%;
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSize.l};
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkGrey};
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
      letter-spacing: 5px;
    }
  }
`;
