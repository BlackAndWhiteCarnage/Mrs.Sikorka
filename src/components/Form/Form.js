import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import ContentWrapper from 'hoc/ContentWrapper';
import Button from 'components/Button/Button';
import instagramIcon from 'assets/icons/instagram-icon.svg';
import messengerIcon from 'assets/icons/messenger-icon.svg';
import { FormWrapper, Label, Input, Textarea, IconsAndButton, Icons, WaitingWrapper } from './Form.styles';

const Form = () => {
  const [emailSend, setEmailSend] = useState(false);
  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validMessage, setValidMessage] = useState(false);
  const [feedback, setFeedback] = useState(0);
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [messageValue, setMessageValue] = useState('');
  const [waiting, setWaiting] = useState(false);

  const form = useRef();

  const nameHandler = (e) => {
    setNameValue(e.target.value);

    if (e.target.value.length >= 3) {
      setValidName(true);
    } else {
      setValidName(false);
    }
  };

  const emailHandler = (e) => {
    setEmailValue(e.target.value);

    const valid = /\S+@\S+\.\S+/;
    if (valid.test(e.target.value)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  const messageHandler = (e) => {
    setMessageValue(e.target.value);

    if (e.target.value.length >= 20) {
      setValidMessage(true);
    } else {
      setValidMessage(false);
    }
  };

  const checkValid = (e) => {
    if (validEmail && validMessage && validName) {
      setFeedback(1);
      sendEmail(e);
    } else {
      setFeedback(2);
    }

    setTimeout(() => {
      setFeedback(0);
    }, 3000);
  };

  function sendEmail(e) {
    e.preventDefault();

    if (validEmail && validMessage && validName) {
      setWaiting(true);
      emailjs
        .sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, form.current, `${process.env.REACT_APP_USER_ID}`)
        .then(
          (result) => {
            console.log(result.text);
            setEmailSend(true);
            setNameValue('');
            setEmailValue('');
            setMessageValue('');
            setFeedback(0);
            setValidEmail(false);
            setValidName(false);
            setValidMessage(false);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  }

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
