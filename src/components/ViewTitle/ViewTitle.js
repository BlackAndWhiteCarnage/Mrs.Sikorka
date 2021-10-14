import React from 'react';
import PropTypes from 'prop-types';
// ICONS
import arrowIcon from 'assets/icons/arrow-icon.svg';
// COMPONENTS
import Vectors from 'components/Vectors/Vectors';
// STYLES
import { Wrapper, TitleWrapper } from './ViewTitle.styles';

const SectionTitle = ({ titleFirstPart, titleSecondPart, vectorsData }) => (
  <Wrapper>
    <Vectors vectorsData={vectorsData} />
    <TitleWrapper>
      <h2>
        {titleFirstPart}
        <span> {titleSecondPart}</span>
      </h2>
      <img src={arrowIcon} alt='Arrow Icon' />
    </TitleWrapper>
  </Wrapper>
);

SectionTitle.propTypes = {
  titleFirstPart: PropTypes.string.isRequired,
  titleSecondPart: PropTypes.string.isRequired,
  vectorsData: PropTypes.array.isRequired,
};

export default SectionTitle;
