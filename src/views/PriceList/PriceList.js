import React from 'react';
// COMPONENTS
import ViewTitle from 'components/ViewTitle/ViewTitle';
import PriceListPackages from 'components/PriceListPackages/PriceListPackages';
// VECTORS
import { priceListVectosPaths } from 'data/vectorsParams';

const PriceList = () => (
  <>
    <ViewTitle
      titleFirstPart='Poniżej znajdziesz cennik ofert.'
      titleSecondPart='Wybierz pakiet dopasowany do Twoich potrzeb.'
      vectorsData={priceListVectosPaths}
    />
    <PriceListPackages />
  </>
);

export default PriceList;
