import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/Button/Button';
import instagramIcon from 'assets/icons/instagram-icon.svg';
import messengerIcon from 'assets/icons/messenger-icon.svg';

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormWrapper = styled.form`
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

const Label = styled.label`
  width: 100%;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: ${({ theme }) => theme.fontSize.l};
`;

const Input = styled.input`
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

const Textarea = styled.textarea`
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

const IconsAndButton = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Icons = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Form = () => {
  return (
    <Wrapper>
      <FormWrapper>
        <Label>Imię</Label>
        <Input />
        <Label>Adres e-mail</Label>
        <Input />
        <Label>Wiadomość</Label>
        <Textarea />
        <IconsAndButton>
          <Icons>
            <img src={instagramIcon} />
            <img src={messengerIcon} />
          </Icons>
          <Button text='Wyślij' />
        </IconsAndButton>
      </FormWrapper>
    </Wrapper>
  );
};

Form.propTypes = {};

export default Form;
