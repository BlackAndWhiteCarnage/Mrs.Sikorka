import React from 'react';
// ICONS
import logoIcon from 'assets/icons/logo-icon.svg';
// STYLES
import { Wrapper } from './Logo.styles';

const Logo = () => (
  <Wrapper>
    <img src={logoIcon} alt='Mrs. Sikorka Ewelina Sikora Logo' />
  </Wrapper>
);

export default Logo;
