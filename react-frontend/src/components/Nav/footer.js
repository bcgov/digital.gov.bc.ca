import React from 'react';

import { FooterStyled, FooterContainer } from '../StyleComponents/pageContent';
import {
  FooterLink,
  FooterLinkInternal,
  FooterUL,
} from '../StyleComponents/htmlTags';

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <FooterUL>
          <li>
            <FooterLinkInternal to="/">Home</FooterLinkInternal>
          </li>
          <li>
            <FooterLink
              href="https://www2.gov.bc.ca/gov/content/home/disclaimer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Disclaimer
            </FooterLink>
          </li>
          <li>
            <FooterLink
              href="https://www2.gov.bc.ca/gov/content/home/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy
            </FooterLink>
          </li>
          <li>
            <FooterLink
              href="https://www2.gov.bc.ca/gov/content/home/accessible-government"
              target="_blank"
              rel="noopener noreferrer"
            >
              Accessibility
            </FooterLink>
          </li>
          <li>
            <FooterLink
              href="https://www2.gov.bc.ca/gov/content/home/copyright"
              target="_blank"
              rel="noopener noreferrer"
            >
              Copyright
            </FooterLink>
          </li>
          <li>
            <FooterLink
              href="https://www2.gov.bc.ca/gov/content/home/get-help-with-government-services"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us
            </FooterLink>
          </li>
        </FooterUL>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
