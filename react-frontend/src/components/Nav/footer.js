import React from 'react';
import { Grid } from 'react-flexbox-grid';
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
        <Grid>
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
              <FooterLink
                href="https://www2.gov.bc.ca/gov/content/home/get-help-with-government-services"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Us
              </FooterLink>
            </FooterListItem>
          </FooterUL>
        </Grid>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
