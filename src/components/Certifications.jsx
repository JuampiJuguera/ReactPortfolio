import React from "react";
import { Button, ButtonSize, ButtonColor } from "./Button";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  initiateAnimation,
  rightToCenter,
  bottomToToP,
} from "../components/animations";
import styled from "styled-components";

const Certifications = ({ certificates }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const isMobile = window.innerWidth < 768;

  initiateAnimation(control, inView);

  return (
    <CertificationsArticle
      as={motion.article}
      ref={ref}
      variants={rightToCenter}
      initial="hidden"
      animate={control}
    >
      <CertificationsTitle>Certifications</CertificationsTitle>
      <CertificationsContainer>
        {certificates.map((skill) => (
          <CertificateContainer
            key={skill.title}
            as={motion.div}
            variants={bottomToToP}
            initial="hidden"
            animate="visible"
          >
            <CerificateSkill>
              <CertificateTitle>{skill.subtitle}</CertificateTitle>
              <CertificateSchool>{skill.school}</CertificateSchool>
            </CerificateSkill>
            <CertificateInformation>
              <CertificateSubtitle>{skill.title}</CertificateSubtitle>
              <Button
                size={isMobile ? ButtonSize["M"] : ButtonSize["B"]}
                color={ButtonColor["G"]}
                label={"CHECK CERTIFICATE"}
                url={skill.url}
                target={"_blank"}
              />
            </CertificateInformation>
          </CertificateContainer>
        ))}
      </CertificationsContainer>
    </CertificationsArticle>
  );
};

const CertificationsArticle = styled.article`
  margin-top: 4em;
  background-color: ${({ theme }) => theme.colors.lightGray};
  width: 50%;
  height: 751px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const CertificationsTitle = styled.h3`
  color: ${({ theme }) => theme.colors.whiteColor};
  font-size: 1.8rem;
  align-self: flex-start;
  margin-left: 1.8em;
  @media only screen and (max-width: 768px) {
    align-self: center;
    margin-left: 0;
  }
`;

const CertificationsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGray1};
  width: 90%;
  height: 90%;
  overflow: scroll;
  scrollbar-color: #6969dd #232328;
  &::-webkit-scrollbar {
    width: 1em;
  }

  &::-webkit-scrollbar-thumb {
    background: #232328;
  }

  &::-webkit-scrollbar-track {
    background: #000000;
  }
`;

const CertificateContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  width: 800px;
  height: 130px;
  margin: 2rem;
  border-radius: 1rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.whiteColor};
  @media only screen and (max-width: 768px) {
    width: 95%;
    height: 100px;
    margin: 0.8rem;
  }
`;

const CerificateSkill = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  float: left;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  height: 100%;
  border-radius: 15px 0 0 15px;
  width: 30%;
  @media only screen and (max-width: 768px) {
    float: left;
    height: 100%;
    border-radius: 15px 0 0 15px;
    width: 35%;
  }
`;

const CertificateTitle = styled.div`
  text-align: center;
  font-size: 1.3rem;
  @media only screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const CertificateSchool = styled.div`
  font-size: 0.8rem;
  @media only screen and (max-width: 768px) {
    font-size: 0.6rem;
  }
`;

const CertificateInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  & button {
    margin-top: 1.2em;
    margin-left: 19.3em;
  }
  @media only screen and (max-width: 768px) {
    & button {
      font-size: 0.8rem;
      margin-left: 2.5rem;
      margin-top: 0;
    }
  }
`;

const CertificateSubtitle = styled.div`
  font-size: 1.5rem;
  margin-left: 3rem;
  margin-top: 2.7rem;
  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 0.8rem;
    margin: 1.8rem 0.5rem 0.5rem;
  }
`;

export { Certifications };
