import { useEffect } from 'react';
import PropTypes from 'prop-types';

const BlockScrollProvider = ({ toggle }) => {
  useEffect(() => {
    document.body.style.overflowY = `${toggle ? 'hidden' : 'scroll'}`;

    return () => {
      document.body.style.overflowY = 'scroll';
    };
  }, [toggle]);

  return null;
};

BlockScrollProvider.propTypes = {
  toggle: PropTypes.bool.isRequired,
};

export default BlockScrollProvider;
