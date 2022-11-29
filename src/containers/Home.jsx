import React from "react";
import { Background } from "../components/Background";
import { Button, ButtonSize, ButtonColor } from "../components/Button.jsx";
import styled from "styled-components";

const NAME = "Juan Pablo Juguera";

//Component

const Home = () => {
  return (
    <HomeSection id="home">
      <HomeContainer>
        <HomeTextPrimary>Hi! </HomeTextPrimary>
        <HomeTextSecondary>I'm {NAME}</HomeTextSecondary>
        <HomeTextPrimary> FRONTEND DEVELOPER</HomeTextPrimary>
        <Button
          size={ButtonSize["B"]}
          color={ButtonColor["P"]}
          label={"DISCOVER"}
          url={"#about"}
        ></Button>
      </HomeContainer>
      <Background />
    </HomeSection>
  );
};

//Style

const HomeSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomeContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: -3em;
  z-index: 2;
`;

const HomeTextPrimary = styled.p`
  color: ${({ theme }) => theme.colors.primaryColor};
  font-size: 2rem;
  font-weight: 800;
`;

const HomeTextSecondary = styled.span`
  color: ${({ theme }) => theme.colors.whiteColor};
  font-size: 2rem;
  font-weight: 800;
  margin: 3px 0;
`;

export { Home };
