import React from "react";
import { Background } from "../components/Background";
import { Button } from "../components/Button.jsx";
import "../styles/Global.scss";
import "../styles/Home.scss";

const NAME = "Juan Pablo Juguera";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home__container">
        <p className="home__text-primary">Hi! </p>
        <span className="home__text-secondary">I'm {NAME}</span>
        <p className="home__text-primary"> FRONTEND DEVELOPER</p>
        <Button size={"M"} label={"DISCOVER"} url={"#"}></Button>
      </div>
      <Background />
    </section>
  );
};

export { Home };
