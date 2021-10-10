import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 680px) {
    height: 4px;
  }
  &.top {
    div {
      height: 100%;
      border-radius: ${({ theme }) => theme.borderRadius.radius};
    }
    div:first-child {
      background: ${({ theme }) => theme.colors.darkGrey};
      width: 60%;
      transition: 0.5s 0.25s ease;
    }
    div:last-child {
      background: ${({ theme }) => theme.colors.beigeDark3};
      width: 30%;
      transition: 0.25s ease;
    }
    &.toggle {
      div:first-child {
        background: ${({ theme }) => theme.colors.darkGrey};
        width: 30%;
        transition: 0.25s ease;
      }
      div:last-child {
        background: ${({ theme }) => theme.colors.beigeDark3};
        width: 60%;
        transition: 0.5s 0.25s ease;
      }
    }
  }
  &.mid {
    div {
      height: 100%;
      border-radius: ${({ theme }) => theme.borderRadius.radius};
    }
    div:first-child {
      background: ${({ theme }) => theme.colors.beigeDark3};
      width: 20%;
      transition: 0.25s ease;
    }
    div:last-child {
      background: ${({ theme }) => theme.colors.darkGrey};
      width: 70%;
      transition: 0.5s 0.25s ease;
    }
    &.toggle {
      div:first-child {
        background: ${({ theme }) => theme.colors.beigeDark3};
        width: 60%;
        transition: 0.5s 0.25s ease;
      }
      div:last-child {
        background: ${({ theme }) => theme.colors.darkGrey};
        width: 30%;
        transition: 0.25s ease;
      }
    }
  }
  &.bot {
    div {
      height: 100%;
      border-radius: ${({ theme }) => theme.borderRadius.radius};
    }
    div:first-child {
      background: ${({ theme }) => theme.colors.darkGrey};
      width: 50%;
      transition: 0.5s 0.25s ease;
    }
    div:last-child {
      background: ${({ theme }) => theme.colors.beigeDark3};
      width: 40%;
      transition: 0.25s ease;
    }
    &.toggle {
      div:first-child {
        background: ${({ theme }) => theme.colors.darkGrey};
        width: 20%;
        transition: 0.25s ease;
      }
      div:last-child {
        background: ${({ theme }) => theme.colors.beigeDark3};
        width: 70%;
        transition: 0.5s 0.25s ease;
      }
    }
  }
`;
