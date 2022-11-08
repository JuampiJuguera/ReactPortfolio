import React from "react";
import { Home } from "./containers/Home";
import { About } from "./containers/About";
import { Menu } from "./components/Menu";
import { Projects } from "./containers/Projects";
import { Contact } from "./containers/Contact";
import { Footer } from "./containers/Footer";
import { MenuMobile } from "./components/MenuMobile";

const App = () => {
  return (
    <React.Fragment>
      <Home></Home>
      <Menu></Menu>
      <MenuMobile></MenuMobile>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </React.Fragment>
  );
};

export { App };
