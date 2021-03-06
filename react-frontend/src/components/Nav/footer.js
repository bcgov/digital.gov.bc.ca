import React from 'react';
import { FooterStyled, FooterContainer } from '../StyleComponents/pageContent';
import {
  FooterLink,
  FooterLinkInternal,
  FooterListItem,
  FooterUL,
} from '../StyleComponents/htmlTags';

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <FooterUL>
          <FooterListItem>
            <FooterLinkInternal to="/">Home</FooterLinkInternal>
          </FooterListItem>
          <FooterListItem>
            <FooterLink
              href="https://www2.gov.bc.ca/gov/content/home/disclaimer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Disclaimer
            </FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink
              href="https://www2.gov.bc.ca/gov/content/home/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy
            </FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink
              href="https://www2.gov.bc.ca/gov/content/home/accessible-government"
              target="_blank"
              rel="noopener noreferrer"
            >
              Accessibility
            </FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink
              href="https://www2.gov.bc.ca/gov/content/home/copyright"
              target="_blank"
              rel="noopener noreferrer"
            >
              Copyright
            </FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink href="mailto:digital.government@gov.bc.ca">
              Contact Us
            </FooterLink>
          </FooterListItem>
        </FooterUL>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
