import React from "react";
import {
  CloseIcon,
  Icon,
  MobileMenuContainer,
  MobileMenuList,
  MobileMenuLink,
  MobileButton,
  MobileSocials,
  MobileSocial,
  MobileQuote,
  CloseText,
} from "../styles/MobileMenu.styled";

const MobileMenu = ({ isOpen, toggle }) => {
  return (
    <MobileMenuContainer isOpen={isOpen} toggle={toggle}>
      <Icon onClick={toggle}>
        <CloseText>Close</CloseText>
        <CloseIcon />
      </Icon>
      <MobileMenuList>
        <MobileMenuLink to="home" onClick={toggle}>
          Home
        </MobileMenuLink>
        <MobileMenuLink to="about" onClick={toggle}>
          About
        </MobileMenuLink>
        <MobileMenuLink to="projects" onClick={toggle}>
          Services
        </MobileMenuLink>

        <MobileMenuLink to="footer" onClick={toggle}>
          Contact
        </MobileMenuLink>


        <MobileButton
          href="mailto:creativeedge0020@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="black"
              >
                <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" />
              </svg>
              get in touch
            </span>
          </span>
        </MobileButton>
      </MobileMenuList>
      <MobileSocials>
        <MobileSocial
          href="mailto:creativeedge0020@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gmail
        </MobileSocial>

        <MobileSocial
          href="https://www.instagram.com/creativeedgetech/?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </MobileSocial>

        {/* <MobileSocial
          href="https://www.behance.net/utkarsh-shinge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Behance
        </MobileSocial> */}

        <MobileSocial
          href="https://www.linkedin.com/in/creativeedge-tech"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </MobileSocial>
      </MobileSocials>
    </MobileMenuContainer>
  );
};

export default MobileMenu;
