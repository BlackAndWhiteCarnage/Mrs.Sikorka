import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
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
    bottom: -40px;
    @media screen and (max-width: 1200px) {
      transition: 0.5s 1s ease;
      transform: translate(0, 0);
    }
  }
  @media screen and (max-width: 1200px) {
    position: static;
    transform: none;
    width: 50px;
    height: 40px;
    transform: translate(0, 50px);
    img {
      height: 100%;
      @media screen and (max-width: 680px) {
        height: 85%;
      }
    }
  }
`;

export const IconWrapper = styled(Link)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  opacity: 0;
  transition: 0.5s ease;
  @media screen and (max-width: 1200px) {
    border: none;
    outline: none;
  }
  img {
    transition: 0.5s ease;
  }
  @media screen and (min-width: 1200px) {
    opacity: 1;
    &::before,
    &::after {
      position: absolute;
      content: '';
      height: 3px;
      width: 0%;
      bottom: 0px;
      background: ${({ theme }) => theme.colors.beigeDark3};
      border-radius: ${({ theme }) => theme.borderRadius.radius};
    }
    &::before {
      transition: 0.5s 0.5s ease;
      bottom: -10px;
    }
    &::after {
      transition: 0.5s 0.25s ease;
      bottom: -20px;
    }
    &:hover {
      img {
        transform: scale(1.1);
        transition: 0.5s ease;
      }
      &::before {
        transition: 0.5s 0.25s ease;
        width: 50%;
      }
      &::after {
        transition: 0.5s ease;
        width: 100%;
      }
    }
  }
  &.show {
    pointer-events: all;
    opacity: 1;
    transition: 0.5s ease;
    &::before {
      transition: 0.5s 0.25s ease;
      width: 100%;
    }
    &::after {
      transition: 0.5s 0.5s ease;
      width: 50%;
    }
  }
`;
