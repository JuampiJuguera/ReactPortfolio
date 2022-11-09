import React from "react";
import "../styles/Buttons.scss";

const Buttons = ({ size, label, url }) => {
  if (size === "M") {
    return (
      <button className="btn__medium diagonal">
        <a href={url}>{label}</a>
      </button>
    );
  }
  if (size === "S") {
    return (
      <button className=" btn__small diagonal">
        <a href={url}>{label}</a>
      </button>
    );
  }
};

export { Buttons };
