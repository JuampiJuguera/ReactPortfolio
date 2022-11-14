import React from "react";
import { Button } from "./Button.jsx";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { initiateAnimation, scaleUp } from "../components/animations";
import "../styles/Contact.scss";

const ContactForm = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  initiateAnimation(control, inView);
  return (
    <motion.form
      ref={ref}
      variants={scaleUp}
      initial="hidden"
      animate={control}
      className="contact__container"
    >
      <label name="name"></label>
      <input
        type="name"
        id="name"
        name="name"
        placeholder="Enter your name"
        className="contact__container-form"
      />
      <label name="email"></label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        className="contact__container-form"
      />
      <label name="textbox"></label>

      <textarea
        className="contact__container-text"
        type="textarea"
        id="textbox"
        name="textbox"
        placeholder="Enter your text"
      />
      <div className="btn__submit">
        <Button size={"S"} label={"SEND"} />
      </div>
    </motion.form>
  );
};

export { ContactForm };
