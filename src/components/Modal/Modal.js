import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// COMPONENTS
import NavItem from 'components/NavItem/NavItem';
// STYLES
import { Wrapper, ModalItems } from './Modal.styles';

const Modal = ({ toggleModal, toggleModalHandler }) => {
  useEffect(() => {
    document.body.style.overflowY = `${toggleModal ? 'hidden' : 'scroll'}`;
  }, [toggleModal]);

  return (
    <Wrapper className={toggleModal && 'show'} onClick={toggleModalHandler}>
      <ModalItems>
        <NavItem text='O Mnie' className={`${toggleModal && 'show'} modalItem`} to='/o_mnie' />
        <NavItem text='Oferta' className={`${toggleModal && 'show'} modalItem`} to='/oferta' />
        <NavItem text='Cennik' className={`${toggleModal && 'show'} modalItem`} to='/cennik' />
        <NavItem text='Kontakt' className={`${toggleModal && 'show'} modalItem`} to='/kontakt' />
      </ModalItems>
    </Wrapper>
  );
};

Modal.propTypes = {
  toggleModal: PropTypes.bool.isRequired,
  toggleModalHandler: PropTypes.func.isRequired,
};

export default Modal;
