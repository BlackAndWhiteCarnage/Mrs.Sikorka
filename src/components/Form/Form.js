import React from 'react';
import useForm from 'helpers/useForm';
import ContentWrapper from 'hoc/ContentWrapper';
import Button from 'components/Button/Button';
import instagramIcon from 'assets/icons/instagram-icon.svg';
import messengerIcon from 'assets/icons/messenger-icon.svg';
import { FormWrapper, Label, Input, Textarea, IconsAndButton, Icons, WaitingWrapper } from './Form.styles';

const Form = () => {
  const {
    sendEmail,
    form,
    nameHandler,
    feedback,
    validName,
    nameValue,
    emailHandler,
    validEmail,
    emailValue,
    messageHandler,
    validMessage,
    messageValue,
    checkValid,
    waiting,
    emailSend,
  } = useForm();

  return (
    <ContentWrapper>
      <FormWrapper onSubmit={sendEmail} ref={form}>
        <Label htmlFor='name'>Imię</Label>
        <Input
          id='name'
          name='name'
          onChange={nameHandler}
          className={`${feedback === 2 && !validName && 'ERROR'} ${validName && 'VALID'}`}
          value={nameValue}
        />
        <Label htmlFor='email'>Adres e-mail</Label>
        <Input
          id='email'
          name='email'
          onChange={emailHandler}
          className={`${feedback === 2 && !validEmail && 'ERROR'} ${validEmail && 'VALID'}`}
          value={emailValue}
        />
        <Label htmlFor='message'>Wiadomość</Label>
        <Textarea
          id='message'
          name='message'
          onChange={messageHandler}
          className={`${feedback === 2 && !validMessage && 'ERROR'} ${validMessage && 'VALID'}`}
          value={messageValue}
          placeholder='Minimum 20 znaków'
        />
        <IconsAndButton>
          <Icons>
            <a href='https://www.instagram.com/mrs.sikorka/' target='_blank' rel='noreferrer' title='Sprawdź mojego Instagrama!'>
              <img src={instagramIcon} alt='Ikonka Instagrama' id='active' />
            </a>
            <a href='http://m.me/ewelina.hiller/' target='_blank' rel='noreferrer' title='Napisz na Messenger!'>
              <img src={messengerIcon} alt='Ikonka Messengera' id='active' />
            </a>
          </Icons>
          <Button text='Wyślij' onClick={checkValid} type='submit' />
        </IconsAndButton>
        <WaitingWrapper className={waiting && 'show'}>
          {!emailSend ? (
            <>
              <div />
              <div />
              <div />
            </>
          ) : (
            <p>Email wysłany!</p>
          )}
        </WaitingWrapper>
      </FormWrapper>
    </ContentWrapper>
  );
};

export default Form;
