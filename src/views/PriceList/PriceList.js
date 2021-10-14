import React from 'react';
import styled from 'styled-components';
import ViewTitle from 'components/ViewTitle/ViewTitle';
import { homeVectosPaths } from 'data/vectorsParams';
import Vectors from 'components/Vectors/Vectors';

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 75px);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  padding: 200px 0;
`;

const PackagesWrapper = styled.div`
  width: 100%;
  max-width: 1350px;
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1600px) {
    width: 90%;
  }
`;

const PackagesOptions = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 40px;
  border-radius: 15px;
  margin-bottom: 40px;
  @media screen and (max-width: 1250px) {
    flex-direction: column;
    min-height: 200px;
    align-items: flex-start;
    justify-content: space-around;
  }
  @media screen and (max-width: 860px) {
    flex-direction: column;
    height: auto;
    padding: 0;
    background: none;
    box-shadow: none;
    min-height: 300px;
  }
  p {
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.xl};
    @media screen and (max-width: 1250px) {
      height: 50%;
    }
    @media screen and (max-width: 820px) {
      justify-content: center;
      text-align: center;
      width: 100%;
      margin-bottom: 20px;
    }
  }
`;

const ButtonsWrapper = styled.div`
  width: 800px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1250px) {
    width: 100%;
    flex-wrap: wrap;
    height: 50%;
  }
  @media screen and (max-width: 860px) {
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    padding: 20px;
    align-items: flex-start;
  }
`;

const Button = styled.button`
  position: relative;
  overflow: hidden;
  border: none;
  background: none;
  /* background: ${({ theme }) => theme.colors.beigeDark2}; */
  height: 40px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.darkGrey};
  padding: 10px 20px;
  font-size: ${({ theme }) => theme.fontSize.l};
  border-radius: 5px;
  text-transform: uppercase;
  margin: 5px;
  transition: 0.25s ease;
  cursor: pointer;
  z-index: 1;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.beigeDark2};
    z-index: -1;
    transition: 0.25s ease;
    top: 0;
    left: -100%;
  }
  &:hover {
    transition: 0.25s 0.2s ease-out;
    background: ${({ theme }) => theme.colors.darkGrey};
    &::before {
      top: 0;
      left: 0;
      transition: 0.25s 0.25s ease;
    }
  }
  /* border: 2px solid ${({ theme }) => theme.colors.beigeDark};  */
  /* box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2); */
  @media screen and (max-width: 1600px) {
  }
  @media screen and (max-width: 860px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const Packages = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 860px) {
    flex-direction: column;
  }
`;

const PackageListWrapper = styled.div`
  width: 31%;
  height: fit-content;
  padding: 50px 40px;
  background: white;
  font-size: ${({ theme }) => theme.fontSize.l};
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 1600px) {
    font-size: ${({ theme }) => theme.fontSize.m};
    padding: 30px;
  }
  @media screen and (max-width: 860px) {
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.m};
    margin-bottom: 40px;
  }
`;

const PackageTitle = styled.div`
  height: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  span {
    font-size: ${({ theme }) => theme.fontSize.xl};
    text-transform: uppercase;
    margin-right: 20px;
    @media screen and (max-width: 1200px) {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
  }
  div {
    height: 2px;
    width: 80%;
    background: ${({ theme }) => theme.colors.darkGrey};
  }
`;

const PackageName = styled.p`
  text-transform: uppercase;
  margin-left: 20px;
  color: ${({ theme }) => theme.colors.beigeDark3};
  &.mini {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  &.midi {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  &.maxi {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

const PackageList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 20px;
  padding: 30px 0;
  @media screen and (max-width: 1600px) {
    padding: 20px 0;
  }
`;

const PackageListItem = styled.li`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  &:last-child {
    margin-bottom: 0;
  }
  &:not(:last-child)::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.colors.beigeDark3};
    bottom: -20px;
    border-radius: ${({ theme }) => theme.borderRadius.radius};
    @media screen and (max-width: 1600px) {
      bottom: -10px;
    }
    @media screen and (max-width: 860px) {
      bottom: -20px;
    }
  }
  @media screen and (max-width: 1600px) {
    margin-bottom: 20px;
  }
  @media screen and (max-width: 860px) {
    margin-bottom: 35px;
  }
`;

