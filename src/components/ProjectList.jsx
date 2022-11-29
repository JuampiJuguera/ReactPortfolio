import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { scaleUp } from "../components/animations";
import { Button, ButtonSize, ButtonColor } from "./Button";
import styled from "styled-components";

const ProjectList = ({ projects, setDisplayModal, setProjectModal }) => {
  const setProjectData = (project) => {
    setDisplayModal("visible");
    setProjectModal(project);
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);
  return (
    <ProjectContainer
      as={motion.div}
      ref={ref}
      variants={scaleUp}
      initial="hidden"
      animate={control}
    >
      {projects &&
        projects.map((project) => {
          return (
            <ImageContainer key={project.title}>
              <img src={project.miniature} alt={project.title} />
              <ImageOverlay>
                <OverlayTitle>{project.title}</OverlayTitle>
                <OverlayText>{project.skills.join("-")}</OverlayText>
                <OverlayFooter onClick={() => setProjectData(project)}>
                  <Button
                    size={ButtonSize["S"]}
                    color={ButtonColor["G"]}
                    label={"ABOUT THIS"}
                  />
                </OverlayFooter>
              </ImageOverlay>
            </ImageContainer>
          );
        })}
    </ProjectContainer>
  );
};

const ProjectContainer = styled.div`
  display: flex;
  width: 70%;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
  @media only screen and (max-width: 768px) {
    margin-top: -5rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 300px;
  & img {
    display: block;
    width: 100%;
    height: 200px;
  }
`;

const ImageOverlay = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.whiteColor};
  background: rgba(0, 0, 0, 0.75);
  opacity: 0;
  transition: opacity 0.25s;
  & > * {
    transform: translateY(20px);
    transition: transform 0.25s;
  }
  &:hover {
    opacity: 1;
    transform: translateY(0);
  }
`;

const OverlayTitle = styled.div`
  margin-top: -2rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

const OverlayText = styled.p`
  text-shadow: 2px 2px 8px #000;
  text-align: center;
  font-size: 1em;
  color: ${({ theme }) => theme.colors.secondaryColor};
`;

const OverlayFooter = styled.div`
  margin-top: 3.5rem;
  font-size: 10px;
  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.whiteColor};
  }
`;

export { ProjectList };
