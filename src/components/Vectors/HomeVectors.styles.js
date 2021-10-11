import styled from 'styled-components';

export const Vector = styled.svg`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  width: 100%;
  height: 100%;
  max-height: 100vh;
  stroke-width: 2;
  @media screen and (max-width: 680px) {
    stroke-width: 10;
  }
`;
