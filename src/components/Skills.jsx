import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { opacity, initiateAnimation } from "../components/animations";
import styled from "styled-components";

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
    <SkillsContainer>
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
    </SkillsContainer>
  );
};

export { Skills };

const SkillsContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  & i {
    color: ${({ theme }) => theme.colors.lightGray};
    font-size: 64px;
    margin-right: 0.8em;
    margin: 1.5rem 0.5em 0 0.5em;
    cursor: pointer;
    font-size: 5.5rem;
    transition: all 1s;
  }
  .devicon-html5-plain:hover,
  .active0 {
    color: #db6532;
  }

  .devicon-css3-plain:hover,
  .active1 {
    color: #3872ca;
  }

  .devicon-sass-original:hover,
  .active2 {
    color: #e892ea;
  }

  .devicon-javascript-plain:hover,
  .active3 {
    color: #d2d443;
  }

  .devicon-git-plain:hover,
  .active4 {
    color: #db6532;
  }

  .devicon-react-original:hover,
  .active5 {
    color: #8cdadf;
  }

  .devicon-webpack-plain:hover,
  .active6 {
    color: #3872ca;
  }

  @media only screen and (max-width: 768px) {
    & i {
      font-size: 4.6rem;
    }
  }
`;
