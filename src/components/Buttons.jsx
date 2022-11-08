import React from "react";
import "../styles/Buttons.scss";

const Buttons = ({ size, label }) => {
  if (size === "M") {
    return <button className="btn__medium diagonal">{label}</button>;
  }
  if (size === "S") {
    return <button className=" btn__small diagonal">{label}</button>;
  }
};

export { Buttons };
