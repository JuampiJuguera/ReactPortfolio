import React from "react";
import { Home } from "./containers/Home";
import { About } from "./containers/About";
import { Menu } from "./components/Menu";
import { Projects } from "./containers/Projects";
import { Contact } from "./containers/Contact";
import { Footer } from "./containers/Footer";
import { MenuMobile } from "./components/MenuMobile";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home></Home>
      <Menu></Menu>
      <MenuMobile></MenuMobile>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </ThemeProvider>
  );
};

const theme = {
  colors: {
    whiteColor: "#fcfcfc",
    darkGray1: "#131316",
    darkGray2: "#0d0d0f",
    lightGray: "#303036",
    primaryColor: "#6c9a8b",
    secondaryColor: "#6457a6",
    secondaryColor2: "#4a407d",
  },
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: "inter";
    font-size: 16px;
    scroll-behavior: smooth;
  }
`;

export { App };
