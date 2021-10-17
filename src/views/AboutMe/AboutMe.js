import React from 'react';
// COMPONENTS
import ViewTitle from 'components/ViewTitle/ViewTitle';
import PageTransition from 'components/PageTransition/PageTransition';
// VECTORS
import { homeVectosPaths } from 'data/vectorsParams';

const AboutMe = () => (
  <>
    <ViewTitle
      titleFirstPart='Nazywam się Ewelina Sikora, a moją największą pasją'
      titleSecondPart='jest marketing, fotografia i media społecznościowe.'
      vectorsData={homeVectosPaths}
    />
    <PageTransition />
  </>
);

export default AboutMe;
