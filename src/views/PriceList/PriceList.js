import React, { useState, useRef, useEffect } from 'react';
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
  const [toggle, setToggle] = useState(false);
  const [refHeight, setRefHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setRefHeight(ref.current.offsetTop);
  }, data);

  const changeDataHandler = (newData) => {
    toggleDataHandler(newData);
  };

  const toggleDataHandler = (newData) => {
    setToggle(true);
    window.scrollTo({
      top: refHeight + window.innerHeight / 1.5,
      left: '0',
      behavior: 'smooth',
    });
    setTimeout(() => {
      setData(newData);
      setToggle(false);
    }, 500);
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
          <PackagesOptions ref={ref}>
            <p>Czego dokładnie szukasz?</p>
            <ButtonsWrapper>
              <Button onClick={() => changeDataHandler(socialMediaPackages)} className={data === socialMediaPackages && 'active'}>
                Social Media
              </Button>
              <Button onClick={() => changeDataHandler(productPhotographyPackages)} className={data === productPhotographyPackages && 'active'}>
                Fotografia Produktowa
              </Button>
              <Button onClick={() => changeDataHandler(influencerMarketingPackages)} className={data === influencerMarketingPackages && 'active'}>
                Influencer Marketing
              </Button>
              <Button>
                <img src={alertIcon} />
              </Button>
            </ButtonsWrapper>
          </PackagesOptions>
          <Packages className={toggle && 'hide'}>
            {data.map(({ name, services, price }, i) => (
              <PackageListWrapper className={data.length === 2 && 'half'}>
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
