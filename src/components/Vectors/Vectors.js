import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Wrapper, Vector } from './Vectors.styles';
import { fade } from 'assets/animations/animations';

const Vectors = ({ vectorsData }) => (
  <Wrapper variants={fade} initial='hidden' animate='show' exit='exit'>
    {vectorsData.map(({ path, duration, delay }, i) => (
      <Vector fill='none' viewBox='0 0 1920 447' key={path}>
        <motion.path
          d={path}
          stroke='#EEDDD0'
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: duration, delay: delay }}
        />
      </Vector>
    ))}
  </Wrapper>
);

export default Vectors;

Vectors.propTypes = {
  vectorsData: PropTypes.array.isRequired,
};
