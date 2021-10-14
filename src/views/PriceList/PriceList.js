import React, { useState } from 'react';
import ViewTitle from 'components/ViewTitle/ViewTitle';
import { homeVectosPaths } from 'data/vectorsParams';
import Vectors from 'components/Vectors/Vectors';
import alertIcon from 'assets/icons/alert-icon.svg';
import { socialMediaPackages, influencerMarketingPackages, productPhotographyPackages } from 'data/servicesPackages';
// STYLES
import {
  Wrapper,
  PackagesWrapper,
  PackagesOptions,
  ButtonsWrapper,
  Button,
  Packages,
  PackageListWrapper,
  PackageList,
  PackageTitle,
  PackageName,
  PackageListItem,
  Price,
} from './PriceList.styles';

const PriceList = () => {
  const [data, setData] = useState(socialMediaPackages);

  const changeDataHandler = (newData) => {
    setData(newData);
  };

  return (
    <>
      <ViewTitle
        titleFirstPart='Poniżej znajdziesz cennik ofert.'
        titleSecondPart='Wybierz pakiet dopasowany do Twoich potrzeb.'
        vectorsData={homeVectosPaths}
      />
      <Wrapper>
        <Vectors vectorsData={homeVectosPaths} />
        <PackagesWrapper>
          <PackagesOptions>
            <p>Czego dokładnie szukasz?</p>
            <ButtonsWrapper>
              <Button onClick={() => changeDataHandler(socialMediaPackages)}>Social Media</Button>
              <Button onClick={() => changeDataHandler(productPhotographyPackages)}>Fotografia Produktowa</Button>
              <Button onClick={() => changeDataHandler(influencerMarketingPackages)}>Influencer Marketing</Button>
              <Button>
                <img src={alertIcon} />
              </Button>
            </ButtonsWrapper>
          </PackagesOptions>
          <Packages>
            {data.map(({ name, services, price }) => (
              <PackageListWrapper>
                <PackageTitle>
                  <span>Pakiet</span>
                  <div />
                  <PackageName className='mini'>{name}</PackageName>
                </PackageTitle>
                <PackageList>
                  {services.map((service) => (
                    <PackageListItem>
                      <p>{service}</p>
                    </PackageListItem>
                  ))}
                </PackageList>
                <Price>
                  <span>{price}</span> zł mies.
                </Price>
              </PackageListWrapper>
            ))}
          </Packages>
        </PackagesWrapper>
      </Wrapper>
    </>
  );
};

export default PriceList;
