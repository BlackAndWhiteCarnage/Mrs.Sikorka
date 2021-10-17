import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 150px 0;
`;

export const Header = styled.h3`
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

export const Offers = styled.div`
  width: 100%;
  max-width: 600px;
  height: 100%;
  @media screen and (max-width: 680px) {
    width: 90%;
  }
`;

export const OfferWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Title = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.xl};
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.beigeDark3};
  margin-bottom: 50px;
`;

export const OfferItem = styled.div`
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
