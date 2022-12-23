import React from "react";
import { Button, ButtonSize, ButtonColor } from "./Button.jsx";
import image from "../assets/KnowMe.png";
import cv from "../assets/cv.pdf";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { initiateAnimation, leftToCenter } from "../components/animations";
import styled from "styled-components";

const KnowMe = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  initiateAnimation(control, inView);
  return (
    <KnowmeContainer
      as={motion.article}
      ref={ref}
      variants={leftToCenter}
      initial="hidden"
      animate={control}
    >
      <KnowMeUpperLine />
      <img src={image} />
      <KnowMeSubtitle>Know me better</KnowMeSubtitle>
      <KnowMeText>
        I'm a self-taught Front End developer based in Buenos Aires ~ Argentina
        currently looking for a job in the IT area, I'm passionate about
        designing my own websites and then making them work. I have plans to
        deepen my knowledge in programming, my next step is to become a
        Fullstack developer.
      </KnowMeText>
      <Button
        size={ButtonSize["B"]}
        color={ButtonColor["P"]}
        label={"Download CV"}
        url={cv}
        target={"_blank"}
      ></Button>
    </KnowmeContainer>
  );
};

const KnowmeContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 75.5%;
  background-color: ${({ theme }) => theme.colors.darkGray1};
  width: 50%;
  & img {
    margin-top: 3rem;
  }
  @media only screen and (max-width: 1340px) {
    & img {
      width: 400px;
    }
  }
  @media only screen and (max-width: 768px) {
    justify-content: center;
    text-align: center;
    width: 100%;
    padding-bottom: 1rem;
    & img {
      width: 60%;
    }
  }
`;

const KnowMeUpperLine = styled.div`
  width: 100%;
  height: 1.2rem;
  margin-top: 4rem;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  @media only screen and (max-width: 768px) {
    margin-top: 0;
  }
`;

const KnowMeSubtitle = styled.h3`
  margin: 1.2rem 0 2rem 0;
  color: ${({ theme }) => theme.colors.secondaryColor};
  font-size: 1.8rem;
`;

const KnowMeText = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.whiteColor};
  margin-bottom: 2rem;
  font-size: 1.3rem;
  padding: 0 4rem;
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1rem;
  }
`;

export { KnowMe };
