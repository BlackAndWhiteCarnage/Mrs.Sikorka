import React from 'react';
import PropTypes from 'prop-types';
import ViewTitle from 'components/ViewTitle/ViewTitle';
import { homeVectosPaths } from 'data/vectorsParams';
import styled from 'styled-components';
import ScrollTop from 'helpers/ScrollTop';

const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 150px 0;
`;

const Header = styled.h3`
  max-width: 600px;
  width: 100%;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.l};
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 200px;
  @media screen and (max-width: 680px) {
    width: 90%;
  }
  span {
    color: ${({ theme }) => theme.colors.beigeDark3};
  }
`;

const Offers = styled.div`
  width: 100%;
  max-width: 600px;
  height: 100%;
  @media screen and (max-width: 680px) {
    width: 90%;
  }
`;

const OfferWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Title = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.xl};
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.beigeDark3};
  margin-bottom: 50px;
`;

const OfferItem = styled.div`
  position: relative;
  width: calc(100% - 10px);
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-bottom: 35px;
  &:last-child {
    margin-bottom: 150px;
    @media screen and (max-width: 680px) {
      margin-bottom: 100px;
    }
  }
  &::before {
    position: absolute;
    content: '';
    width: 5px;
    height: 100%;
    background: ${({ theme }) => theme.colors.beigeDark3};
    left: -10px;
  }
`;

const Offer = () => {
  return (
    <>
      <ViewTitle titleFirstPart='Co możesz ode mnie otrzymać?' titleSecondPart='Czym konkretnie się zajmuję?' vectorsData={homeVectosPaths} />
      <ScrollTop />
      <Wrapper>
        <Header>
          Wyeksponuję <span>Twój produkt</span>, wydobywając z niego to co najlepsze. Robię zdjęcia, które na Instagramie i Facebooku dobrze się
          klikają i zatrzymują uwagę odbiorcy na dłużej.
        </Header>
        <Offers>
          <OfferWrapper>
            <Title>Social Media</Title>
            <OfferItem>Tworzenie strategii marketingowej dopasowanej do Twoich potrzeb i oczekiwań</OfferItem>
            <OfferItem>Kreowanie postów i angażujących treści dopasowanych do charakteru Twojej marki</OfferItem>
            <OfferItem>Promowanie Twojego profilu oraz produktów i usług w social mediach</OfferItem>
            <OfferItem>Pozyskiwanie nowych obserwujących i klientów</OfferItem>
            <OfferItem>Nawiązywanie relacji z klientem opartych na zaufaniu</OfferItem>
            <OfferItem>Przygotowanie harmonogramu publikacji</OfferItem>
            <OfferItem>Płatne kampanie reklamowe Facebook</OfferItem>
            <OfferItem>Moderacja i odpisywanie na wiadomości oraz komentarze</OfferItem>
            <OfferItem>Przygotowywanie prostych, atrakcyjnych grafik</OfferItem>
          </OfferWrapper>
          <OfferWrapper>
            <Title>Influencer Marketing</Title>
            <OfferItem>Tworzenie bazy Influencerów adekwatnych dla Twojej marki (na podstawie wieloletnich doświadczeń)</OfferItem>
            <OfferItem>Kreatywne pomysły na niestandardowe współprace między Twoją marką, a Influencerami</OfferItem>
            <OfferItem>Nawiązywanie kontaktu z Influencerami</OfferItem>
            <OfferItem>Negocjowanie atrakcyjnych warunków</OfferItem>
            <OfferItem>Nadzorowanie przebiegu współpracy, publikowanych treści</OfferItem>
            <OfferItem>Pozyskiwanie materiałów do wykorzystania dla Twojej marki</OfferItem>
          </OfferWrapper>
          <OfferWrapper>
            <Title>Social Media</Title>
            <OfferItem>Przygotowanie moodboardu, który określi klimat i główne założenia sesji</OfferItem>
            <OfferItem>Sesje zdjęciowe, które pozwolą Ci wyróżnić się wśród konkurencji</OfferItem>
            <OfferItem>Obróbka graficzna, która pozwoli Ci uzyskać spójność w komunikacji</OfferItem>
            <OfferItem>Negocjowanie atrakcyjnych warunków</OfferItem>
            <OfferItem>Nadzorowanie przebiegu współpracy, publikowanych treści</OfferItem>
            <OfferItem>Pozyskiwanie materiałów do wykorzystania dla Twojej marki</OfferItem>
          </OfferWrapper>
        </Offers>
      </Wrapper>
    </>
  );
};

Offer.propTypes = {};

export default Offer;
