import React from 'react';
// COMPONENTS
import ViewTitle from 'components/ViewTitle/ViewTitle';
// VECTORS
import { aboutMeVectosPaths } from 'data/vectorsParams';

// IMAGES
import img1 from 'assets/images/img1.jpg';
import img2 from 'assets/images/img2.jpg';
import img3 from 'assets/images/img3.jpg';
import img4 from 'assets/images/img4.jpg';
import img5 from 'assets/images/img5.jpg';
import img6 from 'assets/images/img6.jpg';
import img7 from 'assets/images/img7.jpg';
import img8 from 'assets/images/img8.jpg';
import img9 from 'assets/images/img9.jpg';
import Button from 'components/Button/Button';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 100px 0;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-top: 2px solid ${({ theme }) => theme.colors.beigeDark3};
  margin-top: calc(100vh - 75px);
`;

const Header = styled.h2`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.beigeDark3};
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 20px;
`;

const Content = styled.article`
  position: relative;
  width: 100%;
  max-width: 600px;
  min-height: 350px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  font-size: ${({ theme }) => theme.fontSize.l};
  p {
    position: relative;
    width: 100%;
    text-align: center;
    span {
      color: ${({ theme }) => theme.colors.beigeDark3};
    }
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

const ButtonsWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ImagesWrapper = styled.section`
  width: 100%;
  height: auto;
  max-width: 600px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;
  @media screen and (max-width: 1200px) {
    width: 90%;
  }
  img {
    width: 48%;
    margin-bottom: 20px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    &:last-child {
      width: 100%;
    }
    @media screen and (max-width: 1200px) {
      width: 45%;
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
        <p>
          Z pasją i zapałem kompleksowo zajmie się profilem Twojej firmy na Instagramie, Facebooku, TikToku? Stworzy dopasowaną do Twoich potrzeb
          strategię i harmonogram działań, pomoże w budowaniu profesjonalnego wizerunku, pozyska nowych klientów, pomoże zwiększyć sprzedaż i wykona
          piękne zdjęcia produktowe? Właśnie znalazłeś/aś! Od lat pomagam firmom takim jak Twoja.{' '}
          <span>Przeprowadzam metamorfozy Instagramowych feedów i statystyk.</span>
        </p>
      </Content>
      <ButtonsWrapper>
        <Button text='Sprawdź Ofertę' />
        <Button text='Sprawdź portfolio' />
      </ButtonsWrapper>
      <ImagesWrapper>
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        <img src={img4} />
        <img src={img5} />
        <img src={img6} />
        <img src={img7} />
        <img src={img8} />
        <img src={img9} />
      </ImagesWrapper>
    </Wrapper>
  </>
);

export default AboutMe;
