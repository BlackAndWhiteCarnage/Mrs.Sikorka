import React from 'react';
import PropTypes from 'prop-types';
import ViewTitle from 'components/ViewTitle/ViewTitle';
import { homeVectosPaths } from 'data/vectorsParams';
import PageTransition from 'components/PageTransition/PageTransition';

const AboutMe = () => {
  return (
    <>
      <ViewTitle
        titleFirstPart='Nazywam się Ewelina Sikora, a moją największą pasją'
        titleSecondPart='jest marketing, fotografia i media społecznościowe.'
        vectorsData={homeVectosPaths}
      />
      <PageTransition />
    </>
  );
};

AboutMe.propTypes = {};

export default AboutMe;
