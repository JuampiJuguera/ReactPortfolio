import React from "react";
import { ContactForm } from "../components/ContactForm";
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

const Contact = () => {
  const control = useAnimation();
  const [inView] = useInView();

  initiateAnimation(control, inView);
  return (
    <ContactSection id="contact">
      <ContactTriangle />
      <Title
        animation1={leftToCenter}
        animation2={leftToCenterDiv}
        label={"CONTACT"}
      />
      <Subtitle
        label1={"Want to "}
        span={"work"}
        label2={" with me?"}
        animation={rightToCenter}
      />
      <ContactForm />
    </ContactSection>
  );
};

const ContactSection = styled.section`
  overflow: hidden;
  width: 100%;
  height: 1080;
  padding-bottom: 50px;
  background-color: ${({ theme }) => theme.colors.darkGray1};
`;

const ContactTriangle = styled.div`
  margin-bottom: -250px;
  height: 505px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.darkGray2};
  clip-path: polygon(50% 45%, 0 0, 100% 0);
`;

export { Contact };
