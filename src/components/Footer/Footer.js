import React from "react";
import {
  ArrowToTop,
  ContactHeader,
  ContactLink,
  Copyright,
  FooterArrowLine,
  FooterBigLink,
  FooterBigLinkContainer,
  FooterContact,
  FooterContacts,
  FooterLine,
  FooterSmallTitle,
  FooterSmallTitleWrapper,
  FooterSocials,
  Small,
  StyledFooter,
} from "../styles/Footer.styled";
import { animateScroll as scroll } from "react-scroll";

const toTop = () => {
  scroll.scrollToTop({ delay: 0, duration: 0 });
};

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <StyledFooter >
      <FooterSmallTitleWrapper>
        <FooterSmallTitle>get in touch</FooterSmallTitle>
      </FooterSmallTitleWrapper>

      <FooterBigLinkContainer>
        <FooterBigLink
          href="mailto:avipawar020@gmail.com"
          data-hover="Let's talk!"
        >
          Need a developer&#63;
        </FooterBigLink>
      </FooterBigLinkContainer>
      <FooterContacts id="footer">
        <FooterContact>
          <ContactHeader>Contact Us</ContactHeader>
          <ContactLink href="tel:+919067661322">  +91 9067661322 </ContactLink>
        </FooterContact>
        <FooterContact>
          <ContactHeader>Social Links</ContactHeader>{" "}
          <FooterSocials>
            <ContactLink
              href="https://www.instagram.com/creativeedgetech/?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </ContactLink>

            {/* <ContactLink
              href="https://www.behance.net/utkarsh-shinge"
              target="_blank"
              rel="noopener noreferrer"
            >
              Behance
            </ContactLink> */}

            <ContactLink
              href="https://www.linkedin.com/in/creativeedge-tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </ContactLink>

          </FooterSocials>
        </FooterContact>
        <FooterContact>
          <ContactHeader>Lets grab a coffee.</ContactHeader>
          <ContactLink href="mailto:creativeedge0020@gmail.com">
            creativeedge0020@gmail.com
          </ContactLink>
        </FooterContact>
      </FooterContacts>

      <FooterArrowLine>
        <FooterLine />
        <ArrowToTop title="Back to Top" onClick={toTop}></ArrowToTop>
      </FooterArrowLine>

      <Copyright>
        <small>
          &copy; Copyright {year},{" "}
          <Small
            target="_blank"
            rel="noopener noreferrer"
          >
            Creative Edge          </Small>
        </small>
      </Copyright>
    </StyledFooter>
  );
};

export default Footer;
