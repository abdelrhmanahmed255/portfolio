// Animation utilities and configurations for senior-level micro-interactions

// Easing curves for professional animations
export const easings = {
  // Smooth and professional
  smooth: [0.25, 0.46, 0.45, 0.94],
  // Snappy for buttons and interactions
  snappy: [0.68, -0.55, 0.265, 1.55],
  // Subtle for hover effects
  subtle: [0.4, 0, 0.2, 1],
  // Dramatic for page transitions
  dramatic: [0.86, 0, 0.07, 1],
  // Bounce for playful elements
  bounce: [0.68, -0.55, 0.265, 1.55],
  // Elastic for loading states
  elastic: [0.175, 0.885, 0.32, 1.275]
};

// Stagger configurations for sequential animations
export const stagger = {
  quick: {
    delayChildren: 0.1,
    staggerChildren: 0.05
  },
  medium: {
    delayChildren: 0.2,
    staggerChildren: 0.1
  },
  slow: {
    delayChildren: 0.3,
    staggerChildren: 0.15
  }
};

// Common animation variants
export const fadeInUp = {
  initial: {
    y: 30,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easings.smooth
    }
  }
};

export const fadeInDown = {
  initial: {
    y: -30,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easings.smooth
    }
  }
};

export const scaleIn = {
  initial: {
    scale: 0.9,
    opacity: 0
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: easings.subtle
    }
  }
};

export const slideInLeft = {
  initial: {
    x: -50,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easings.smooth
    }
  }
};

export const slideInRight = {
  initial: {
    x: 50,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easings.smooth
    }
  }
};

// Hover animations for interactive elements
export const hoverScale = {
  scale: 1.05,
  transition: {
    duration: 0.2,
    ease: easings.subtle
  }
};

export const hoverLift = {
  y: -5,
  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
  transition: {
    duration: 0.3,
    ease: easings.smooth
  }
};

export const hoverGlow = {
  boxShadow: [
    "0 0 20px rgba(59, 130, 246, 0.3)",
    "0 0 40px rgba(59, 130, 246, 0.5)",
    "0 0 20px rgba(59, 130, 246, 0.3)"
  ],
  transition: {
    duration: 1.5,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

// Card interactions
export const cardHover = {
  y: -8,
  scale: 1.02,
  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
  transition: {
    duration: 0.3,
    ease: easings.smooth
  }
};

// Button interactions
export const buttonTap = {
  scale: 0.95,
  transition: {
    duration: 0.1,
    ease: easings.snappy
  }
};

export const buttonHover = {
  scale: 1.02,
  boxShadow: "0 8px 25px rgba(59, 130, 246, 0.25)",
  transition: {
    duration: 0.2,
    ease: easings.subtle
  }
};

// Loading animations
export const pulse = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const float = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const rotate = {
  animate: {
    rotate: 360,
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

// Text animations
export const textReveal = {
  initial: {
    y: "100%",
    opacity: 0
  },
  animate: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easings.smooth
    }
  }
};

export const letterSpacing = {
  initial: {
    letterSpacing: "-0.5em",
    opacity: 0
  },
  animate: {
    letterSpacing: "0em",
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easings.smooth
    }
  }
};

// Page transition variants
export const pageTransition = {
  initial: {
    opacity: 0,
    scale: 0.95
  },
  in: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easings.smooth
    }
  },
  out: {
    opacity: 0,
    scale: 1.05,
    transition: {
      duration: 0.4,
      ease: easings.dramatic
    }
  }
};

// Container variants for staggered children
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      ...stagger.medium,
      when: "beforeChildren"
    }
  }
};

export const itemVariants = {
  hidden: { 
    y: 20, 
    opacity: 0 
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easings.smooth
    }
  }
};

// Advanced scroll-triggered animations
export const scrollVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
    scale: 0.95
  },
  onscreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8
    }
  }
};

// Magnetic effect for interactive elements
export const magneticHover = (strength = 20) => ({
  x: strength,
  y: strength * 0.5,
  transition: {
    type: "spring",
    stiffness: 200,
    damping: 10
  }
});

// Utility function for creating custom spring animations
export const createSpring = (stiffness = 300, damping = 30) => ({
  type: "spring",
  stiffness,
  damping
});

export default {
  easings,
  stagger,
  fadeInUp,
  fadeInDown,
  scaleIn,
  slideInLeft,
  slideInRight,
  hoverScale,
  hoverLift,
  hoverGlow,
  cardHover,
  buttonTap,
  buttonHover,
  pulse,
  float,
  rotate,
  textReveal,
  letterSpacing,
  pageTransition,
  containerVariants,
  itemVariants,
  scrollVariants,
  magneticHover,
  createSpring
};
