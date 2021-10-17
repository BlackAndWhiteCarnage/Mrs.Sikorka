import React from 'react';
// COMPONENTS
import ViewTitle from 'components/ViewTitle/ViewTitle';
import PriceListPackages from 'components/PriceListPackages/PriceListPackages';
// VECTORS
import { homeVectosPaths } from 'data/vectorsParams';
import PageTransition from 'components/PageTransition/PageTransition';

const PriceList = () => (
  <>
    <ViewTitle
      titleFirstPart='Poniżej znajdziesz cennik ofert.'
      titleSecondPart='Wybierz pakiet dopasowany do Twoich potrzeb.'
      vectorsData={homeVectosPaths}
    />
    <PageTransition />
    <PriceListPackages />
  </>
);

export default PriceList;
