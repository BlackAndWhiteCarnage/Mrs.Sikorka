import React from 'react';
// COMPONENTS
import ViewTitle from 'components/ViewTitle/ViewTitle';
import Button from 'components/Button/Button';
import ContentWrapper from 'hoc/ContentWrapper';
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
// STYLES
import { Header, Content, ButtonsWrapper, ImagesWrapper } from './AboutMe.styles';

const AboutMe = () => (
  <>
    <ViewTitle
      titleFirstPart='Nazywam się Ewelina Sikora, a moją największą pasją'
      titleSecondPart='jest marketing, fotografia i media społecznościowe.'
      vectorsData={aboutMeVectosPaths}
    />
    <ContentWrapper className='column'>
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
        <Button text='Sprawdź Ofertę' linkTo='/oferta' />
        <Button
          text='Sprawdź portfolio'
          href='https://www.canva.com/design/DAEkQWDjXGg/4O90f5iUVnHQS_HUIWnLbg/view?utm_content=DAEkQWDjXGg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink'
        />
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
    </ContentWrapper>
  </>
);

export default AboutMe;
