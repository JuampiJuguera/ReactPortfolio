import React from "react";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__container">
        <i className="devicon-linkedin-plain footer-icon"></i>
        <i className="devicon-github-original footer-icon"></i>
        <i className="devicon-twitter-original footer-icon"></i>
      </div>
      <h3 className="footer-text">
        @Copyright juampijuguera.dev all rights reserved
      </h3>
    </section>
  );
};

export { Footer };
