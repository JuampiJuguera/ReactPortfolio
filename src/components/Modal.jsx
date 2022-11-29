import React, { useState } from "react";
import { Button, ButtonSize, ButtonColor } from "./Button";
import styled from "styled-components";
import { motion } from "framer-motion";
import { scaleUp } from "../components/animations";

const Modal = ({ project, displayModal, setDisplayModal }) => {
  const [imagePosition, setImagePosition] = useState(0);

  const closeModal = (setDisplayModal, imagePosition, setImagePosition) => {
    setDisplayModal("hidden");
    setImagePosition(imagePosition - imagePosition);
  };

  const imageListNext = (imageList) => {
    const listLength = imageList.length - 1;
    listLength === imagePosition
      ? setImagePosition(0)
      : setImagePosition(imagePosition + 1);
  };

  const imageListBack = (imageList) => {
    const listLength = imageList.length - 1;
    imagePosition === 0
      ? setImagePosition(listLength)
      : setImagePosition(imagePosition - 1);
  };

  return (
    <ModalArticle
      id="modal"
      className={displayModal}
      as={motion.article}
      variants={scaleUp}
      initial="hidden"
      animate="visible"
    >
      <ModalContainer>
        <ImageContainer>
          <i
            className="fa-solid fa-caret-left"
            onClick={() => imageListBack(project.imageList)}
          ></i>
          <img src={project.imageList[imagePosition]}></img>
          <i
            className="fa-solid fa-xmark"
            onClick={() =>
              closeModal(setDisplayModal, imagePosition, setImagePosition)
            }
          ></i>
          <i
            className="fa-solid fa-caret-right"
            onClick={() => imageListNext(project.imageList)}
          ></i>
        </ImageContainer>
        <ModalTextContainer>
          <ModalTitle>{project.title}</ModalTitle>
          <ModalSubtitle>{project.subtitle}</ModalSubtitle>
          <ModalBar />
          <ModalDescription>{project.description}</ModalDescription>
          <ModalBtnContainer>
            <Button
              size={ButtonSize["VS"]}
              color={ButtonColor["P"]}
              label={"PAGE"}
              target={"_blank"}
              url={project.repo}
            />
            <Button
              size={ButtonSize["VS"]}
              color={ButtonColor["P"]}
              label={"REPO"}
              target={"_blank"}
              url={project.page}
            />
          </ModalBtnContainer>
        </ModalTextContainer>
      </ModalContainer>
    </ModalArticle>
  );
};

const ModalArticle = styled.article`
  &.visible {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &.hidden {
    display: none;
    opacity: 0;
  }
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
  width: 100%;
  height: 100vh;
`;

const ModalContainer = styled.div`
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.darkGray1};
  width: 40%;
  @media only screen and (max-width: 1300px) {
    width: 60%;
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;

const ImageContainer = styled.div`
  transition: all;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  & img {
    transition: all 2s;
    height: 50vh;
    width: 100%;
    border-radius: 15px 15px 0 0;
    @media only screen and (max-width: 768px) {
      height: 30vh;
    }
  }
  & i {
    cursor: pointer;
    font-size: 1.5rem;
  }
  & .fa-xmark {
    position: absolute;
    color: ${({ theme }) => theme.colors.whiteColor};
    padding: 0.6rem 1rem;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 0 15px 0 0;
    right: 0;
    top: 0;
  }

  & .fa-caret-left,
  .fa-caret-right {
    position: absolute;
    color: ${({ theme }) => theme.colors.whiteColor};
    padding: 0.6rem 1rem;
    background-color: ${({ theme }) => theme.colors.darkGray1};
    border-radius: 50%;
  }

  & .fa-caret-left {
    margin-left: 5px;
    left: 0;
  }

  & .fa-caret-right {
    margin-right: 5px;
    right: 0;
  }
`;

const ModalTextContainer = styled.div`
  color: ${({ theme }) => theme.colors.whiteColor};
  margin: 0.5rem 1rem;
`;

const ModalTitle = styled.h3`
  color: ${({ theme }) => theme.colors.secondaryColor};
  font-size: 1.8rem;
`;

const ModalSubtitle = styled.h4`
  margin-top: 0.4rem;
  font-weight: 300;
`;

const ModalBar = styled.div`
  margin-top: 0.2rem;
  height: 1px;
  width: 70%;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

const ModalDescription = styled.p`
  margin-top: 1rem;
`;

const ModalBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  & Button {
    &.purple {
      font-size: 1rem;
      margin-right: 1rem;
      border-radius: 15px;
    }
  }
`;

export { Modal };
