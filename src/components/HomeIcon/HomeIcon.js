import React from 'react';
import PropTypes from 'prop-types';
import homeIcon from 'assets/icons/home-icon.svg';
import { Wrapper, IconWrapper } from './HomeIcon.styles';

const HomeIcon = ({ location, toggleModalHandler }) => (
  <Wrapper className={location !== '/' && 'show'} onClick={() => toggleModalHandler(false)} id='active'>
    <IconWrapper className={location !== '/' && 'show'} to='/' tabIndex={location === '/' ? -1 : 1} id='active'>
      <img src={homeIcon} alt='Ikonka strony głównej' id='active' />
    </IconWrapper>
  </Wrapper>
);

HomeIcon.propTypes = {
  location: PropTypes.string.isRequired,
  toggleModalHandler: PropTypes.func.isRequired,
};

export default HomeIcon;
