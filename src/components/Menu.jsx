import React from "react";
import "../styles/Menu.scss";

const Menu = () => {
  return (
    <nav className="menu menu-sticky">
      <div className="menu-div"></div>
      <ul className="menu__container">
        <li>
          <a className="menu__container-text" href="#home">
            HOME
          </a>
        </li>
        <li>
          <a className="menu__container-text" href="#about">
            ABOUT
          </a>
        </li>
        <li>
          <a className="menu__container-text" href="#projects">
            PROJECTS
          </a>
        </li>
        <li>
          <a className="menu__container-text" href="#contact">
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
};

export { Menu };
