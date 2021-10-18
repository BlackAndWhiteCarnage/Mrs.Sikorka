import React from 'react';
// COMPONENTS
import ViewTitle from 'components/ViewTitle/ViewTitle';
// DATA
import { offersData } from 'data/offersData';
// VECTORS
import { offerVectosPaths } from 'data/vectorsParams';
// STYLES
import { Wrapper, Header, Offers, OfferWrapper, Title, OfferItem } from './Offer.styles';

const Offer = () => (
  <>
    <ViewTitle titleFirstPart='Co możesz ode mnie otrzymać?' titleSecondPart='Czym konkretnie się zajmuję?' vectorsData={offerVectosPaths} />
    <Wrapper>
      <Header>
        Wyeksponuję <span>Twój produkt</span>, wydobywając z niego to co najlepsze. Robię zdjęcia, które na Instagramie i Facebooku dobrze się klikają
        i zatrzymują uwagę odbiorcy na dłużej.
      </Header>
      <Offers>
        {offersData.map(({ title, offersList }) => (
          <OfferWrapper key={title}>
            <Title>{title}</Title>
            {offersList.map((list, i) => (
              <OfferItem key={i}>{list}</OfferItem>
            ))}
          </OfferWrapper>
        ))}
      </Offers>
    </Wrapper>
  </>
);

export default Offer;
