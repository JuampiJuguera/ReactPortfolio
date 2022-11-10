import React, { useState } from "react";
import { IconsBackground } from "./iconsBackground";
import "../styles/Background.scss";

//Solo lo uso para calcular la cantidad de filas con la altura de la pagina, me resulta innecesario hacerlo con las columnas para el ancho

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
    <div className="background">
      <div className="background__container">{generateIconRows()}</div>
    </div>
  );
};

export { Background };
