import React from 'react';
// COMPONENTS
import ViewTitle from 'components/ViewTitle/ViewTitle';
import PriceListPackages from 'components/PriceListPackages/PriceListPackages';
import PageTransition from 'components/PageTransition/PageTransition';
// VECTORS
import { homeVectosPaths } from 'data/vectorsParams';

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
