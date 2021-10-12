import React from 'react';
import styled from 'styled-components';
import ViewTitle from 'components/ViewTitle/ViewTitle';
import { homeVectosPaths } from 'data/vectorsParams';

const PriceList = () => {
  return (
    <>
      <ViewTitle
        titleFirstPart='Poniżej znajdziesz cennik ofert.'
        titleSecondPart='Wybierz pakiet dopasowany do Twoich potrzeb.'
        vectorsData={homeVectosPaths}
      />
    </>
  );
};

export default PriceList;
