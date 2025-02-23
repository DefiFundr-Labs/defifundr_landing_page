export const sectionVariant = {
  initial: { opacity: 0 },
  final: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
      staggerChildren: 0.2,
    },
  },
};

export const moodVariant = {
  initial: {
    opacity: 0,
    y: -20,
  },
  final: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.25,
      duration: 0.6,
    },
  },
  exit: {
    opacity: 1,
    y: -20,
    transition: {
      delay: 0.25,
      duration: 0.25,
      staggerChildren: 0.2,
    },
  },
};

export const textVariant = {
  initial: {
    opacity: 0,
    y: -20,
  },
  final: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
  final2: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.25,
      duration: 0.6,
    },
  },
  final3: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.6,
    },
  },
};

export const oscillateVariant = {
  animate: {
    x: [2, -2, 2, -2, 2],
    y: [2, -2, 2, -2, 2],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  hover: {
    x: 0,
    y: 0,
    transition: { duration: 0.1 },
  },
};

export const rotateVariant = {
  animate: {
    rotate: [0, 360],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "linear",
    },
  },
  hover: {
    rotate: 0,
    transition: { duration: 0.3 },
  },
};
