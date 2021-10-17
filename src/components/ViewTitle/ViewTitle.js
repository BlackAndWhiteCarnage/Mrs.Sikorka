import React from 'react';
import PropTypes from 'prop-types';
import { pageAnimation } from 'assets/animations/animations';
// COMPONENTS
import Vectors from 'components/Vectors/Vectors';
// STYLES
import { Wrapper, TitleWrapper } from './ViewTitle.styles';

const SectionTitle = ({ titleFirstPart, titleSecondPart, vectorsData }) => (
  <Wrapper>
    <Vectors vectorsData={vectorsData} />
    <TitleWrapper variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
      <h2>
        {titleFirstPart}
        <span> {titleSecondPart}</span>
      </h2>
    </TitleWrapper>
  </Wrapper>
);

SectionTitle.propTypes = {
  titleFirstPart: PropTypes.string.isRequired,
  titleSecondPart: PropTypes.string.isRequired,
  vectorsData: PropTypes.array.isRequired,
};

export default SectionTitle;
