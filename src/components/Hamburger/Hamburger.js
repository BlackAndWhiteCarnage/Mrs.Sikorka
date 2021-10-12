import React from 'react';
import PropTypes from 'prop-types';
// STYLES
import { Wrapper, Line } from './Hamburger.styles';

const Hamburger = ({ toggleModal, toggleModalHandler }) => (
  <Wrapper onClick={toggleModalHandler}>
    <Line className={`top ${toggleModal && 'toggle'}`}>
      <div />
      <div />
    </Line>
    <Line className={`mid ${toggleModal && 'toggle'}`}>
      <div />
      <div />
    </Line>
    <Line className={`bot ${toggleModal && 'toggle'}`}>
      <div />
      <div />
    </Line>
  </Wrapper>
);

Hamburger.propTypes = {
  toggleModal: PropTypes.bool.isRequired,
  toggleModalHandler: PropTypes.func.isRequired,
};

export default Hamburger;
