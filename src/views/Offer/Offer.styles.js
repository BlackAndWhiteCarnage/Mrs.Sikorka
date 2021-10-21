import styled from 'styled-components';

export const Wrapper = styled.section`
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
  margin-bottom: 20px;
`;

export const Title = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.xl};
  letter-spacing: 3px;
  text-transform: uppercase;
  background: ${({ theme }) => theme.colors.beigeDark};
  padding: 10px 20px;
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-bottom: 40px;
`;

export const OfferItem = styled.div`
  position: relative;
  width: calc(100% - 10px);
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-bottom: 35px;
  padding: 0 10px;
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
