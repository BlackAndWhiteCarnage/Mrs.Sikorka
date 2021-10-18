import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  position: fixed;
  top: 50%;
  left: 80%;
  z-index: 999999;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: all 0.5s ease;
  transition-property: transform;
  transform-origin: 100% -20%;
  z-index: 999999;
  &::before {
    content: '';
    position: absolute;
    width: 90%;
    height: 90%;
    top: 5%;
    left: 5%;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.beigeDark3};
    background: rgba(255, 255, 255, 0.5);
    transition: 0.25s ease;
  }
  &.active {
    &::before {
      transform: scale(1.1) rotate(45deg);
      border-radius: 20%;
      transition: 0.25s ease;
      background: none;
    }
  }
`;
