import React from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { initiateAnimation } from "../components/animations";

const Subtitle = ({ label1, label2, span, animation }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  initiateAnimation(control, inView);
  return (
    <StyledSubtitle
      as={motion.p}
      ref={ref}
      variants={animation}
      initial="hidden"
      animate={control}
    >
      {label1} <SpanSubtitle className="contact-text2">{span}</SpanSubtitle>
      {label2}
    </StyledSubtitle>
  );
};

const StyledSubtitle = styled.p`
  text-align: center;
  margin-top: 2rem;
  font-size: 1.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.whiteColor};
`;

const SpanSubtitle = styled.span`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.secondaryColor};
`;

export { Subtitle };
