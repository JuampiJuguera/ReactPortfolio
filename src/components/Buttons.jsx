import React from "react";
import "../styles/Buttons.scss";

const Buttons = ({ size, label, url }) => {
  if (size === "M") {
    return (
      <a href={url}>
        <button className="btn__medium diagonal">{label}</button>
      </a>
    );
  }
  if (size === "S") {
    return (
      <a href={url}>
        <button className=" btn__small diagonal">{label}</button>
      </a>
    );
  }
};

export { Buttons };
