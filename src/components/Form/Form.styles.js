import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormWrapper = styled.form`
  width: 550px;
  height: auto;
  /* border: 1px solid black; */
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
  border-bottom: 2px solid ${({ theme }) => theme.colors.beigeDark};
  margin-bottom: 30px;
  transition: 0.25s ease;
  font-size: ${({ theme }) => theme.fontSize.m};
  padding: 20px 0px;
  &:focus {
    padding: 20px 10px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.beigeDark3};
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
  border: 2px solid ${({ theme }) => theme.colors.beigeDark};
  padding: 10px;
  outline: none;
  font-size: ${({ theme }) => theme.fontSize.m};
  border-radius: 10px;
  @media screen and (max-width: 620px) {
    height: 300px;
  }
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.beigeDark3};
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
