import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 10px;
  height: 10px;
  position: fixed;
  top: 50%;
  left: 80%;
  z-index: 999999;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: all 0.5s ease;
  transition-property: transform;
  transform-origin: 100% -20%;
`;

export const CursorImage = styled.img`
  position: absolute;
  width: 20px;
  z-index: 999999;
  transform: scale(0);
  transition: 0.3s ease;
  opacity: 0;
  &.show {
    transform: scale(1);
    opacity: 1;
    transition: 0.3s ease;
  }
  &.pointer {
    transform: scale(1.2);
    opacity: 1;
    transition: 0.3s ease;
  }
`;
