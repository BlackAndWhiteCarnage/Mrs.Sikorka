import styled from 'styled-components';

export const Wrapper = styled.p`
  width: 80%;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: ${({ theme }) => theme.fontSize.m};
  @media screen and (max-width: 1200px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  &.break {
    word-break: break-word;
  }
`;
