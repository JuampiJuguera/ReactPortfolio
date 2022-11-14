import React, { useState } from "react";

const MenuMobile = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav className="menu__mobile menu__mobile-sticky">
      <div className="menu-div"></div>
      <div className="menu__mobile-bars">
        <i className="fa-solid fa-bars" onClick={() => toggleMenu()}></i>
      </div>
      {openMenu ? (
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
      ) : null}
    </nav>
  );
};

export { MenuMobile };
