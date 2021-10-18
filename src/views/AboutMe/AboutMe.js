import React from 'react';
// COMPONENTS
import ViewTitle from 'components/ViewTitle/ViewTitle';
// VECTORS
import { aboutMeVectosPaths } from 'data/vectorsParams';

const AboutMe = () => (
  <>
    <ViewTitle
      titleFirstPart='Nazywam się Ewelina Sikora, a moją największą pasją'
      titleSecondPart='jest marketing, fotografia i media społecznościowe.'
      vectorsData={aboutMeVectosPaths}
    />
  </>
);

export default AboutMe;
