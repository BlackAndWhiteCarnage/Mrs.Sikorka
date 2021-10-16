import styled from 'styled-components';

export const Wrapper = styled.button`
  position: relative;
  overflow: hidden;
  border: none;
  background: none;
  height: 40px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.darkGrey};
  padding: 20px;
  font-size: ${({ theme }) => theme.fontSize.m};
  border-radius: 10px;
  text-transform: uppercase;
  margin: 5px;
  transition: 0.25s ease;
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.colors.beigeDark};
  @media screen and (min-width: 1250px) {
    &:hover {
      border: 2px solid ${({ theme }) => theme.colors.beigeDark3};
      background: ${({ theme }) => theme.colors.beigeDark};
    }
  }
  &.active {
    pointer-events: none;
    background: ${({ theme }) => theme.colors.beigeDark};
  }
  @media screen and (max-width: 1250px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  @media screen and (max-width: 680px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
