import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { opacity, initiateAnimation } from "../components/animations";
import "../styles/Skills.scss";

const skillClassName = [
  "devicon-html5-plain",
  "devicon-css3-plain",
  "devicon-sass-original",
  "devicon-javascript-plain",
  "devicon-git-plain",
  "devicon-react-original",
  "devicon-webpack-plain",
  "devicon-typescript-plain",
  "devicon-firebase-plain",
];

const Skills = ({ skillBtnList, skillSelected, onClick }) => {
  const handleOnClick = (btnName) => {
    onClick(btnName);
  };
  const control = useAnimation();
  const [ref, inView] = useInView();

  initiateAnimation(control, inView);
  return (
    <div className="skills__container">
      {skillClassName.map((skillIcon, i) => (
        <motion.i
          ref={ref}
          variants={opacity}
          initial="hidden"
          animate={control}
          key={skillIcon}
          className={`${skillIcon} ${
            skillSelected === skillBtnList[i] ? `active${i}` : ""
          }`}
          onClick={() => handleOnClick(skillBtnList[i])}
        />
      ))}
    </div>
  );
};

export { Skills };
