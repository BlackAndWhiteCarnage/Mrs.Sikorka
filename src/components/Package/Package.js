import React from 'react';
import PropTypes from 'prop-types';
// STYLES
import { Wrapper, PackageTitle, PackageName, PackageListItem, Price, PackageList } from './Package.styles';

const Package = ({ name, services, price, half }) => (
  <Wrapper className={half && 'half'}>
    <PackageTitle>
      <span>Pakiet</span>
      <div />
      <PackageName className='mini'>{name}</PackageName>
    </PackageTitle>
    <PackageList>
      {services.map((service, i) => (
        <PackageListItem key={i}>
          <p>{service}</p>
        </PackageListItem>
      ))}
    </PackageList>
    <Price>
      <span>{price}</span> zł mies.
    </Price>
  </Wrapper>
);

Package.propTypes = {
  name: PropTypes.string.isRequired,
  services: PropTypes.array.isRequired,
  price: PropTypes.string.isRequired,
  half: PropTypes.bool.isRequired,
};

export default Package;
