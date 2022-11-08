import React from "react";

const ButtonGroup = ({ projectBtnList, projectSelected, onClick }) => {
  const handleOnClick = (btnName) => {
    onClick(btnName);
  };

  return (
    <div className="projects__container-btns">
      {projectBtnList.map((btnName) => (
        <button
          key={btnName}
          className={
            projectSelected === btnName
              ? "skill-btn btn-selected"
              : "skill-btn btn-notSelected"
          }
          onClick={() => handleOnClick(btnName)}
        >
          {btnName}
        </button>
      ))}
    </div>
  );
};

export { ButtonGroup };
