import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100vh;
  z-index: 9999;
  pointer-events: none;
`;

export const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.beigeDark};
`;

export const Frame2 = styled(Frame1)`
  background: ${({ theme }) => theme.colors.beigeDark1};
`;

export const Frame3 = styled(Frame1)`
  background: ${({ theme }) => theme.colors.beigeDark2};
`;

export const Frame4 = styled(Frame1)`
  background: ${({ theme }) => theme.colors.beigeDark3};
`;
