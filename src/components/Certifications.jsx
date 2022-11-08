import React from "react";
import "../styles/Certifications.scss";

const Certifications = ({ certificates }) => {
  return (
    <article className="certifications">
      <h3 className="certifications-title">Certifications</h3>
      <div className="certifications__container">
        {certificates.map((skill) => (
          <div key={skill.title} className="certificate">
            <div className="certificate__skill">
              <div className="certificate__skill-title">{skill.subtitle}</div>
              <div className="certificate__skill-school">{skill.school}</div>
            </div>
            <div className="certificate__information">
              <div className="certificate__bar">
                <div className="certificate__bar-empty"></div>
                <div className="certificate__bar-fill"></div>
                <div className="certificate__bar-text">
                  {skill.percentage}% completed
                </div>
              </div>
              <div className="certificate__information-container">
                <div className="certificate__information-title">
                  {skill.title}
                </div>
                <button className="certificate__information-btn btn-active">
                  CERTIFICATE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export { Certifications };
