import React from "react";
import styled from "styled-components";

const ButtonGroup = ({ projectBtnList, projectSelected, onClick }) => {
  const handleOnClick = (btnName) => {
    onClick(btnName);
  };

  return (
    <ButtonGroupContainer>
      {projectBtnList.map((btnName) => (
        <ButtonGroupSkills
          key={btnName}
          className={
            projectSelected === btnName ? " btn-selected" : "btn-notSelected"
          }
          onClick={() => handleOnClick(btnName)}
        >
          {btnName}
        </ButtonGroupSkills>
      ))}
    </ButtonGroupContainer>
  );
};

const ButtonGroupContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 8rem;
`;

const ButtonGroupSkills = styled.button`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.whiteColor};
  border: none;
  width: 300px;
  height: 40px;
  font-size: 1.5rem;
  font-weight: 800;
  transition: all 0.5s;

  &.btn-selected {
    background-color: ${({ theme }) => theme.colors.primaryColor};
  }

  &.btn-notSelected {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }

  @media only screen and (max-width: 768px) {
    border: none;
    width: 30%;
    height: 30px;
    font-size: 0.8rem;
  }
`;

export { ButtonGroup };
