import React from "react";
import { Button } from "./Button.jsx";
import image from "../assets/KnowMe.png";
import "../styles/About.scss";

const KnowMe = () => {
  return (
    <article className="knowme">
      <div className="knowme-div"></div>
      <img className="about-image" src={image} />
      <h3 className="about-subtitle">Know me better</h3>
      <p className="about-text">
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
        lorem lorem lorem loremlorem lorem lorem lorem
      </p>
      <Button size={"M"} label={"Download CV"}></Button>;
    </article>
  );
};

export { KnowMe };
