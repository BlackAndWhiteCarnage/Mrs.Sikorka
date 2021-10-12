import React from 'react';
import styled from 'styled-components';
import EwelinaSikoraImg from 'assets/images/EwelinaSikoraImage.jpg';
import CoffeAndLaptopImg from 'assets/images/CoffeAndLaptopImage.jpg';
import nameIcon from 'assets/icons/name-icon.svg';
import HomeInfo from 'components/HomeInfo/HomeInfo';
// VECTORS
import { HomeVectors } from 'components/Vectors/HomeVectors';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 600px;
  @media screen and (max-width: 1366px) {
    height: 450px;
    width: 650px;
  }
  @media screen and (max-width: 1200px) {
    width: 500px;
  }
  @media screen and (max-width: 680px) {
    width: 90%;
    height: 80%;
    margin-top: 30px;
  }
  @media screen and (min-width: 200px) and (max-width: 920px) and (orientation: landscape) {
    width: 65%;
    margin-top: 150px;
  }
`;

const FirstImageWrapper = styled.div`
  position: absolute;
  width: 350px;
  height: 500px;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  @media screen and (max-width: 1366px) {
    width: 300px;
    height: 450px;
  }
  @media screen and (max-width: 1200px) {
    width: 220px;
    height: auto;
  }
  @media screen and (max-width: 680px) {
    top: 0;
    left: unset;
    right: 0;
    transform: none;
    width: 50%;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 3px solid ${({ theme }) => theme.colors.beigeDark3};
    border-radius: ${({ theme }) => theme.borderRadius.radius};
  }
  &.first {
    &::before {
      left: -20px;
      top: 20px;
      z-index: -1;
      @media screen and (max-width: 1200px) {
        left: -10px;
        top: 10px;
      }
    }
  }
  &.second {
    &::before {
      left: 20px;
      top: -20px;
      z-index: -1;
      @media screen and (max-width: 1200px) {
        left: 10px;
        top: -10px;
      }
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.radius};
  object-fit: cover;
`;

const Name = styled.img`
  position: absolute;
  left: -80px;
  top: 0;
  width: 55px;
  height: auto;
  @media screen and (max-width: 1366px) {
    width: 40px;
    left: -65px;
  }
  @media screen and (max-width: 1200px) {
    left: -40px;
    width: unset;
    height: 50%;
  }
`;

const SecondImageWrapper = styled.div`
  position: absolute;
  width: 400px;
  height: 600px;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
  @media screen and (max-width: 1366px) {
    width: 320px;
    height: 450px;
  }
  @media screen and (max-width: 1200px) {
    width: 250px;
    height: auto;
  }
  @media screen and (max-width: 680px) {
    top: unset;
    bottom: 0;
    right: unset;
    left: 0;
    transform: none;
    width: 50%;
  }
`;

const Home = () => {
  return (
    <>
      <HomeVectors />
      <Wrapper>
        <FirstImageWrapper>
          <ImageWrapper className='first'>
            <Image src={EwelinaSikoraImg} />
            <Name src={nameIcon} />
          </ImageWrapper>
        </FirstImageWrapper>
        <SecondImageWrapper>
          <ImageWrapper className='second'>
            <Image src={CoffeAndLaptopImg} />
          </ImageWrapper>
        </SecondImageWrapper>
        <HomeInfo />
      </Wrapper>
    </>
  );
};

Home.propTypes = {};

export default Home;
