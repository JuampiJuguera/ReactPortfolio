import React, { useState } from "react";
import { ButtonGroup } from "../components/ButtonGroup";
import image2 from "../assets/Project1.png";

import Adogpi from "../assets/adogpi.png";
import Adogpi1 from "../assets/Adogpi1.png";
import Adogpi2 from "../assets/Adogpi2.png";
import Adogpi3 from "../assets/Adogpi3.png";

import tuarkMiniature from "../assets/tuark.png";
import tuark1 from "../assets/tuark1.png";
import tuark2 from "../assets/tuark2.png";
import tuark3 from "../assets/tuark3.png";

import task from "../assets/task.png";
import task1 from "../assets/task1.png";
import task2 from "../assets/task2.png";
import task3 from "../assets/task3.png";

import { Title } from "../components/Title";
import { ProjectList } from "../components/ProjectList";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Modal } from "../components/Modal.jsx";
import {
  initiateAnimation,
  rightToCenter,
  rightToCenterDiv,
} from "../components/animations";
import styled from "styled-components";

const Project = {
  All: "All",
  Javascript: "JavaScript",
  React: "React",
};

const adogPI = {
  miniature: Adogpi,
  imageList: [Adogpi1, Adogpi2, Adogpi3],
  title: "AdogPI",
  skills: [Project.Javascript],
  subtitle: "project for practical purposes",
  description:
    "A fun site where you can save dog images and upload your own photos about your dogs, it was created with the Dog API from dog.ceo",
  page: "https://github.com/JuampiJuguera/AdogPi",
  repo: "https://juampijuguera.github.io/AdogPi/#",
};

const yourDailyTasks = {
  miniature: task,
  imageList: [task1, task2, task3],
  title: "Your Daily Tasks",
  skills: [Project.Javascript, Project.React],
  subtitle: "project for practical purposes",
  description:
    "This page allows users to manage their tasks by adding items to their to-do list and marking them as completed when they are finished. This page is a useful tool for staying organized and keeping track of tasks.",
  page: "https://github.com/JuampiJuguera/TaskApp",
  repo: "https://juampijuguera.github.io/TaskApp/",
};

const tuark = {
  miniature: tuarkMiniature,
  imageList: [tuark1, tuark2, tuark3],
  title: "TUARK",
  skills: [Project.Javascript, Project.React],
  subtitle: "Clothes Fashion E-commerce / Under Construction",
  description:
    "This e-commerce site is designed for people who value practicality and functionality in their clothing, Built using React and integrated with Firebase for seamless data management, the website offers a fast and user-friendly shopping experience",
  page: "https://github.com/JuampiJuguera/TUARK",
  repo: "",
};

const projectMap = {
  [Project.All]: [adogPI, yourDailyTasks, tuark],
  [Project.Javascript]: [adogPI, yourDailyTasks, tuark],
  [Project.React]: [yourDailyTasks, tuark],
};

const projectBtnList = [Project.All, Project.Javascript, Project.React];

const Projects = () => {
  const [projectModal, setProjectModal] = useState(adogPI);
  const [displayModal, setDisplayModal] = useState("hidden");
  const [projectSelected, setProjectSelected] = useState(Project.All);
  const control = useAnimation();
  const [ref, inView] = useInView();

  initiateAnimation(control, inView);

  const onClickButtonGroup = (project) => setProjectSelected(project);

  return (
    <ProjectSection id="projects">
      <Modal
        project={projectModal}
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
      ></Modal>
      <ProjectContainer>
        <Title
          label={"PROJECTS"}
          animation1={rightToCenter}
          animation2={rightToCenterDiv}
        />
        <ButtonGroup
          projectBtnList={projectBtnList}
          projectSelected={projectSelected}
          onClick={onClickButtonGroup}
        />
        <ProjectList
          projects={projectMap[projectSelected]}
          setDisplayModal={setDisplayModal}
          setProjectModal={setProjectModal}
        />
      </ProjectContainer>
    </ProjectSection>
  );
};

const ProjectSection = styled.section`
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.darkGray1};
`;

const ProjectContainer = styled.div`
  width: 100%;
  height: 1280px;
  background-color: ${({ theme }) => theme.colors.darkGray2};
`;

export { Projects };
