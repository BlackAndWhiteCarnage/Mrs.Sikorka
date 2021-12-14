import styled from 'styled-components';

export const Offers = styled.article`
  width: 100%;
  max-width: 600px;
  height: 100%;
  @media screen and (max-width: 680px) {
    width: 90%;
  }
`;

export const OfferWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 20px;
`;

export const Title = styled.h3`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.xl};
  letter-spacing: 3px;
  text-transform: uppercase;
  background: ${({ theme }) => theme.colors.beigeDark};
  padding: 10px 20px;
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-bottom: 40px;
`;

export const OfferItem = styled.li`
  position: relative;
  list-style: none;
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
