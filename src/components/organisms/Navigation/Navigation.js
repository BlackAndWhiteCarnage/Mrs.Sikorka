import React, { useState } from 'react';
import Modal from 'components/molecules/Modal/Modal';
import NavigationItems from 'components/molecules/NavigationItems/NavigationItems';

const Navigation = () => {
  const [toggleModal, setToggleModal] = useState(false);

  const toggleModalHandler = (bool) => {
    setToggleModal(bool !== false ? !toggleModal : false);
  };

  return (
    <>
      <NavigationItems toggleModal={toggleModal} toggleModalHandler={toggleModalHandler} />
      <Modal toggleModal={toggleModal} toggleModalHandler={toggleModalHandler} />
    </>
  );
};

export default Navigation;
