import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { initiateAnimation, scaleUp } from "../components/animations";
import "../styles/Projects.scss";

const ProjectList = ({ projects }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);
  return (
    <motion.div
      ref={ref}
      variants={scaleUp}
      initial="hidden"
      animate={control}
      className="projects__container-images"
    >
      {projects &&
        projects.map((project) => {
          return (
            <div className="img__container" key={project.title}>
              <img src={project.image} alt={project.title} />
              <div className="img__overlay">
                <div className="img__overlay-title">{project.title}</div>
                <p className="img__overlay-text">{project.skills.join("-")}</p>
                <div className="img__overlay-footer">
                  <p>
                    <button className="img__overlay-btn">ABOUT THIS</button>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </motion.div>
  );
};

export { ProjectList };
