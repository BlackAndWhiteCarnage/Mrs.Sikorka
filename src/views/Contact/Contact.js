import React from 'react';
// COMPONENTS
import ViewTitle from 'components/ViewTitle/ViewTitle';
import Form from 'components/Form/Form';
// VECTORS
import { contactVectosPaths } from 'data/vectorsParams';

const Contact = () => (
  <>
    <ViewTitle
      titleFirstPart='Miło mi że zainteresowała Cię moja oferta,'
      titleSecondPart='poniżej znajdziesz formularz kontaktowy.'
      vectorsData={contactVectosPaths}
    />
    <Form />
  </>
);

export default Contact;
