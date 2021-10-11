import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  width: 220px;
  height: 300px;
  border: 3px solid ${({ theme }) => theme.colors.beigeDark3};
  border-radius: ${({ theme }) => theme.borderRadius.radius};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (max-width: 1366px) {
    width: 200px;
    height: 250px;
  }
  @media screen and (max-width: 1200px) {
    width: 160px;
    height: 220px;
  }
`;
