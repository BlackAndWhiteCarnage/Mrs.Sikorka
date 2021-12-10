import styled from 'styled-components';

export const Header = styled.h2`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.beigeDark3};
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 20px;
  text-align: center;
  @media screen and (max-width: 620px) {
    width: 90%;
  }
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  min-height: 350px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  font-size: ${({ theme }) => theme.fontSize.l};
  @media screen and (max-width: 620px) {
    width: 90%;
  }
  p {
    position: relative;
    width: 100%;
    text-align: center;
    span {
      color: ${({ theme }) => theme.colors.beigeDark3};
    }
    &::before {
      content: '';
      position: absolute;
      top: -20px;
      left: 0;
      width: 100%;
      height: 2px;
      background: ${({ theme }) => theme.colors.beigeDark3};
    }
  }
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 620px) {
    width: 90%;
  }
`;

export const ImagesWrapper = styled.section`
  width: 100%;
  height: auto;
  max-width: 600px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;
  @media screen and (max-width: 1200px) {
    width: 90%;
  }
  img {
    width: 48%;
    height: auto;
    margin-bottom: 20px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    &:last-child {
      width: 100%;
    }
    @media screen and (max-width: 1200px) {
      width: 45%;
    }
    @media screen and (max-width: 620px) {
      width: 100%;
    }
  }
`;
