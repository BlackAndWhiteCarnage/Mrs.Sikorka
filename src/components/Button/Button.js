import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './Button.styles';
import { Link } from 'react-router-dom';

const Button = ({ text, className, onClick, icon, alt, href, linkTo }) => {
  return (
    <>
      {text && !href && !linkTo ? (
        <Wrapper className={className} onClick={onClick}>
          {text}
        </Wrapper>
      ) : !text && icon ? (
        <Wrapper onClick={onClick}>
          <img src={icon} alt={alt} />
        </Wrapper>
      ) : text && linkTo && !icon ? (
        <Wrapper as={Link} to={linkTo}>
          {text}
        </Wrapper>
      ) : (
        <Wrapper as='a' href={href} target='_blank' rel='noreferrer'>
          {text}
        </Wrapper>
      )}
    </>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.node,
  alt: PropTypes.string,
  href: PropTypes.string,
  linkTo: PropTypes.string,
};

export default Button;
