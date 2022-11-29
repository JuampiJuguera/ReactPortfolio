import React from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { initiateAnimation } from "../components/animations";

const Title = ({ label, animation1, animation2 }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const isMobile = window.innerWidth < 768;

  initiateAnimation(control, inView);
  if (!isMobile) {
    return (
      <>
        <StyledTitle
          as={motion.div}
          ref={ref}
          variants={animation1}
          initial="hidden"
          animate={control}
        >
          {label}
        </StyledTitle>
        <UnderlineBar
          as={motion.div}
          ref={ref}
          variants={animation2}
          initial="hidden"
          animate={control}
        />
      </>
    );
  }
  return (
    <>
      <StyledTitle>{label}</StyledTitle>
      <UnderlineBar />
    </>
  );
};

const StyledTitle = styled.div`
  padding-top: 1em;
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  color: ${({ theme }) => theme.colors.primaryColor};
  @media only screen and (max-width: 768px) {
  }
`;

const UnderlineBar = styled.div`
  width: 7rem;
  margin: auto;
  height: 5px;
  background-color: ${({ theme }) => theme.colors.primaryColor};
`;

export { Title };