const Price = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xl};
  @media screen and (max-width: 1600px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  span {
    font-size: ${({ theme }) => theme.fontSize.xl};
    color: ${({ theme }) => theme.colors.beigeDark3};
  }
`;

const PriceList = () => {
  return (
    <>
      <ViewTitle
        titleFirstPart='Poniżej znajdziesz cennik ofert.'
        titleSecondPart='Wybierz pakiet dopasowany do Twoich potrzeb.'
        vectorsData={homeVectosPaths}
      />
      <Wrapper>
        <Vectors vectorsData={homeVectosPaths} />
        <PackagesWrapper>
          <PackagesOptions>
            <p>Czego dokładnie szukasz?</p>
            <ButtonsWrapper>
              <Button>Social Media</Button>
              <Button>Fotografia Produktowa</Button>
              <Button>Influencer Marketing</Button>
              <Button></Button>
            </ButtonsWrapper>
          </PackagesOptions>
          <Packages>
            <PackageListWrapper>
              <PackageTitle>
                <span>Pakiet</span>
                <div />
                <PackageName className='mini'>mini</PackageName>
              </PackageTitle>
              <PackageList>
                <PackageListItem>
                  <p>Stworzenie strategii komunikacji dla Twojej marki</p>
                </PackageListItem>
                <PackageListItem>
                  <p>Pozyskanie i obróbka materiałów graficznych oraz przygotowanie angażujących treści</p>
                </PackageListItem>
                <PackageListItem>
                  <p>Publikacja materiałów na Twoich profilach</p>
                </PackageListItem>
              </PackageList>
              <Price>
                <span>800</span> zł mies.
              </Price>
            </PackageListWrapper>
            <PackageListWrapper>
              <PackageTitle>
                <span>Pakiet</span>
                <div />
                <PackageName className='midi'>midi</PackageName>
              </PackageTitle>
              <PackageList>
                <PackageListItem>
                  <p>Stworzenie strategii komunikacji dla Twojej marki</p>
                </PackageListItem>
                <PackageListItem>
                  <p>Pozyskanie i obróbka materiałów graficznych oraz przygotowanie angażujących treści</p>
                </PackageListItem>
                <PackageListItem>
                  <p>Publikacja materiałów na Twoich profilach</p>
                </PackageListItem>
                <PackageListItem>
                  <p>Moderacja komentarzy i wiadomośc</p>
                </PackageListItem>
                <PackageListItem>
                  <p>Przygotowanie harmonogramu postów i relacji FB + IG (3 posty + 3 relacje tygodniowo)</p>
                </PackageListItem>
              </PackageList>
              <Price>
                <span>1000</span> zł mies.
              </Price>
            </PackageListWrapper>
            <PackageListWrapper>
              <PackageTitle>
                <span>Pakiet</span>
                <div />
                <PackageName className='maxi'>maxi</PackageName>
              </PackageTitle>
              <PackageList>
                <PackageListItem>
                  <p>Stworzenie strategii komunikacji dla Twojej marki</p>
                </PackageListItem>
                <PackageListItem>
                  <p>Pozyskanie i obróbka materiałów graficznych oraz przygotowanie angażujących treści</p>
                </PackageListItem>
                <PackageListItem>
                  <p>Publikacja materiałów na Twoich profilach</p>
                </PackageListItem>
                <PackageListItem>
                  <p>Moderacja komentarzy i wiadomośc</p>
                </PackageListItem>
                <PackageListItem>
                  <p>Przygotowanie harmonogramu postów i relacji FB + IG (3 posty + 3 relacje tygodniowo)</p>
                </PackageListItem>
                <PackageListItem>
                  <p>Zarządzanie płatnymi kampaniami reklamowymi Facebook</p>
                </PackageListItem>
                <PackageListItem>
                  <p>Organizacja akcji dodatkowych (rozdania, konkursy)</p>
                </PackageListItem>
                <PackageListItem>
                  <p>Asystowanie i wsparcie w innych tematach marketingowych dotyczących Twojej marki</p>
                </PackageListItem>
              </PackageList>
              <Price>
                <span>1500</span> zł mies.
              </Price>
            </PackageListWrapper>
          </Packages>
        </PackagesWrapper>
      </Wrapper>
    </>
  );
};

export default PriceList;
