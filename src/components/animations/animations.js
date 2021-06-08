export const pageTransitionFadeOut = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: 'backInOut',
    },
  },
};

export const fadeUp = {
  hidden: { y: '100px', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1,
      when: 'beforeChildren',
      staggerChildren: 0.4,
    },
  },
};
