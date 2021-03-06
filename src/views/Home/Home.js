import React from 'react';
import EwelinaSikoraImg from 'assets/images/EwelinaSikoraImage.jpg';
import CoffeAndLaptopImg from 'assets/images/CoffeAndLaptopImage.jpg';
import Vectors from 'components/Vectors/Vectors';
import { homeVectosPaths } from 'data/vectorsParams';
import { Wrapper, TextWrapper, Line, Text, ImageWrapperAbsolute, ImageWrapperRelative, Image, Name } from './Home.styles';
import { pageAnimation, slide } from 'assets/animations/animations';
import { motion } from 'framer-motion';
import { nameVectosPaths } from 'data/vectorsParams';

const Home = () => (
  <>
    <Vectors vectorsData={homeVectosPaths} />
    <Wrapper variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
      <ImageWrapperAbsolute className='firstImage' variants={slide}>
        <ImageWrapperRelative className='firstImage'>
          <Image src={EwelinaSikoraImg} alt='Zdjęcie Eweliny Sikory' />
          <Name width='58' height='284' viewBox='0 0 58 284' fill='none'>
            <motion.path
              d={nameVectosPaths.path}
              stroke='#414141'
              stroke-linecap='round'
              initial={{ pathLength: 0, pathOffset: 1 }}
              animate={{ pathLength: 1, pathOffset: 0 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </Name>
        </ImageWrapperRelative>
      </ImageWrapperAbsolute>
      <ImageWrapperAbsolute className='secondImage' variants={slide}>
        <ImageWrapperRelative className='secondImage'>
          <Image src={CoffeAndLaptopImg} alt='Zdjęcie pączka, kawy i laptopa' />
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
