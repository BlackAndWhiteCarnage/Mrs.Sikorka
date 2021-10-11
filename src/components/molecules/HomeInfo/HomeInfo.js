import React from 'react';
import { Wrapper } from './HomeInfo.styles';
// ATOMS
import HomeInfoText from 'components/atoms/HomeInfoText/HomeInfoText';
import HomeInfoLine from 'components/atoms/HomeInfoLine/HomeInfoLine';

const HomeInfo = () => (
  <Wrapper>
    <HomeInfoText text='Social Media' />
    <HomeInfoLine />
    <HomeInfoText text='Fotografia Produktowa' className='break' />
    <HomeInfoLine />
    <HomeInfoText text='Influencer Marketing' className='break' />
  </Wrapper>
);

export default HomeInfo;
