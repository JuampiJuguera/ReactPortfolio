import React, { useState } from "react";
import { KnowMe } from "../components/KnowMe";
import { Skills } from "../components/Skills";
import { Certifications } from "../components/Certifications";
import { Title } from "../components/Title";
import { Subtitle } from "../components/Subtitle";
import styled from "styled-components";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  initiateAnimation,
  rightToCenter,
  leftToCenter,
  leftToCenterDiv,
} from "../components/animations";

const skill = {
  Html: "Html",
  CSS: "CSS",
  Sass: "Sass",
  JavaScript: "JavaScript",
  Git: "Git",
  React: "React",
  Webpack: "Webpack",
  TypeScript: "TypeScript",
  Firebase: "Firebase",
};

const Html1 = {
  subtitle: "HTML fundaments",
  school: "FreeCodeCamp",
  percentage: "100",
  title: "Responsive Web Design",
  url: "https://www.freecodecamp.org/certification/fccac0905b8-dbe4-4ec6-b3e3-a0a57f32f9d7/responsive-web-design",
};

const Html2 = {
  subtitle: "HTML and CSS",
  school: "PLATZI",
  percentage: "100",
  title: "Frontend Developer Course",
  url: "https://platzi.com/p/juampijuguera/curso/2467-frontend-developer/diploma/detalle/",
};

const Html3 = {
  subtitle: "HTML and CSS",
  school: "PLATZI",
  percentage: "100",
  title: "Frontend Practical Course",
  url: "https://platzi.com/p/juampijuguera/curso/2477-frontend-developer-practico/diploma/detalle/",
};

const CSS1 = {
  subtitle: "CSS and Sass",
  school: "UDEMY",
  percentage: "100",
  title: "Advanced CSS and Sass",
  url: "",
};

const JS1 = {
  subtitle: "JavaScript Fundaments",
  school: "UDEMY",
  percentage: "100",
  title: "Complete JavaScript Course",
  url: "https://www.udemy.com/certificate/UC-7aad815b-3389-4ee1-9599-61978fc58268/",
};

const JS2 = {
  subtitle: "JavaScript Fundaments",
  school: "FreeCodeCamp",
  percentage: "100",
  title: "JS Algorithms and Data Structures",
  url: "https://www.freecodecamp.org/certification/fccac0905b8-dbe4-4ec6-b3e3-a0a57f32f9d7/javascript-algorithms-and-data-structures",
};

const JS3 = {
  subtitle: "JavaScript POO",
  school: "PLATZI",
  percentage: "100",
  title: "JS Basic POO course",
  url: "https://platzi.com/p/juampijuguera/curso/2332-javascript-poo/diploma/detalle/",
};

const JS4 = {
  subtitle: "JavaScript Asynchronism",
  school: "PLATZI",
  percentage: "100",
  title: "Course on Asynchronism",
  url: "https://platzi.com/p/juampijuguera/curso/3175-asincronismo-js/diploma/detalle/",
};

const JS5 = {
  subtitle: "JavaScript Asynchronism",
  school: "PLATZI",
  percentage: "100",
  title: "API REST Consumption",
  url: "https://platzi.com/p/juampijuguera/curso/2985-api/diploma/detalle/",
};

const JS6 = {
  subtitle: "JavaScript Asynchronism",
  school: "PLATZI",
  percentage: "100",
  title: "Practical API REST Consumption",
  url: "https://platzi.com/p/juampijuguera/curso/2986-api-practico/diploma/detalle/",
};

const JS7 = {
  subtitle: "JavaScript DOM",
  school: "PLATZI",
  percentage: "100",
  title: "DOM Manipulation Course",
  url: "https://platzi.com/p/juampijuguera/curso/2193-dom/diploma/detalle/",
};

const JS8 = {
  subtitle: "JavaScript Fundaments",
  school: "PLATZI",
  percentage: "100",
  title: "Closures and Scope with JS",
  url: "https://platzi.com/p/juampijuguera/curso/3213-javascript-closures-scope/diploma/detalle/",
};

const GIT1 = {
  subtitle: "GIT fundaments",
  school: "PLATZI",
  percentage: "100",
  title: "Profesional GIT and GITHUB",
  url: "",
};

const REACT1 = {
  subtitle: "REACT fundaments",
  school: "PLATZI",
  percentage: "100",
  title: "Profesional Use of Hooks",
  url: "",
};

const REACT2 = {
  subtitle: "REACT fundaments",
  school: "PLATZI",
  percentage: "100",
  title: "Introduction to REACT course",
  url: "https://platzi.com/p/juampijuguera/curso/2444-react/diploma/detalle/",
};

const REACT3 = {
  subtitle: "REACT fundaments",
  school: "PLATZI",
  percentage: "100",
  title: "Navigation with React Router",
  url: "https://platzi.com/p/juampijuguera/curso/3468-react-router/diploma/detalle/",
};

const REACT4 = {
  subtitle: "REACT fundaments",
  school: "PLATZI",
  percentage: "100",
  title: "Management of the State",
  url: "https://platzi.com/p/juampijuguera/curso/2597-react-estado/diploma/detalle/",
};

const REACT5 = {
  subtitle: "REACT fundaments",
  school: "PLATZI",
  percentage: "100",
  title: "React.js Hands-on Course",
  url: "https://platzi.com/p/juampijuguera/curso/2484-react-practico/diploma/detalle/",
};

const Webpack1 = {
  subtitle: "Webpack fundaments",
  school: "PLATZI",
  percentage: "100",
  title: "Webpack Course",
  url: "https://platzi.com/p/juampijuguera/curso/2242-webpack/diploma/detalle/",
};

const certificatesMap = {
  [skill.Html]: [Html2, Html3, Html1],
  [skill.CSS]: [Html2, Html3, CSS1],
  [skill.Sass]: [CSS1],
  [skill.JavaScript]: [JS1, JS2, JS8, JS4, JS5, JS6, JS7, JS3],
  [skill.Git]: [GIT1],
  [skill.React]: [REACT1, REACT2, REACT3, REACT4, REACT5],
  [skill.Webpack]: [Webpack1],
  [skill.TypeScript]: [],
  [skill.Firebase]: [],
  [skill.empty]: [],
};

const skillBtnList = [
  skill.Html,
  skill.CSS,
  skill.Sass,
  skill.JavaScript,
  skill.Git,
  skill.React,
  skill.Webpack,
  skill.TypeScript,
  skill.Firebase,
  skill.empty,
];

//Component

const About = () => {
  const [skillSelected, setSkillSelected] = useState(skill.empty);

  const control = useAnimation();
  const [ref, inView] = useInView();

  initiateAnimation(control, inView);

  const onClickSkillGroup = (skillName) => setSkillSelected(skillName);
  return (
    <AboutSection id="about">
      <Title
        label={"ABOUT ME"}
        animation1={leftToCenter}
        animation2={leftToCenterDiv}
      />
      <Subtitle
        animation={rightToCenter}
        label1={"Click any "}
        span={"skill "}
        label2={"to see certificates"}
      />
      <Skills
        skillBtnList={skillBtnList}
        skillSelected={skillSelected}
        onClick={onClickSkillGroup}
      ></Skills>
      <Wrapper>
        <KnowMe></KnowMe>
        <Certifications
          certificates={certificatesMap[skillSelected]}
        ></Certifications>
      </Wrapper>
    </AboutSection>
  );
};

const AboutSection = styled.section`
  overflow: hidden;
  width: 100%;
  height: 96%;
  background-color: ${({ theme }) => theme.colors.darkGray1};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export { About };
