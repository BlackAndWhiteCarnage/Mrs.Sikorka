export const pageAnimation = {
  hidden: {
    opacity: 0,
    top: '45%',
  },
  show: {
    opacity: 1,
    top: '50%',
    transition: {
      duration: 0.5,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    top: '45%',
    transition: {
      duration: 0.5,
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
      duration: 0.5,
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
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.25,
      duration: 0.5,
    },
  },
};
