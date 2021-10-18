import React from 'react';
// COMPONENTS
import ViewTitle from 'components/ViewTitle/ViewTitle';
// VECTORS
import { aboutMeVectosPaths } from 'data/vectorsParams';

// IMAGES
import img1 from 'assets/images/img1.jpeg';
import img2 from 'assets/images/img2.jpeg';
import img3 from 'assets/images/img3.jpeg';
import Button from 'components/Button/Button';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 150px 0;
`;

const Header = styled.h2`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.beigeDark3};
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 50px;
`;

const Content = styled.article`
  position: relative;
  width: 100%;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1250px;
  font-size: ${({ theme }) => theme.fontSize.l};
  &.xl {
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin-bottom: 50px;
  }
  p {
    position: relative;
    width: 50%;
    text-align: center;
    &::before {
      content: '';
      position: absolute;
      top: -20px;
      left: 0;
      width: 100%;
      height: 2px;
      background: ${({ theme }) => theme.colors.beigeDark3};
    }
  }
`;

export const ImagesWrapper = styled.section`
  width: 100%;
  height: auto;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1200px) {
    width: 90%;
  }
  img {
    width: 30%;
    margin-bottom: 50px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    @media screen and (max-width: 1200px) {
      width: 45%;
      &:last-child {
        width: 100%;
      }
    }
  }
`;

const AboutMe = () => (
  <>
    <ViewTitle
      titleFirstPart='Nazywam się Ewelina Sikora, a moją największą pasją'
      titleSecondPart='jest marketing, fotografia i media społecznościowe.'
      vectorsData={aboutMeVectosPaths}
    />
    <Wrapper>
      <Header>Potrzebujesz kogoś kto...</Header>
      <Content>
        <p>Z pasją i zapałem kompleksowo zajmie się profilem Twojej firmy na Instagramie, Facebooku, TikToku?</p>
      </Content>
      <Content>
        <p>
          Stworzy dopasowaną do Twoich potrzeb strategię i harmonogram działań, pomoże w budowaniu profesjonalnego wizerunku, pozyska nowych klientów,
          pomoże zwiększyć sprzedaż i wykona piękne zdjęcia produktowe?
        </p>
      </Content>
      <Content className='xl'>
        <p>WŁAŚNIE ZNALAZŁEŚ/AŚ! OD LAT POMAGAM FIRMOM TAKIM JAK TWOJA! PRZEPROWADZAM METAMORFOZY INSTAGRAMOWYCH FEEDÓW I STATYSTYK!</p>
      </Content>
      <Button text='Sprawdź Ofertę' />
      <ViewTitle titleFirstPart='Portfolio' titleSecondPart='' vectorsData={aboutMeVectosPaths} />
      <ImagesWrapper>
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
      </ImagesWrapper>
      <Button text='Zobacz więcej' />
    </Wrapper>
  </>
);

export default AboutMe;
