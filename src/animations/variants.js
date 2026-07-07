// Reusable Framer Motion animation variants for RAAS RATNA

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] },
  },
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.34, 1.56, 0.64, 1] },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerSlow = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

export const cardHover = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    transition: { duration: 0.4, ease: 'easeOut' },
  },
  hover: {
    y: -10,
    scale: 1.02,
    boxShadow: '0 20px 60px rgba(45,80,22,0.18)',
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export const floatAnimation = {
  initial: { y: 0, rotate: 0 },
  animate: {
    y: [-18, 0, -10, 0],
    rotate: [0, 2, -1, 0],
    transition: {
      duration: 7,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const floatAnimationAlt = {
  initial: { y: 0, rotate: 0 },
  animate: {
    y: [0, -20, -5, -15, 0],
    rotate: [0, -3, 1, -2, 0],
    transition: {
      duration: 9,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const leafAnimation = (delay = 0) => ({
  initial: { y: -20, x: 0, rotate: 0, opacity: 0 },
  animate: {
    y: ['0vh', '100vh'],
    x: [0, 30, -20, 40, -10, 20],
    rotate: [0, 120, 240, 360],
    opacity: [0, 1, 0.8, 0.6, 0],
    transition: {
      duration: 12 + delay,
      repeat: Infinity,
      delay: delay * 1.5,
      ease: 'linear',
    },
  },
});

export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.4 },
  },
};

export const navbarVariants = {
  transparent: {
    backgroundColor: 'rgba(255,255,255,0)',
    backdropFilter: 'blur(0px)',
    borderColor: 'rgba(255,255,255,0)',
    boxShadow: 'none',
  },
  solid: {
    backgroundColor: 'rgba(250,247,240,0.85)',
    backdropFilter: 'blur(16px)',
    borderColor: 'rgba(212,160,23,0.2)',
    boxShadow: '0 4px 30px rgba(0,0,0,0.08)',
  },
};

export const drawerVariants = {
  closed: {
    x: '100%',
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  open: {
    x: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const overlayVariants = {
  closed: { opacity: 0, pointerEvents: 'none' },
  open: {
    opacity: 1,
    pointerEvents: 'auto',
    transition: { duration: 0.3 },
  },
};
