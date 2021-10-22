import React from 'react';
// COMPONENTS
import ViewTitle from 'components/ViewTitle/ViewTitle';
import PriceListPackages from 'components/PriceListPackages/PriceListPackages';
// HELPERS
import Keywords from 'helpers/Keywords';
// VECTORS
import { priceListVectosPaths } from 'data/vectorsParams';

const PriceList = () => (
  <>
    <Keywords text='obsługa mediów społecznościowych, prowadzenie mediów społecznościowych' />
    <ViewTitle
      titleFirstPart='Poniżej znajdziesz cennik ofert.'
      titleSecondPart='Wybierz pakiet dopasowany do Twoich potrzeb.'
      vectorsData={priceListVectosPaths}
    />
    <PriceListPackages />
  </>
);

export default PriceList;
