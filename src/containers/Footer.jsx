import React from "react";
import styled from "styled-components";

export const footerIcons = [
  {
    icon: "devicon-linkedin-plain",
    href: "https://www.linkedin.com/in/juan-pablo-juguera-971a37241/",
  },
  { icon: "devicon-github-original", href: "https://github.com/JuampiJuguera" },
  { icon: "devicon-twitter-original", href: "" },
];

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        {footerIcons.map((footerIcons, index) => (
          <a key={index} href={footerIcons.href} target="_blank">
            <FooterIcon className={footerIcons.icon}></FooterIcon>
          </a>
        ))}
      </FooterContainer>
      <FooterText>@Copyright juampijuguera.dev all rights reserved</FooterText>
    </FooterSection>
  );
};

const FooterSection = styled.section`
  background-color: ${({ theme }) => theme.colors.darkGray2};
  width: 100%;
  height: 30vh;
`;

const FooterContainer = styled.div`
  height: 30vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & a {
    text-decoration: none;
  }
`;

const FooterText = styled.h3`
  color: ${({ theme }) => theme.colors.whiteColor};
  font-weight: 800;
  margin-top: -2em;
  text-align: center;
  @media only screen and (max-width: 768px) {
    margin-top: -2.5em;
  }
`;

const FooterIcon = styled.i`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: 5rem;
  margin: 0 3rem;
  transition: 0.5s all;
  &:hover {
    color: ${({ theme }) => theme.colors.whiteColor};
  }
  &.devicon-twitter-original {
    font-size: 4.5rem;
    width: 80px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 4rem;
    margin: 0 2rem;
    &.devicon-twitter-original {
      font-size: 3.5rem;
    }
  }
`;

export { Footer };
