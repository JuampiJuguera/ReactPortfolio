import { useEffect } from "react";

export const initiateAnimation = (control, inView) => {
  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);
};

export const leftToCenter = {
  visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
  hidden: { opacity: 0, x: -300 },
};

export const leftToCenterDiv = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 1, duration: 1 },
  },
  hidden: { opacity: 0, x: -300 },
};

export const rightToCenter = {
  visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
  hidden: { opacity: 0, x: 300 },
};

export const rightToCenterDiv = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 1, duration: 1.5 },
  },
  hidden: { opacity: 0, x: 300 },
};

export const bottomToToP = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  hidden: { opacity: 0, y: 80 },
};

export const opacity = {
  visible: {
    opacity: 1,

    transition: { linear: "linear", duration: 1 },
  },
  hidden: { opacity: 0 },
};

export const scaleUp = {
  visible: { opacity: 1, scale: 1, transition: { duration: 2 } },
  hidden: { opacity: 0, scale: 0 },
};

export const backgroundAnimation1 = {
  visible: {
    x: 500,
    transition: {
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
      duration: 30,
    },
  },
  hidden: { x: -500 },
};

export const backgroundAnimation2 = {
  visible: {
    x: -500,
    transition: {
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
      duration: 30,
    },
  },
  hidden: { x: 500 },
};
