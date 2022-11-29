import React, { useState } from "react";
import styled from "styled-components";
import { menuTexts } from "./Menu";

const MenuMobile = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <StickyMobileMenu>
      <UpLineMenu />
      <MenuMobileBars>
        <i className="fa-solid fa-bars" onClick={() => toggleMenu()}></i>
      </MenuMobileBars>
      {openMenu ? (
        <MenuMobileContainer>
          {menuTexts.map((menuText, index) => (
            <MenuMobileText key={index} href={menuText.href}>
              {menuText.text}
            </MenuMobileText>
          ))}
        </MenuMobileContainer>
      ) : null}
    </StickyMobileMenu>
  );
};

const StickyMobileMenu = styled.nav`
  position: sticky;
  z-index: 100;
  top: 0;
  @media (min-width: 768px) {
    display: none;
  }
`;

const UpLineMenu = styled.div`
  width: 100%;
  height: 5px;
  background-color: ${({ theme }) => theme.colors.primaryColor};
`;

const MenuMobileBars = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.colors.lightGray};
  & i {
    padding: 0.1rem 1rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.whiteColor};
    font-size: 2rem;
  }
`;

const MenuMobileContainer = styled.div`
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.darkGray2};
`;

const MenuMobileText = styled.a`
  font-size: 1.3rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.whiteColor};
  margin: 0.4rem 1rem;
  font-weight: 800;
`;

export { MenuMobile };
