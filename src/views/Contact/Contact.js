import React from 'react';
// COMPONENTS
import ViewTitle from 'components/ViewTitle/ViewTitle';
import Form from 'components/Form/Form';
import PageTransition from 'components/PageTransition/PageTransition';
// VECTORS
import { homeVectosPaths } from 'data/vectorsParams';

const Contact = () => (
  <>
    <PageTransition />
    <ViewTitle
      titleFirstPart='Miło mi że zainteresowała Cię moja oferta,'
      titleSecondPart='poniżej znajdziesz formularz kontaktowy.'
      vectorsData={homeVectosPaths}
    />
    <Form />
  </>
);

export default Contact;
