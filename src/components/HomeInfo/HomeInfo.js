import React from 'react';
// STYLES
import { Wrapper, Line, Text } from './HomeInfo.styles';

const HomeInfo = () => (
  <Wrapper>
    <Text>Social Media</Text>
    <Line />
    <Text className='break'>Fotografia Produktowa</Text>
    <Line />
    <Text className='break'>Influencer Marketing</Text>
  </Wrapper>
);

export default HomeInfo;
