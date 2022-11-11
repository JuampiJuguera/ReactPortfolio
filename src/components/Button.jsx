import React from "react";
import "../styles/Buttons.scss";

const buttonSizes = {
  M: "btn__medium diagonal",
  S: "btn__small diagonal",
};

const Button = ({ size, label, url }) => {
  return (
    <a href={url}>
      <button className={buttonSizes[size]}>{label}</button>
    </a>
  );
};

export { Button };
