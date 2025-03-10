
/**
 * A collection of animation variants and utilities for smooth transitions
 */

type Variant = {
  hidden: object;
  visible: object;
};

export const fadeIn: Variant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

export const fadeUp: Variant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

export const fadeDown: Variant = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

export const fadeInStagger = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
};

export const fadeScale: Variant = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

export const staggerContainer = (staggerChildren: number = 0.1, delayChildren: number = 0.1) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren
    }
  }
});

export const blurIn: Variant = {
  hidden: { opacity: 0, filter: 'blur(8px)' },
  visible: { 
    opacity: 1, 
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export const slideIn = (direction: 'left' | 'right' | 'up' | 'down' = 'left', distance: number = 50): Variant => {
  const x = direction === 'left' ? -distance : direction === 'right' ? distance : 0;
  const y = direction === 'up' ? -distance : direction === 'down' ? distance : 0;

  return {
    hidden: { opacity: 0, x, y },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
    }
  };
};
