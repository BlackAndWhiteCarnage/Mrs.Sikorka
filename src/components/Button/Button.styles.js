import styled from 'styled-components';

export const Wrapper = styled.button`
  position: relative;
  overflow: hidden;
  border: none;
  background: none;
  height: 40px;
  width: auto;
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  text-transform: uppercase;
  margin: 5px;
  transition: 0.25s ease;
  border: 2px solid ${({ theme }) => theme.colors.beigeDark3};
  color: ${({ theme }) => theme.colors.darkGrey};
  text-decoration: none;
  img {
    width: 100%;
    padding: 20px;
    transition: 0.25s ease;
    pointer-events: none;
  }
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 0%;
    height: 10%;
    transition: 0.15s ease;
    z-index: -1;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 5%;
    z-index: -1;
    transition: 0.25s ease;
  }
  @media screen and (min-width: 1250px) {
    &:hover {
      transition: 0.5s 0.25s ease;
      &::before {
        transition: 0.25s 0.25s ease;
        width: 100%;
        background: ${({ theme }) => theme.colors.beigeDark2};
      }
      &::after {
        transition: 0.25s 0.5s ease;
        width: 100%;
        height: 100%;
        background: ${({ theme }) => theme.colors.beigeDark3};
      }
    }
  }
  &.active {
    pointer-events: none;
    background: ${({ theme }) => theme.colors.beigeDark3};
  }
  @media screen and (max-width: 1250px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  @media screen and (max-width: 680px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
