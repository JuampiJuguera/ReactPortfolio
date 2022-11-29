import React from "react";
import { Button, ButtonSize, ButtonColor } from "./Button.jsx";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { initiateAnimation, scaleUp } from "../components/animations";

const ContactForm = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  initiateAnimation(control, inView);
  return (
    <FormContainer
      action="https://formsubmit.co/juampijuguera@gmail.com"
      method="POST"
      as={motion.form}
      ref={ref}
      variants={scaleUp}
      initial="hidden"
      animate={control}
    >
      <label name="name"></label>
      <SmallInput
        required
        type="name"
        id="name"
        name="name"
        placeholder="Enter your name"
      />
      <label name="email"></label>
      <SmallInput
        required
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
      />
      <label name="textbox"></label>
      <BigInput
        required
        type="textarea"
        id="textbox"
        name="textbox"
        placeholder="Enter your text"
      />
      <SubmitContainer>
        <Button
          size={ButtonSize["M"]}
          color={ButtonColor["P"]}
          label={"SEND"}
        />
        <input type="hidden" name="_captcha" value="false" />
      </SubmitContainer>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 30rem;
  margin: 3rem auto;
  @media only screen and (max-width: 768px) {
    width: 80%;
  }
`;

const SmallInput = styled.input`
  color: ${({ theme }) => theme.colors.whiteColor};
  transition: all 1s;
  padding: 0 10px;
  height: 2.5rem;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primaryColor};
  background-color: ${({ theme }) => theme.colors.darkGray2};
  margin-bottom: 1rem;
  &:focus {
    outline-style: none;
    box-shadow: 3px -135px 20px -111px rgba(0, 0, 0, 0.68) inset;
    -webkit-box-shadow: 3px -135px 20px -111px rgba(0, 0, 0, 0.68) inset;
    -moz-box-shadow: 3px -135px 20px -111px rgba(0, 0, 0, 0.68) inset;
  }
  @media only screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const BigInput = styled.textarea`
  transition: all 1s;
  color: ${({ theme }) => theme.colors.whiteColor};
  padding: 10px 10px;
  resize: none;
  background-color: ${({ theme }) => theme.colors.darkGray2};
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primaryColor};
  height: 8rem;
  margin-bottom: 1rem;
  &:focus {
    outline-style: none;
    box-shadow: 3px -135px 20px -111px rgba(0, 0, 0, 0.68) inset;
    -webkit-box-shadow: 3px -135px 20px -111px rgba(0, 0, 0, 0.68) inset;
    -moz-box-shadow: 3px -135px 20px -111px rgba(0, 0, 0, 0.68) inset;
  }
  @media only screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const SubmitContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export { ContactForm };
