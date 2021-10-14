import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;
  position: fixed;
  width: 100%;
  height: calc(100% - 75px);
  top: -75px;
  left: 0;
  transition: 1s ease;
  z-index: 999;
  pointer-events: none;
  @media screen and (min-width: 1200px) {
    display: none;
  }
  &.show {
    transition: 1s ease;
    top: 75px;
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
