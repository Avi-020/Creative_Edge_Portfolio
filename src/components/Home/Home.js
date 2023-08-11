import React from "react";
import { StyledButton } from "../styles/Button.styled";
import {
  StyledButtonsContainer,
  StyledHome,
  Line,
  Greeting,
  Social,
  Socials,
  Quote,
} from "../styles/Home.styled";
import "./style.css";
import projectIcon from "../../assets/icons/project-icon.svg";
import aboutIcon from "../../assets/icons/about-me.svg";
import { IconContext } from "react-icons";
import { GrLinkedinOption } from "react-icons/gr";
import { FaBehance, FaEnvelope, FaInstagram } from "react-icons/fa";

const Home = () => {
  let today = new Date(),
    hour = today.getHours();

  return (
    <IconContext.Provider value={{ size: "1rem" }}>
      <StyledHome id="home">

        <div class="main">
          <h1>This is purely <div class="roller">
            <span id="rolltext"> Website Devlopment  Mobile Applications
           
             UI UX & Graphic Design<br /></span>
          </div>
          </h1>

        </div>

       
        <StyledButtonsContainer>
          <StyledButton
            icon={projectIcon}
            to="projects"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-50}
          >
            <span>Services</span>
          </StyledButton>
          <StyledButton
            icon={aboutIcon}
            secondary="true"
            content="B"
            to="footer"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-50}
          >
            <span>Contact Us</span>
          </StyledButton>
        </StyledButtonsContainer>
        <Line />
        <Greeting>
          Have a Great
          <span>
            {/* {hour < 12 ? " morning" : hour < 18 ? " afternoon" : " evening"} */}
            {hour < 12 ? " Morning" : hour < 15 ? " Afternoon" : " Evening"}
          </span>
          .
        </Greeting>
        <Socials>
          <Social
            href="mailto:creativeedge0105@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </Social>

          <Social
            href="https://www.instagram.com/creativeedgetech/?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </Social>

          <Social
          href="https://www.behance.net/utkarsh-shinge"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaBehance />
        </Social>

          <Social
            href="https://www.linkedin.com/in/utkarsh-shinge/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrLinkedinOption />
          </Social>
        </Socials>
        <Quote>Turning Visions Into Brands</Quote>
      </StyledHome>
    </IconContext.Provider>
  );
};

export default Home;
