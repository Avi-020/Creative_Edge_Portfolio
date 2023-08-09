import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,
  StyledAbout,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
import uibg from "../../assets/icons/uibg.svg";

const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true">
          About Start-Up
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
          {/* <AboutImage style={{width:"30vw",height:"50vw"}} src={uibg} /> */}
        <AboutDetailsContainer>
          <StyledParagraph>
            At Creative Edge&sbquo; we are passionate about merging art with technology to deliver unparalleled digital experiences. With a team of highly skilled designers and developers&sbquo; we have established ourselves as industry leaders in UI/UX design&sbquo; graphic design&sbquo; and web development.
          </StyledParagraph>

          <StyledParagraph>
            Our mission is to empower businesses by providing them with the tools to make a lasting impact in the digital realm. We believe that exceptional design combined with seamless functionality can transform brands and propel them towards success. We are committed to collaborating closely with our clients&sbquo; understanding their unique goals, and delivering tailored solutions that exceed their expectations.
          </StyledParagraph>
          <StyledParagraph>
            When you partner with Creative Edge&#63;


          </StyledParagraph>
      
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;
