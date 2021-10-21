import React from 'react';
// COMPONENTS
import ViewTitle from 'components/ViewTitle/ViewTitle';
// DATA
import { offersData } from 'data/offersData';
// VECTORS
import { offerVectosPaths } from 'data/vectorsParams';
// STYLES
import { Wrapper, Offers, OfferWrapper, Title, OfferItem } from './Offer.styles';
// ANIMATIONS
import { contentAnim } from 'assets/animations/animations';

const Offer = () => (
  <>
    <ViewTitle titleFirstPart='Co możesz ode mnie otrzymać?' titleSecondPart='Czym konkretnie się zajmuję?' vectorsData={offerVectosPaths} />
    <Wrapper variants={contentAnim} initial='hidden' animate='show' exit='exit'>
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
