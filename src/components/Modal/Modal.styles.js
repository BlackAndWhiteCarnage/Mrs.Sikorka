import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;
  position: fixed;
  width: 100%;
  height: calc(100% - 100px);
  left: 0;
  top: -100px;
  transition: 1s ease;
  z-index: 999;
  pointer-events: none;
  @media screen and (min-width: 1200px) {
    display: none;
  }
  @media screen and (max-width: 680px) {
    height: calc(100% - 75px);
  }
  &.show {
    transition: 1s ease;
    top: 100px;
    pointer-events: all;
    @media screen and (max-width: 680px) {
      top: 75px;
    }
  }
`;

export const ModalItems = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
