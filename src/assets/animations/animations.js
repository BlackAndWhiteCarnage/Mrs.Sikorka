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

export const navAnim = {
  hidden: {
    opacity: 0,
    top: -100,
  },
  show: {
    opacity: 1,
    top: 0,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};

export const contentAnim = {
  hidden: {
    opacity: 0,
    transform: 'translateY(-50px)',
  },
  show: {
    opacity: 1,
    transform: 'translateY(0px)',
    transition: {
      delay: 0.25,
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transform: 'translateY(100px)',
    transition: {
      delay: 0.25,
      duration: 1,
    },
  },
};
