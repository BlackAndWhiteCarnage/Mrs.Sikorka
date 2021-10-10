import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 250px;
  height: 100%;
  list-style: none;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.white};
  img {
    width: 100%;
    height: 100%;
  }
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 4px;
    background: ${({ theme }) => theme.colors.beigeDark3};
    left: 0;
    bottom: 0;
    border-radius: ${({ theme }) => theme.borderRadius.radius};
  }
  @media screen and (max-width: 1200px) {
    &::before {
      display: none;
    }
  }
  @media screen and (max-width: 680px) {
    width: 160px;
  }
`;
