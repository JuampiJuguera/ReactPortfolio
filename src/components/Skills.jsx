import React from "react";
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

  return (
    <div className="skills__container">
      {skillClassName.map((skillIcon, i) => (
        <i
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
