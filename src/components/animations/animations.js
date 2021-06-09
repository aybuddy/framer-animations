// Page Transition that fades up
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

// Fade Up children from hidden to visible
// This is the parent container
// Delayed extra long to show animation
export const fadeUpParent = {
  hidden: { opacity: 0, y: '100%' },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 2,
      delay: 1.2,
      when: 'beforeChildren',
      staggerChildren: 0.5,
    },
  },
};

// Fade Up children from hidden to visible
// This is the child elements
export const fadeUpChild = {
  hidden: { opacity: 0, y: '100%' },
  visible: { opacity: 1, y: 0 },
};

// Fades Up from bottom
export const fadeUp = {
  hidden: { y: '100%', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1,
    },
  },
};

// Fades Down from top
export const fadeDown = {
  hidden: { y: '-100%', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1,
    },
  },
};

// Fades In from the Left
export const fadeFromLeft = {
  hidden: { opacity: 0, x: '-100%' },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: 1,
    },
  },
};

// Fades In from the Right
export const fadeFromRight = {
  hidden: { opacity: 0, x: '100%' },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: 1,
    },
  },
};

export const changeSize = {
  // hidden: { width: "100%", x: 0 },
  // visible: {
  //   width: 0,
  //   x: "100%",
  //   transition: {
  //     duration: 1,
  //     delay: 1,
  //   },
  // },
};

// Slides in from Left to Right 50% of width
// The container needs to be positioned absolute
export const leftToRight50 = {
  hidden: { width: '0%' },
  visible: {
    width: '50%',
    transition: {
      delay: 0.2,
      duration: 1,
      ease: 'easeInOut',
    },
  },
};
export const leftToRight502 = {
  hidden: { width: '0%' },
  visible: {
    width: '50%',
    transition: {
      delay: 1,
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
};

// Slides in from Right to Left 50% of width
// The container needs to be positioned absolute
export const rightToLeft50 = {
  hidden: { width: '0%' },
  visible: {
    width: '50%',
    transition: {
      delay: 0.8,
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

export const leftToRightDesiredWidth = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

// The container needs to be positioned absolute
// Height set to 100% of parent, background-color set
// Top position set to 0
export const imageOverlayLeftToRight = {
  hidden: { left: 0, width: '0%' },
  visible: {
    left: '100%',
    width: ['0%', '100%', '0%'],
    transition: {
      duration: 1.8,
      ease: 'easeInOut',
      delay: 0.5,
    },
  },
};

// Fix, does not work, has to do with block position
export const imageOverlayTopToBottom = {
  hidden: { top: 0, height: '0%' },
  visible: {
    top: '100%',
    height: ['0%', '100%', '0%'],
    transition: {
      duration: 1.8,
      ease: 'easeInOut',
      delay: 0.5,
    },
  },
};
