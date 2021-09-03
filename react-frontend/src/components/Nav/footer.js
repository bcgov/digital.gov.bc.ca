import React from 'react';
import { FooterStyled, FooterContainer } from '../StyleComponents/pageContent';
import {
  FooterLink,
  FooterLinkInternal,
  FooterListItem,
  FooterUL,
} from '../StyleComponents/htmlTags';
import { footerLinks } from '../../constants/urls';

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
              href={footerLinks.disclaimer}
              target="_blank"
              rel="noopener noreferrer"
            >
              Disclaimer
            </FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink
              href={footerLinks.privacy}
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy
            </FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink
              href={footerLinks.accessibility}
              target="_blank"
              rel="noopener noreferrer"
            >
              Accessibility
            </FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink
              href={footerLinks.copyright}
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
