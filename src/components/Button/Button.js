import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './Button.styles';
import { Link } from 'react-router-dom';

const Button = ({ text, className, onClick, icon, alt, href, linkTo }) => {
  const renderSpecyficTag = () => {
    if (text && !href && !linkTo) {
      return <p>{text}</p>;
    } else if (icon) {
      return <img src={icon} alt={alt} id='active' />;
    } else if (href) {
      return (
        <a href={href} target='_blank'>
          {text}
        </a>
      );
    } else if (linkTo) {
      return <Link to={linkTo}>{text}</Link>;
    }
  };

  return (
    <Wrapper className={className} onClick={onClick} id='active'>
      {renderSpecyficTag()}
    </Wrapper>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.node,
  alt: PropTypes.string,
  href: PropTypes.string,
  linkTo: PropTypes.string,
};

export default Button;
