import React from 'react';
import PropTypes from 'prop-types';
// ICONS
import homeIcon from 'assets/icons/home-icon.svg';
// STYLES
import { Wrapper, IconWrapper } from './HomeIcon.styles';

const HomeIcon = ({ location, toggleModalHandler }) => (
  <Wrapper className={location !== '/' && 'show'} onClick={() => toggleModalHandler(false)}>
    <IconWrapper className={location !== '/' && 'show'} to='/' tabIndex={location === '/' ? -1 : 1}>
      <img src={homeIcon} alt='Home Icon' />
    </IconWrapper>
  </Wrapper>
);

HomeIcon.propTypes = {
  location: PropTypes.string.isRequired,
};

export default HomeIcon;
