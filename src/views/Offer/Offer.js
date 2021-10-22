import React from 'react';
// COMPONENTS
import ViewTitle from 'components/ViewTitle/ViewTitle';
import ContentWrapper from 'hoc/ContentWrapper';
// HELPERS
import Keywords from 'helpers/Keywords';
// DATA
import { offersData } from 'data/offersData';
// VECTORS
import { offerVectosPaths } from 'data/vectorsParams';
// STYLES
import { Offers, OfferWrapper, Title, OfferItem } from './Offer.styles';

const Offer = () => (
  <>
    <Keywords text='zdjęcia produktowe, fotograf, prowadzenie instagrama, prowadzenie Facebooka, promowanie firmy, jak promować swoją firmę' />
    <ViewTitle titleFirstPart='Co możesz ode mnie otrzymać?' titleSecondPart='Czym konkretnie się zajmuję?' vectorsData={offerVectosPaths} />
    <ContentWrapper className='column'>
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
    </ContentWrapper>
  </>
);

export default Offer;
