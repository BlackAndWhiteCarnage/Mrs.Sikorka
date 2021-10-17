export const pageAnimation = {
  hidden: {
    opacity: 0,
    top: '40%',
  },
  show: {
    opacity: 1,
    top: '50%',
    transition: {
      duration: 1,
      delay: 1.5,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    top: '40%',
    transition: {
      duration: 0.5,
      delay: 0.1,
      when: 'afterChildren',
    },
  },
};

export const slide = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const fade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
};

export const sliderContainer = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, ease: 'easeOut' } },
};

export const slider = {
  hidden: {
    x: '-130%',
    skew: '45deg',
  },
  show: {
    x: '100%',
    skew: '0deg',
    transition: { ease: 'easeOut', duration: 1 },
  },
};
