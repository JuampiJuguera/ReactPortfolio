import React from "react";
import "../styles/Menu.scss";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-div"></div>
      <div className="menu__container">
        <a className="menu__container-text" href="#home">
          HOME
        </a>
        <a className="menu__container-text" href="#about">
          ABOUT
        </a>
        <a className="menu__container-text" href="#projects">
          PROJECTS
        </a>
        <a className="menu__container-text" href="#contact">
          CONTACT
        </a>
      </div>
    </div>
  );
};

export { Menu };
