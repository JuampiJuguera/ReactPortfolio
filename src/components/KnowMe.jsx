import React, { useEffect } from "react";
import { Button } from "./Button.jsx";
import image from "../assets/KnowMe.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { initiateAnimation, leftToCenter } from "../components/animations";
import "../styles/About.scss";

const KnowMe = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  initiateAnimation(control, inView);
  return (
    <motion.article
      ref={ref}
      variants={leftToCenter}
      initial="hidden"
      animate={control}
      className="knowme"
    >
      <div className="knowme-div "></div>
      <img className="about-image" src={image} />
      <h3 className="about-subtitle">Know me better</h3>
      <p className="about-text">
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
        lorem lorem lorem loremlorem lorem lorem lorem
      </p>
      <Button size={"M"} label={"Download CV"}></Button>
    </motion.article>
  );
};

export { KnowMe };
