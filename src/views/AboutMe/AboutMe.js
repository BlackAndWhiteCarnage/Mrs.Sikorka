import React from 'react';
import ViewTitle from 'components/ViewTitle/ViewTitle';
import Button from 'components/Button/Button';
import ContentWrapper from 'hoc/ContentWrapper';
import { aboutMeVectosPaths } from 'data/vectorsParams';
import img1 from 'assets/images/portfolioImages/img1.jpg';
import img2 from 'assets/images/portfolioImages/img2.jpg';
import img3 from 'assets/images/portfolioImages/img3.jpg';
import img4 from 'assets/images/portfolioImages/img4.jpg';
import img5 from 'assets/images/portfolioImages/img5.jpg';
import img6 from 'assets/images/portfolioImages/img6.jpg';
import img7 from 'assets/images/portfolioImages/img7.jpg';
import img8 from 'assets/images/portfolioImages/img8.jpg';
import img9 from 'assets/images/portfolioImages/img9.jpg';
import { Header, Content, ButtonsWrapper, ImagesWrapper } from './AboutMe.styles';

const AboutMe = () => (
  <>
    <ViewTitle
      titleFirstPart='Nazywam się Ewelina Sikora, a moje największe pasje'
      titleSecondPart='to marketing, fotografia i media społecznościowe.'
      vectorsData={aboutMeVectosPaths}
    />
    <ContentWrapper className='column'>
      <Header>Potrzebujesz kogoś kto...</Header>
      <Content>
        <p>
          Z pasją i zapałem kompleksowo zajmie się profilem Twojej firmy na Instagramie, Facebooku, TikToku? Stworzy dopasowaną do Twoich potrzeb
          strategię i harmonogram działań, pomoże w budowaniu profesjonalnego wizerunku, pozyska nowych klientów, pomoże zwiększyć sprzedaż i wykona
          piękne zdjęcia produktowe? Właśnie znalazłeś/aś! Od lat pomagam firmom takim jak Twoja.
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
        <img src={img1} alt='Zdjęcie żelu micelarnego' />
        <img src={img2} alt='Zdjęcie szamponu oraz odżywki' />
        <img src={img3} alt='Zdjęcie peelingu cukrowo-solnego' />
        <img src={img4} alt='Zdjęcie peelingu enzymatycznego' />
        <img src={img5} alt='Zdjęcie peelingu cukrowo-solnego' />
        <img src={img6} alt='Zdjęcie żelu, żelu pod prysznic oraz kremowego masła' />
        <img src={img7} alt='Zdjęcie kremu BB' />
        <img src={img8} alt='Zdjęcie czerwonej szminki' />
        <img src={img9} alt='Zdjęcie swatcha czerwonej szminki' />
      </ImagesWrapper>
    </ContentWrapper>
  </>
);

export default AboutMe;
