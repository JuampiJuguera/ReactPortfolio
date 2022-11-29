import React, { useState } from "react";
import { IconsBackground } from "./iconsBackground";
import styled from "styled-components";

const ICON_SIZE = 128;

const calculateIconsRows = (screenSize) => {
  const iconsQuantity = Math.ceil(screenSize / ICON_SIZE);
  return iconsQuantity;
};

const Background = () => {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  const resizeHeight = () => {
    setScreenHeight(window.innerHeight);
  };

  const generateIconRows = () => {
    window.addEventListener("resize", resizeHeight, false);
    let rows = [];
    const rowsQuantity = calculateIconsRows(screenHeight);
    for (let i = 0; i < rowsQuantity; i++) {
      rows.push(<IconsBackground key={i} />);
    }
    return rows;
  };

  return (
    <AnimatedBackground>
      <div className="background__container">{generateIconRows()}</div>
    </AnimatedBackground>
  );
};

const AnimatedBackground = styled.div`
  z-index: 1;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.darkGray1};
  white-space: nowrap;
  overflow: hidden;
`;

export { Background };
