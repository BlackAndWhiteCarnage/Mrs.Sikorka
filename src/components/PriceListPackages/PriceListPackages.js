import React, { useState, useRef } from 'react';
// COMPONENTS
import Button from 'components/Button/Button';
import Package from 'components/Package/Package';
// HELPERS
import BlockScroll from 'helpers/BlockScroll';
// PACKAGES DATA
import { socialMediaPackages, influencerMarketingPackages, productPhotographyPackages } from 'data/servicesPackages';
// ICONS
import alertIcon from 'assets/icons/alert-icon.svg';
// STYLES
import { Wrapper, PackagesWrapper, PackagesOptions, ButtonsWrapper, Packages, InfoModal } from './PriceListPackages.styles';

const PriceListPackages = () => {
  const [data, setData] = useState(socialMediaPackages);
  const [toggle, setToggle] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [optionsPosition, setOptionsPosition] = useState(0);
  const ref = useRef(null);

  const changeDataHandler = (newData) => {
    toggleDataHandler(newData);
    setOptionsPosition(ref.current.offsetTop);
  };

  const toggleDataHandler = (newData) => {
    setToggle(true);

    window.scrollTo({
      top: optionsPosition + window.innerHeight / 1.5,
      left: '0',
      behavior: 'smooth',
    });

    setTimeout(() => {
      setData(newData);
      setToggle(false);
    }, 500);
  };

  const showInfoHandler = () => {
    setShowInfo(!showInfo);
  };

  return (
    <Wrapper>
      <BlockScroll toggle={showInfo} />
      <PackagesWrapper>
        <PackagesOptions ref={ref}>
          <p>Czego dokładnie szukasz?</p>
          <ButtonsWrapper>
            <Button text='Social Media' onClick={() => changeDataHandler(socialMediaPackages)} className={data === socialMediaPackages && 'active'} />
            <Button
              text='Fotografia Produktowa'
              onClick={() => changeDataHandler(productPhotographyPackages)}
              className={data === productPhotographyPackages && 'active'}
            />
            <Button
              text='Influencer Marketing'
              onClick={() => changeDataHandler(influencerMarketingPackages)}
              className={data === influencerMarketingPackages && 'active'}
            />
            <Button icon={alertIcon} alt='Alert Icon' onClick={showInfoHandler} />
            <InfoModal className={showInfo && 'show'} onClick={showInfoHandler}>
              <div>
                <p>Każdy pakiet możemy dowolnie zmodyfikować i dopasować do Twoich indywidualnych potrzeb.</p>
                <p>Łącząc pakiety social media + influencer marketing + fotografia produktowa w dowolnych konfiguracjach, możesz liczyć na RABAT.</p>
              </div>
            </InfoModal>
          </ButtonsWrapper>
        </PackagesOptions>
        <Packages className={toggle && 'hide'}>
          {data.map(({ name, services, price }) => (
            <Package name={name} services={services} price={price} half={data.length === 2 && true} key={name} />
          ))}
        </Packages>
      </PackagesWrapper>
    </Wrapper>
  );
};

export default PriceListPackages;