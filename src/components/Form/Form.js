import React from 'react';
import Button from 'components/Button/Button';
// ICONS
import instagramIcon from 'assets/icons/instagram-icon.svg';
import messengerIcon from 'assets/icons/messenger-icon.svg';
// STYLES
import { Wrapper, FormWrapper, Label, Input, Textarea, IconsAndButton, Icons } from './Form.styles';

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

export default Form;
