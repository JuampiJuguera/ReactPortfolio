import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const initiateAnimation = (control, inView) => {
  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);
};

const leftToCenter = {
  visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
  hidden: { opacity: 0, x: -300 },
};

const leftToCenterDiv = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 1, duration: 1 },
  },
  hidden: { opacity: 0, x: -300 },
};

const rightToCenter = {
  visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
  hidden: { opacity: 0, x: 300 },
};

const rightToCenterDiv = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 1, duration: 1.5 },
  },
  hidden: { opacity: 0, x: 300 },
};

const opacity = {
  visible: {
    opacity: 1,

    transition: { linear: "linear", duration: 1 },
  },
  hidden: { opacity: 0 },
};

const scaleUp = {
  visible: { opacity: 1, scale: 1, transition: { duration: 2 } },
  hidden: { opacity: 0, scale: 0 },
};

export {
  initiateAnimation,
  scaleUp,
  rightToCenter,
  rightToCenterDiv,
  leftToCenter,
  leftToCenterDiv,
  opacity,
};
