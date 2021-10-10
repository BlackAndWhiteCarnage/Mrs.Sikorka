import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// COMPONENTS
import ModalNavItem from 'components/atoms/ModalNavItem/ModalNavItem';
// STYLES
import { Wrapper, ModalItems } from './Modal.styles';

const Modal = ({ toggleModal, toggleModalHandler }) => {
  useEffect(() => {
    document.body.style.overflowY = `${toggleModal ? 'hidden' : 'scroll'}`;
  }, [toggleModal]);

  return (
    <Wrapper className={toggleModal && 'show'} onClick={toggleModalHandler}>
      <ModalItems>
        <ModalNavItem text='O Mnie' className={toggleModal && 'show'} to='/o_mnie' />
        <ModalNavItem text='Oferta' className={toggleModal && 'show'} to='/oferta' />
        <ModalNavItem text='Cennik' className={toggleModal && 'show'} to='/cennik' />
        <ModalNavItem text='Kontakt' className={toggleModal && 'show'} to='/kontakt' />
      </ModalItems>
    </Wrapper>
  );
};

Modal.propTypes = {
  toggleModal: PropTypes.bool.isRequired,
  toggleModalHandler: PropTypes.func.isRequired,
};

export default Modal;
