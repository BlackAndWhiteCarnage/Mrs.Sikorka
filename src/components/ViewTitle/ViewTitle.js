import React from 'react';
import PropTypes from 'prop-types';
import Vectors from 'components/Vectors/Vectors';
import { Wrapper, TitleWrapper } from './ViewTitle.styles';
import { pageAnimation } from 'assets/animations/animations';

const SectionTitle = ({ titleFirstPart, titleSecondPart, vectorsData }) => (
  <Wrapper>
    <Vectors vectorsData={vectorsData} />
    <TitleWrapper variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
      <h1>
        {titleFirstPart}
        <span> {titleSecondPart}</span>
      </h1>
    </TitleWrapper>
  </Wrapper>
);

SectionTitle.propTypes = {
  titleFirstPart: PropTypes.string.isRequired,
  titleSecondPart: PropTypes.string.isRequired,
  vectorsData: PropTypes.array.isRequired,
};

export default SectionTitle;
