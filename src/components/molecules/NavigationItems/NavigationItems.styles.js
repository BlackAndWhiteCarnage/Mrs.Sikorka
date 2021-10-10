import styled from 'styled-components';

export const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: ${({ theme }) => theme.colors.white};
  z-index: 9999;
  border-top: 4px solid ${({ theme }) => theme.colors.beigeDark3};
  @media screen and (max-width: 680px) {
    height: 75px;
  }
`;

export const NavItemsWrapper = styled.ul`
  margin: auto;
  height: 100%;
  max-width: 1150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1200px) {
    width: 90%;
  }
`;
