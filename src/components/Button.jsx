import React from "react";
import styled from "styled-components";
import classNames from "classnames";

export const ButtonSize = {
  B: "big",
  M: "medium",
  S: "small",
  VS: "verySmall",
};

export const ButtonColor = {
  P: "purple",
  G: "green",
};

const Button = ({ size, label, url, color, target }) => {
  return (
    <div>
      <a href={url} target={target}>
        <SizedButton className={classNames(size, color)}>{label}</SizedButton>
      </a>
    </div>
  );
};

const SizedButton = styled.button`
  cursor: pointer;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.whiteColor};
  border: none;

  //Colors

  &.green {
    padding: 0.3rem;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
  }

  &.purple {
    margin: 1.1rem auto;
    font-size: 1.5rem;
    position: relative;
    line-height: 50px;
    background: ${({ theme }) => theme.colors.secondaryColor};
    overflow: hidden;
    z-index: 1;
    padding: 0px;
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 500%;
      height: 1000%;
      background: ${({ theme }) => theme.colors.secondaryColor2};
      z-index: -1;
      transform-origin: 0% 0%;
      transform: translateX(calc(20% - 25px)) translateY(10%) rotate(-45deg);
      transform: translateY(10%) translateX(16%) rotate(-45deg);
      transition: transform 0.3s;
    }
    &:hover::after {
      transform: translateY(10%) translateX(-25px) rotate(-45deg);
    }
  }

  //sizes

  &.big {
    width: 240px;
  }
  &.medium {
    width: 150px;
  }
  &.small {
    width: 120px;
  }
  &.verySmall {
    width: 80px;
  }
`;

export { Button };
