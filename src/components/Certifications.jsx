import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { initiateAnimation, rightToCenter } from "../components/animations";
import "../styles/Certifications.scss";

const Certifications = ({ certificates }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  initiateAnimation(control, inView);

  return (
    <motion.article
      ref={ref}
      variants={rightToCenter}
      initial="hidden"
      animate={control}
      className="certifications"
    >
      <h3 className="certifications-title">Certifications</h3>
      <div className="certifications__container">
        {certificates.map((skill) => (
          <div key={skill.title} className="certificate bottomtop-animation1">
            <div className="certificate__skill">
              <div className="certificate__skill-title">{skill.subtitle}</div>
              <div className="certificate__skill-school">{skill.school}</div>
            </div>
            <div className="certificate__information">
              <div className="certificate__bar">
                <div className="certificate__bar-empty"></div>
                <div className="certificate__bar-fill"></div>
                <div className="certificate__bar-text">
                  {skill.percentage}% completed
                </div>
              </div>
              <div className="certificate__information-container">
                <div className="certificate__information-title">
                  {skill.title}
                </div>
                <button className="certificate__information-btn btn-active">
                  CERTIFICATE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.article>
  );
};

export { Certifications };
