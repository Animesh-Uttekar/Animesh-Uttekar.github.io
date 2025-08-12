const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const TIMING = {
  fast: 0.12,
  normal: 0.24,
  slow: 0.4,
  stagger: 0.06,
};

const EASING = {
  easeOut: [0.0, 0.0, 0.2, 1],
  easeIn: [0.4, 0.0, 1, 1],
  easeInOut: [0.4, 0.0, 0.2, 1],
};

export const fadeUp = {
  initial: prefersReducedMotion 
    ? { opacity: 0 }
    : { opacity: 0, y: 20 },
  animate: prefersReducedMotion
    ? { opacity: 1 }
    : { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: TIMING.normal,
          ease: EASING.easeOut,
        }
      },
  exit: prefersReducedMotion
    ? { opacity: 0 }
    : {
        opacity: 0,
        y: 20,
        transition: {
          duration: TIMING.fast,
          ease: EASING.easeIn,
        }
      }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: prefersReducedMotion ? 0 : TIMING.stagger,
    }
  }
};

export const staggerItem = {
  initial: prefersReducedMotion
    ? { opacity: 0 }
    : { opacity: 0, y: 20 },
  animate: prefersReducedMotion
    ? { opacity: 1 }
    : {
        opacity: 1,
        y: 0,
        transition: {
          duration: TIMING.normal,
          ease: EASING.easeOut,
        }
      }
};

export const cardHover = {
  rest: {
    y: 0,
    scale: 1,
    transition: {
      duration: TIMING.normal,
      ease: EASING.easeOut,
    }
  },
  hover: prefersReducedMotion
    ? {}
    : {
        y: -4,
        scale: 1.02,
        transition: {
          duration: 0.16,
          ease: EASING.easeOut,
        }
      }
};

export const buttonHover = {
  rest: {
    scale: 1,
    transition: {
      duration: TIMING.fast,
      ease: EASING.easeOut,
    }
  },
  hover: prefersReducedMotion
    ? {}
    : {
        scale: 1.05,
        transition: {
          duration: TIMING.fast,
          ease: EASING.easeOut,
        }
      },
  tap: prefersReducedMotion
    ? {}
    : {
        scale: 0.98,
        transition: {
          duration: 0.08,
          ease: EASING.easeOut,
        }
      }
};

export const heroContent = {
  initial: prefersReducedMotion
    ? { opacity: 0 }
    : { opacity: 0, y: 30 },
  animate: prefersReducedMotion
    ? { opacity: 1 }
    : {
        opacity: 1,
        y: 0,
        transition: {
          duration: TIMING.slow,
          ease: EASING.easeOut,
          delay: 0.1,
        }
      }
};

export const heroButtons = {
  initial: prefersReducedMotion
    ? { opacity: 0 }
    : { opacity: 0, y: 20 },
  animate: prefersReducedMotion
    ? { opacity: 1 }
    : {
        opacity: 1,
        y: 0,
        transition: {
          duration: TIMING.normal,
          ease: EASING.easeOut,
          delay: 0.3,
        }
      }
};

export const navItem = {
  initial: prefersReducedMotion
    ? { opacity: 0 }
    : { opacity: 0, x: -10 },
  animate: prefersReducedMotion
    ? { opacity: 1 }
    : {
        opacity: 1,
        x: 0,
        transition: {
          duration: TIMING.normal,
          ease: EASING.easeOut,
        }
      }
};

export const chipContainer = {
  animate: {
    transition: {
      staggerChildren: prefersReducedMotion ? 0 : 0.05,
    }
  }
};

export const chipItem = {
  initial: prefersReducedMotion
    ? { opacity: 0 }
    : { opacity: 0, scale: 0.8 },
  animate: prefersReducedMotion
    ? { opacity: 1 }
    : {
        opacity: 1,
        scale: 1,
        transition: {
          duration: TIMING.normal,
          ease: EASING.easeOut,
        }
      }
};

export const projectGrid = {
  animate: {
    transition: {
      staggerChildren: prefersReducedMotion ? 0 : TIMING.stagger,
    }
  }
};

export const projectCard = {
  initial: prefersReducedMotion
    ? { opacity: 0 }
    : { opacity: 0, y: 30, scale: 0.95 },
  animate: prefersReducedMotion
    ? { opacity: 1 }
    : {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: TIMING.normal,
          ease: EASING.easeOut,
        }
      }
};

export const contactCard = {
  initial: prefersReducedMotion
    ? { opacity: 0 }
    : { opacity: 0, y: 20, scale: 0.98 },
  animate: prefersReducedMotion
    ? { opacity: 1 }
    : {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: TIMING.normal,
          ease: EASING.easeOut,
          delay: 0.1,
        }
      }
};

export const iconHover = {
  rest: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: TIMING.fast,
      ease: EASING.easeOut,
    }
  },
  hover: prefersReducedMotion
    ? {}
    : {
        scale: 1.1,
        rotate: 5,
        transition: {
          duration: TIMING.fast,
          ease: EASING.easeOut,
        }
      }
};

export const getReducedMotionVariants = (variants) => {
  if (prefersReducedMotion) {
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    };
  }
  return variants;
};

export const motionVariants = {
  fadeUp,
  staggerContainer,
  staggerItem,
  cardHover,
  buttonHover,
  heroContent,
  heroButtons,
  navItem,
  chipContainer,
  chipItem,
  projectGrid,
  projectCard,
  contactCard,
  iconHover,
};

export default motionVariants;
