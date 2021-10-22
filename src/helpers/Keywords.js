import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`;

const Keywords = ({ text }) => {
  return <Wrapper>{text}</Wrapper>;
};

export default Keywords;
