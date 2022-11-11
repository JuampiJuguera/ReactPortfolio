import React, { useState } from "react";
import { ButtonGroup } from "../components/ButtonGroup";
import image2 from "../assets/Project1.png";
import "../styles/Projects.scss";
import { ProjectList } from "../components/ProjectList";
import { Button } from "../components/Button";

const Project = {
  All: "All",
  Javascript: "JavaScript",
  React: "React",
};

const adogPI = {
  image: image2,
  title: "AdogPI",
  skills: [Project.Javascript],
};

const adogPI2 = {
  image: image2,
  title: "AdogPI2",
  skills: [Project.React],
};

const adogPI3 = {
  image: image2,
  title: "AdogPI3",
  skills: [Project.Javascript, Project.React],
};

const projectMap = {
  [Project.All]: [adogPI, adogPI2, adogPI3],
  [Project.Javascript]: [adogPI, adogPI3],
  [Project.React]: [adogPI2, adogPI3],
};

const projectBtnList = [Project.All, Project.Javascript, Project.React];

const Projects = () => {
  const [projectSelected, setProjectSelected] = useState(Project.All);

  const onClickButtonGroup = (project) => setProjectSelected(project);

  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <div className="projects-title">PROJECTS</div>
        <div className="projects-div"></div>
        <ButtonGroup
          projectBtnList={projectBtnList}
          projectSelected={projectSelected}
          onClick={onClickButtonGroup}
        ></ButtonGroup>
        <ProjectList projects={projectMap[projectSelected]} />
      </div>
      <div className="projects__container-end"></div>
    </section>
  );
};

export { Projects };
