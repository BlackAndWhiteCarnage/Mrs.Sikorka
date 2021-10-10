import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 50px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  @media screen and (min-width: 1200px) {
    display: none;
  }
  @media screen and (max-width: 680px) {
    height: 30px;
    width: 35px;
  }
`;
