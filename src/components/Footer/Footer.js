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
          href="mailto:shingeutkarsh3919@gmail.com"
          data-hover="Let's talk!"
        >
          Need a developer?
        </FooterBigLink>
      </FooterBigLinkContainer>
      <FooterContacts id="footer">
        <FooterContact>
          <ContactHeader>Contact Us</ContactHeader>
          <ContactLink href="tel:+91 8378853919">+91 8378853919 / 9112128900</ContactLink>
        </FooterContact>
        <FooterContact>
          <ContactHeader>Social Links</ContactHeader>{" "}
          <FooterSocials>
            <ContactLink
              href="https://instagram.com/_creative_edge__?igshid=ZDc4ODBmNjlmNQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </ContactLink>

            <ContactLink
              href="https://www.behance.net/utkarsh-shinge"
              target="_blank"
              rel="noopener noreferrer"
            >
              Behance
            </ContactLink>

            <ContactLink
              href="https://www.linkedin.com/in/utkarsh-shinge/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </ContactLink>

          </FooterSocials>
        </FooterContact>
        <FooterContact>
          <ContactHeader>Let's grab a coffee.</ContactHeader>
          <ContactLink href="mailto:shingeutkarsh3919@gmail.com">
            shingeutkarsh3919@gmail.com
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
