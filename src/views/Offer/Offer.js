import React from 'react';
import PropTypes from 'prop-types';
import ViewTitle from 'components/ViewTitle/ViewTitle';
import { homeVectosPaths } from 'data/vectorsParams';

const Offer = () => {
  return <ViewTitle titleFirstPart='Co możesz ode mnie otrzymać?' titleSecondPart='Czym konkretnie się zajmuję?' vectorsData={homeVectosPaths} />;
};

Offer.propTypes = {};

export default Offer;
