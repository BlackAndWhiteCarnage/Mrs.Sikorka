import React from 'react';
// IMAGES
import EwelinaSikoraImg from 'assets/images/EwelinaSikoraImage.jpg';
import CoffeAndLaptopImg from 'assets/images/CoffeAndLaptopImage.jpg';
// ICONS
import nameIcon from 'assets/icons/name-icon.svg';
// VECTORS
import Vectors from 'components/Vectors/Vectors';
// DATA
import { homeVectosPaths } from 'data/vectorsParams';
// STYLES
import { Wrapper, TextWrapper, Line, Text, ImageWrapperAbsolute, ImageWrapperRelative, Image, Name } from './Home.styles';
import { pageAnimation, slide, slider, sliderContainer } from 'assets/animations/animations';
import PageTransition from 'components/PageTransition/PageTransition';

const Home = () => (
  <>
    <Vectors vectorsData={homeVectosPaths} />
    <PageTransition />
    <Wrapper variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
      <ImageWrapperAbsolute className='firstImage' variants={slide}>
        <ImageWrapperRelative className='firstImage'>
          <Image src={EwelinaSikoraImg} />
          <Name src={nameIcon} />
        </ImageWrapperRelative>
      </ImageWrapperAbsolute>
      <ImageWrapperAbsolute className='secondImage' variants={slide}>
        <ImageWrapperRelative className='secondImage'>
          <Image src={CoffeAndLaptopImg} />
        </ImageWrapperRelative>
      </ImageWrapperAbsolute>
      <TextWrapper>
        <Text>Social Media</Text>
        <Line />
        <Text className='break'>Fotografia Produktowa</Text>
        <Line />
        <Text className='break'>Influencer Marketing</Text>
      </TextWrapper>
    </Wrapper>
  </>
);

export default Home;
