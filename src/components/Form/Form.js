import React, { useState } from 'react';
// COMPONENTS
import ContentWrapper from 'hoc/ContentWrapper';
import Button from 'components/Button/Button';
// ICONS
import instagramIcon from 'assets/icons/instagram-icon.svg';
import messengerIcon from 'assets/icons/messenger-icon.svg';
// STYLES
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
    e.preventDefault();

    if (validEmail && validMessage && validName) {
      setFeedback(1);
      sendEmail(e);
      return;
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
      setTimeout(() => {
        setNameValue('');
        setEmailValue('');
        setMessageValue('');
        setEmailSend(true);
        setFeedback(5);
        setValidEmail(false);
        setValidName(false);
        setValidMessage(false);
      }, 1500);
      setTimeout(() => {
        // setEmailSend(false);
        setFeedback(0);
      }, 4000);
      // emailjs.sendForm('service_pkn9ez9', 'template_btr6t4a', e.target, 'user_wfAnEXgFR6wa0u7anAPJf').then(
      //   (result) => {
      //     console.log(result.text);
      //     setEmailSend(true);
      //   },
      //   (error) => {
      //     console.log(error.text);
      //   }
      // );
    }
  }

  return (
    <ContentWrapper>
      <FormWrapper>
        <Label htmlFor='name'>Imię</Label>
        <Input id='name' onChange={nameHandler} className={`${feedback === 2 && !validName && 'ERROR'} ${validName && 'VALID'}`} value={nameValue} />
        <Label htmlFor='email'>Adres e-mail</Label>
        <Input
          id='email'
          onChange={emailHandler}
          className={`${feedback === 2 && !validEmail && 'ERROR'} ${validEmail && 'VALID'}`}
          value={emailValue}
        />
        <Label htmlFor='message'>Wiadomość</Label>
        <Textarea
          id='message'
          onChange={messageHandler}
          className={`${feedback === 2 && !validMessage && 'ERROR'} ${validMessage && 'VALID'}`}
          value={messageValue}
          placeholder='Minimum 20 znaków'
        />
        <IconsAndButton>
          <Icons>
            <a href='https://www.instagram.com/mrs.sikorka/' target='_blank' rel='noreferrer'>
              <img src={instagramIcon} alt='Instagram Icon' id='active' />
            </a>
            <a href='http://m.me/ewelina.hiller/' target='_blank' rel='noreferrer'>
              <img src={messengerIcon} alt='Messenger Icon' id='active' />
            </a>
          </Icons>
          <Button text='Wyślij' onClick={checkValid} />
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
