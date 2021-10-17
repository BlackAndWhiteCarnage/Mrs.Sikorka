import React from 'react';
import PropTypes from 'prop-types';
import ViewTitle from 'components/ViewTitle/ViewTitle';
import { homeVectosPaths } from 'data/vectorsParams';
import Form from 'components/Form/Form';
import PageTransition from 'components/PageTransition/PageTransition';

const Contact = () => {
  return (
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
};

Contact.propTypes = {};

export default Contact;
