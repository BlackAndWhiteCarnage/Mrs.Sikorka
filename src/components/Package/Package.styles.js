import styled from 'styled-components';

export const PackagesWrapper = styled.div`
  width: 100%;
  max-width: 1350px;
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1600px) {
    width: 90%;
  }
`;

export const PackagesOptions = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  padding: 30px;
  border-radius: 10px;
  margin-bottom: 40px;
  @media screen and (max-width: 1250px) {
    flex-direction: column;
    min-height: 250px;
    align-items: flex-start;
    justify-content: space-around;
  }
  @media screen and (max-width: 860px) {
    flex-direction: column;
    height: auto;
    padding: 0;
    background: none;
    box-shadow: none;
    min-height: 300px;
    border: none;
  }
  p {
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSize.l};
    letter-spacing: 2px;
    @media screen and (max-width: 1250px) {
      height: auto;
    }
    @media screen and (max-width: 820px) {
      justify-content: center;
      text-align: center;
      width: 100%;
      margin-bottom: 20px;
    }
  }
`;

export const ButtonsWrapper = styled.div`
  width: 800px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1250px) {
    width: 100%;
    flex-wrap: wrap;
    height: auto;
  }
  @media screen and (max-width: 860px) {
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    padding: 20px;
    align-items: flex-start;
  }
`;

export const Wrapper = styled.article`
  width: 31%;
  height: fit-content;
  padding: 50px 40px;
  background: white;
  font-size: ${({ theme }) => theme.fontSize.l};
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border: 2px solid ${({ theme }) => theme.colors.beigeDark2};
  @media screen and (min-width: 860px) {
    &.half {
      width: 48%;
    }
  }
  @media screen and (max-width: 1600px) {
    font-size: ${({ theme }) => theme.fontSize.m};
    padding: 30px;
  }
  @media screen and (max-width: 860px) {
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.m};
    margin-bottom: 40px;
  }
`;

export const PackageTitle = styled.h5`
  height: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  span {
    font-size: ${({ theme }) => theme.fontSize.xl};
    text-transform: uppercase;
    margin-right: 20px;
    @media screen and (max-width: 1250px) {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
  }
  div {
    height: 2px;
    width: 80%;
    background: ${({ theme }) => theme.colors.darkGrey};
  }
`;

export const PackageName = styled.p`
  text-transform: uppercase;
  margin-left: 20px;
  color: ${({ theme }) => theme.colors.beigeDark3};
  &.mini {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  &.midi {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  &.maxi {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

export const PackageList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 20px;
  padding: 30px 0;
  @media screen and (max-width: 1600px) {
    padding: 20px 0;
  }
`;

export const PackageListItem = styled.li`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
  &:not(:last-child)::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.beigeDark};
    bottom: -20px;
    @media screen and (max-width: 1600px) {
      bottom: -10px;
    }
    @media screen and (max-width: 860px) {
      bottom: -20px;
    }
  }
  @media screen and (max-width: 1600px) {
    margin-bottom: 20px;
  }
  @media screen and (max-width: 860px) {
    margin-bottom: 35px;
  }
`;

export const Price = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xl};
  @media screen and (max-width: 1600px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  span {
    font-size: ${({ theme }) => theme.fontSize.xl};
    color: ${({ theme }) => theme.colors.beigeDark3};
  }
`;
