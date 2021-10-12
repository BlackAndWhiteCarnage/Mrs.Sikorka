import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// STYLES
import { Vector } from './Vectors.styles';

const Vectors = ({ vectorsData }) => {
  const [ref, inView] = useInView();

  return (
    <>
      {vectorsData.map(({ path, duration, delay }, i) => (
        <Vector ref={ref} fill='none' viewBox='0 0 1920 447' key={i}>
          <motion.path
            d={path}
            stroke='#EEDDD0'
            initial={{ pathLength: 0, pathOffset: 1 }}
            animate={{ pathLength: inView ? 1 : 0, pathOffset: inView ? 0 : 1 }}
            transition={{ duration: duration, delay: delay }}
          />
        </Vector>
      ))}
    </>
  );
};

export default Vectors;

Vectors.propTypes = {
  vectorsData: PropTypes.array.isRequired,
};
