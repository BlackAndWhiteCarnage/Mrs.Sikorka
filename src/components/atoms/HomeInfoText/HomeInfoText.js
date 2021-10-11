import React from 'react';
import PropTypes from 'prop-types';
// STYLES
import { Wrapper } from './HomeInfoText.styles';

const HomeInfoText = ({ text, className }) => <Wrapper className={className}>{text}</Wrapper>;

HomeInfoText.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default HomeInfoText;
