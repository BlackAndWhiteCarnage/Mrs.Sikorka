import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  height: calc(100vh - 100px);
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 680px) {
    height: calc(100vh - 75px);
    margin-top: 75px;
  }
`;

export const TitleWrapper = styled.div`
  width: 100%;
  height: 400px;
  max-width: 600px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  h2 {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    span {
      color: ${({ theme }) => theme.colors.beigeDark3};
    }
  }
  @media screen and (max-width: 1366px) {
    height: 300px;
  }
  @media screen and (max-width: 680px) {
    width: 90%;
    height: 250px;
    h2 {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }
  @media screen and (min-width: 200px) and (max-width: 920px) and (orientation: landscape) {
    width: 65%;
    height: 80%;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
