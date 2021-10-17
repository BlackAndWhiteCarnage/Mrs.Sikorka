import React from 'react';
// COMPONENTS
import ViewTitle from 'components/ViewTitle/ViewTitle';
import PageTransition from 'components/PageTransition/PageTransition';
// DATA
import { offersData } from 'data/offersData';
// VECTORS
import { homeVectosPaths } from 'data/vectorsParams';
// STYLES
import { Wrapper, Header, Offers, OfferWrapper, Title, OfferItem } from './Offer.styles';

const Offer = () => (
  <>
    <PageTransition />
    <ViewTitle titleFirstPart='Co możesz ode mnie otrzymać?' titleSecondPart='Czym konkretnie się zajmuję?' vectorsData={homeVectosPaths} />
    <Wrapper>
      <Header>
        Wyeksponuję <span>Twój produkt</span>, wydobywając z niego to co najlepsze. Robię zdjęcia, które na Instagramie i Facebooku dobrze się klikają
        i zatrzymują uwagę odbiorcy na dłużej.
      </Header>
      <Offers>
        {offersData.map(({ title, offersList }) => (
          <OfferWrapper>
            <Title>{title}</Title>
            {offersList.map((list) => (
              <OfferItem>{list}</OfferItem>
            ))}
          </OfferWrapper>
        ))}
      </Offers>
    </Wrapper>
  </>
);

export default Offer;
