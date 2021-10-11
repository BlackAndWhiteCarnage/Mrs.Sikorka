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

export const HomeAndHambrgerWrapper = styled.div`
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
    bottom: 0px;
  }
  @media screen and (max-width: 1200px) {
    position: static;
    transform: none;
    z-index: 999999;
    display: flex;
    overflow: hidden;
    height: auto;
    width: 35%;
    max-width: 160px;
    align-items: center;
    justify-content: space-between;
    outline: none;
  }
`;
