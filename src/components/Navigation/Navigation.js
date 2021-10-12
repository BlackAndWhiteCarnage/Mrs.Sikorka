import React, { useState } from 'react';
// COMPONENTS
import Modal from 'components/Modal/Modal';
import NavBarItems from 'components/NavBarItems/NavBarItems';

const Navigation = () => {
  const [toggleModal, setToggleModal] = useState(false);

  const toggleModalHandler = (bool) => {
    setToggleModal(bool !== false ? !toggleModal : false);
  };

  return (
    <>
      <NavBarItems toggleModal={toggleModal} toggleModalHandler={toggleModalHandler} />
      <Modal toggleModal={toggleModal} toggleModalHandler={toggleModalHandler} />
    </>
  );
};

export default Navigation;
