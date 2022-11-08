import React from "react";
import "../styles/Projects.scss";

const ProjectList = ({ projects }) => {
  return (
    <div className="projects__container-images">
      {projects &&
        projects.map((project) => {
          return (
            <div className="img__container" key={project.title}>
              <img src={project.image} alt={project.title} />
              <div className="img__overlay">
                <div className="img__overlay-title">{project.title}</div>
                <p className="img__overlay-text">{project.skills.join("-")}</p>
                <div className="img__overlay-footer">
                  <p>
                    <button className="img__overlay-btn">ABOUT THIS</button>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export { ProjectList };
