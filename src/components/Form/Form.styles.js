import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.section)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
  background: ${({ theme }) => theme.colors.white};
  border-top: 2px solid ${({ theme }) => theme.colors.beigeDark3};
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  margin-top: calc(100vh - 75px);
`;

export const FormWrapper = styled.form`
  position: relative;
  width: 600px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 620px) {
    width: 90%;
  }
`;

export const Label = styled.label`
  width: 100%;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: ${({ theme }) => theme.fontSize.l};
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  background: none;
  border: none;
  outline: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.beigeDark3};
  margin-bottom: 30px;
  transition: 0.25s ease;
  font-size: ${({ theme }) => theme.fontSize.m};
  padding: 20px 0px;
  &.ERROR {
    background: #ffd6d6;
  }
  &.VALID {
    background: #d1ffd9;
  }
  &:focus {
    padding: 20px 10px;
    background: ${({ theme }) => theme.colors.beigeDark};
    transition: 0.25s ease;
  }
`;

export const Textarea = styled.textarea`
  background: none;
  width: 100%;
  height: 220px;
  resize: none;
  margin-bottom: 30px;
  border: 2px solid ${({ theme }) => theme.colors.beigeDark3};
  padding: 10px;
  outline: none;
  font-size: ${({ theme }) => theme.fontSize.m};
  transition: 0.25s ease-out;
  &.ERROR {
    background: #ffd6d6;
  }
  &.VALID {
    background: #d1ffd9;
  }
  @media screen and (max-width: 620px) {
    height: 300px;
  }
  &:focus {
    background: ${({ theme }) => theme.colors.beigeDark};
    transition: 0.25s ease;
  }
`;

export const IconsAndButton = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Icons = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const waitingAnim = keyframes`
  50%{
    transform: translateY(-50px);
  }
`;

export const WaitingWrapper = styled.div`
  position: absolute;
  top: -30%;
  left: -5%;
  background: rgba(255, 255, 255, 0.8);
  width: 110%;
  height: 110%;
  border-radius: 15px;
  opacity: 0;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.25s ease;
  p {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  div {
    width: 50px;
    height: 50px;
    background: ${({ theme }) => theme.colors.darkGrey};
    margin: 25px;
    border-radius: 50%;
    @media screen and (max-width: 620px) {
      width: 30px;
      height: 30px;
    }
  }
  &.show {
    top: -5%;
    opacity: 1;
    pointer-events: all;
    transition: 0.25s ease;
    div {
      :nth-child(1) {
        animation: ${waitingAnim} 1.5s infinite;
      }
      :nth-child(2) {
        animation: ${waitingAnim} 1.5s 0.25s infinite;
      }
      :nth-child(3) {
        animation: ${waitingAnim} 1.5s 0.5s infinite;
      }
    }
  }
`;
