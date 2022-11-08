import React from "react";

const MenuMobile = () => {
  return (
    <div className="menu__mobile">
      <div className="menu-div"></div>
      <div className="menu__mobile-bars">
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className="mobile__container">
        <a className="mobile__container-text" href="#home">
          HOME
        </a>
        <a className="mobile__container-text" href="#about">
          ABOUT
        </a>
        <a className="mobile__container-text" href="#projects">
          PROJECTS
        </a>
        <a className="mobile__container-text" href="#contact">
          CONTACT
        </a>
      </div>
    </div>
  );
};

export { MenuMobile };
