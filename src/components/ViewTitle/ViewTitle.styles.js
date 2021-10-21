import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: calc(100vh - 75px);
  position: fixed;
  top: 0;
  z-index: -1;
`;

export const TitleWrapper = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 600px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  h2 {
    background: ${({ theme }) => theme.colors.white};
    padding: 50px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: ${({ theme }) => theme.fontSize.l};
    border: 2px solid ${({ theme }) => theme.colors.beigeDark2};
    span {
      color: ${({ theme }) => theme.colors.beigeDark3};
    }
  }
  @media screen and (max-width: 680px) {
    width: 90%;
    h2 {
      padding: 30px 20px;
    }
  }
  @media screen and (min-width: 200px) and (max-width: 920px) and (orientation: landscape) {
    width: 65%;
    height: 80%;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
