import React from "react";
import { ContactForm } from "../components/ContactForm";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  initiateAnimation,
  rightToCenter,
  leftToCenter,
  leftToCenterDiv,
} from "../components/animations";
import "../styles/Contact.scss";

const Contact = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  initiateAnimation(control, inView);
  return (
    <section id="contact" className="contact">
      <motion.div
        ref={ref}
        variants={leftToCenter}
        initial="hidden"
        animate={control}
        className="contact-title"
      >
        CONTACT
      </motion.div>
      <motion.div
        ref={ref}
        variants={leftToCenterDiv}
        initial="hidden"
        animate={control}
        className="contact-div"
      ></motion.div>
      <motion.p
        ref={ref}
        variants={rightToCenter}
        initial="hidden"
        animate={control}
        className="contact-text"
      >
        Want to <span className="contact-text2">work</span> with me?
      </motion.p>
      <ContactForm />
    </section>
  );
};

export { Contact };
