import React from 'react';
// COMPONENTS
import ViewTitle from 'components/ViewTitle/ViewTitle';
import PriceListPackages from 'components/PriceListPackages/PriceListPackages';
// HELPERS
import ScrollTop from 'helpers/ScrollTop';
// VECTORS
import { homeVectosPaths } from 'data/vectorsParams';

const PriceList = () => (
  <>
    <ViewTitle
      titleFirstPart='Poniżej znajdziesz cennik ofert.'
      titleSecondPart='Wybierz pakiet dopasowany do Twoich potrzeb.'
      vectorsData={homeVectosPaths}
    />
    <ScrollTop />
    <PriceListPackages />
  </>
);

export default PriceList;
