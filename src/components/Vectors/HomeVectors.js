import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// DATA
import { homeVectosPaths } from 'data/vectors';
// STYLES
import { Vector } from './HomeVectors.styles';

export const HomeVectors = () => {
  const [ref, inView] = useInView();

  return (
    <>
      {homeVectosPaths.map(({ path, duration, delay }) => (
        <Vector ref={ref} fill='none' viewBox='0 0 1920 447'>
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
