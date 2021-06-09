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
      ease: "backInOut",
    },
  },
};

// Fade Up children from hidden to visible
// This is the parent container
// Delayed extra long to show animation
export const fadeUpParent = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 2,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};

// Fade Up children from hidden to visible
// This is the child elements
export const fadeUpChild = {
  hidden: { opacity: 0, y: "100%" },
  show: { opacity: 1, y: 0 },
};

// Fades Up from bottom
export const fadeUp = {
  hidden: { y: "100px", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1,
    },
  },
};
