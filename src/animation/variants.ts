export const fadeIn = (direction = "up") => {
  return {
    initial: {
      y: direction === "up" ? 40 : -60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 0.7,
      staggerChildren: 0.5,
    },
  },
};

export const hmWrapper = {
  initial: {
    y: -1000,
  },
  animate: {
    y: 0,
    transition: {
      delay: 2.6,
      duration: 0.8,
      type: "spring",
    },
  },
};

export const hm = {
  initial: {
    y: 0,
  },
  animate: {
    // y: [30, 0, 30],
    y: [20, 0, 20],
    transition: {
      duration: 1.6,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

export const wmWrapper = {
  initial: {
    y: -800,
  },
  animate: {
    y: 0,
    transition: {
      delay: 2,
      duration: 0.4,
      type: "spring",
    },
  },
};
// export const wm = {
//   initial: {
//     x: 0,
//   },
//   animate: (i) => ({
//     x: [20, 0, 20],
//     transition: {
//       delay: 2,
//       duration: 1 * i,
//       ease: "linear",
//       repeat: Infinity,
//     },
//   }),
// };
export const wm = {
  initial: {
    x: 0,
  },
  animate: {
    x: [20, 0, 20],
    transition: {
      duration: 3.6,
      ease: "linear",
      repeat: Infinity,
    },
  },
};
