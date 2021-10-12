import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 600px;
  @media screen and (max-width: 1366px) {
    height: 450px;
    width: 650px;
  }
  @media screen and (max-width: 1200px) {
    width: 500px;
  }
  @media screen and (max-width: 680px) {
    width: 90%;
    height: 80%;
    margin-top: 30px;
  }
  @media screen and (min-width: 200px) and (max-width: 920px) and (orientation: landscape) {
    width: 65%;
    margin-top: 150px;
  }
`;

export const TextWrapper = styled.div`
  position: absolute;
  width: 220px;
  height: 300px;
  border: 3px solid ${({ theme }) => theme.colors.beigeDark3};
  border-radius: ${({ theme }) => theme.borderRadius.radius};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (max-width: 1366px) {
    width: 200px;
    height: 250px;
  }
  @media screen and (max-width: 1200px) {
    width: 160px;
    height: 220px;
  }
`;

export const Line = styled.div`
  width: 30%;
  height: 3px;
  background: ${({ theme }) => theme.colors.beigeDark3};
  border-radius: ${({ theme }) => theme.borderRadius.radius};
`;

export const Text = styled.p`
  width: 80%;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: ${({ theme }) => theme.fontSize.m};
  @media screen and (max-width: 1200px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  &.break {
    word-break: break-word;
  }
`;

export const ImageWrapperAbsolute = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  &.firstImage {
    width: 350px;
    height: 500px;
    top: 50%;
    @media screen and (max-width: 1366px) {
      width: 300px;
      height: 450px;
    }
    @media screen and (max-width: 1200px) {
      width: 220px;
      height: auto;
    }
    @media screen and (max-width: 680px) {
      top: 0;
      left: unset;
      right: 0;
      transform: none;
      width: 50%;
    }
  }
  &.secondImage {
    width: 400px;
    height: 600px;
    right: 0;
    @media screen and (max-width: 1366px) {
      width: 320px;
      height: 450px;
    }
    @media screen and (max-width: 1200px) {
      width: 250px;
      height: auto;
    }
    @media screen and (max-width: 680px) {
      top: unset;
      bottom: 0;
      right: unset;
      left: 0;
      transform: none;
      width: 50%;
    }
  }
`;

export const ImageWrapperRelative = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 3px solid ${({ theme }) => theme.colors.beigeDark3};
    border-radius: ${({ theme }) => theme.borderRadius.radius};
  }
  &.firstImage {
    &::before {
      left: -20px;
      top: 20px;
      z-index: -1;
      @media screen and (max-width: 1200px) {
        left: -10px;
        top: 10px;
      }
    }
  }
  &.secondImage {
    &::before {
      left: 20px;
      top: -20px;
      z-index: -1;
      @media screen and (max-width: 1200px) {
        left: 10px;
        top: -10px;
      }
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.radius};
  object-fit: cover;
`;

export const Name = styled.img`
  position: absolute;
  left: -80px;
  top: 0;
  width: 55px;
  height: auto;
  @media screen and (max-width: 1366px) {
    width: 40px;
    left: -65px;
  }
  @media screen and (max-width: 1200px) {
    left: -40px;
    width: unset;
    height: 50%;
  }
`;
