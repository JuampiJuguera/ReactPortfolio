import React, { useState } from "react";
import { ButtonGroup } from "../components/ButtonGroup";
import image2 from "../assets/Project1.png";
import Adogpi1 from "../assets/Adogpi.png";
import Adogpi2 from "../assets/Adogpi1.png";
import Adogpi3 from "../assets/Adogpi2.png";
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
  miniature: Adogpi1,
  imageList: [Adogpi1, Adogpi2, Adogpi3],
  title: "AdogPI",
  skills: [Project.Javascript],
  subtitle: "project for practical purposes",
  description:
    "A fun site where you can save dog images and upload your own photos about your dogs, it was created with the Dog API from dog.ceo",
  page: "https://github.com/JuampiJuguera/AdogPi",
  repo: "https://juampijuguera.github.io/AdogPi/#",
};

const adogPI2 = {
  miniature: image2,
  imageList: [Adogpi1, Adogpi2, Adogpi3],
  title: "esto no es adogpi",
  skills: [Project.Javascript],
  subtitle: "project for practical purposes",
  description:
    "A fun site where you can save dog images and upload your own photos about your dogs, it was created with the Dog API from dog.ceo",
  page: "https://github.com/JuampiJuguera/AdogPi",
  repo: "https://juampijuguera.github.io/AdogPi/#",
};

const adogPI3 = {
  miniature: Adogpi1,
  imageList: [Adogpi1, Adogpi2, Adogpi3],
  title: "AdogPI3",
  skills: [Project.Javascript],
  subtitle: "project for practical purposes",
  description:
    "A fun site where you can save dog images and upload your own photos about your dogs, it was created with the Dog API from dog.ceo",
  page: "https://github.com/JuampiJuguera/AdogPi",
  repo: "https://juampijuguera.github.io/AdogPi/#",
};

const projectMap = {
  [Project.All]: [adogPI, adogPI2, adogPI3],
  [Project.Javascript]: [adogPI, adogPI3],
  [Project.React]: [adogPI2, adogPI3],
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
