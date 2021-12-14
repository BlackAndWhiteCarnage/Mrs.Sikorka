import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

const useForm = () => {
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
      console.log('send');
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

  return {
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
  };
};

export default useForm;
