import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './Button.styles';

const Button = ({ text, className, onClick, icon, alt }) => {
  return (
    <Wrapper className={className} onClick={onClick}>
      {!icon ? text : <img src={icon} alt={alt} />}
    </Wrapper>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.node,
  alt: PropTypes.string,
};

export default Button;
