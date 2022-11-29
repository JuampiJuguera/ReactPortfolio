import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const menuTexts = [
  { text: "HOME", href: "#home" },
  { text: "ABOUT", href: "#about" },
  { text: "PROJECTS", href: "#projects" },
  { text: "CONTACT", href: "#contact" },
];

const Menu = () => {
  return (
    <StickyNav>
      <UpLineMenu />
      <MenuContainer>
        {menuTexts.map((menuText, index) => (
          <li key={index}>
            <MenuText href={menuText.href}>{menuText.text}</MenuText>
          </li>
        ))}
      </MenuContainer>
    </StickyNav>
  );
};

const StickyNav = styled.nav`
  background-color: ${({ theme }) => theme.colors.lightGray};
  height: 2.2rem;
  position: sticky;
  z-index: 100;
  top: 0;
  @media (max-width: 768px) {
    display: none;
  }
`;

const UpLineMenu = styled.div`
  width: 100%;
  height: 5px;
  background-color: ${({ theme }) => theme.colors.primaryColor};
`;

const MenuContainer = styled.ul`
  list-style-type: none;
  margin: 3px 15em 0 0;
  display: flex;
  justify-content: flex-end;
`;

const MenuText = styled.a`
  color: ${({ theme }) => theme.colors.whiteColor};
  text-decoration: none;
  font-size: 1.3rem;
  margin-left: 2rem;
  font-weight: 800;
  &:hover {
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`;
export { Menu };
