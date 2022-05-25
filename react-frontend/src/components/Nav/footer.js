import React from 'react';
import { FooterStyled, FooterContainer } from '../StyleComponents/pageContent';
import {
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
            <FooterLinkInternal to="/disclaimer">Disclaimer</FooterLinkInternal>
          </FooterListItem>
          <FooterListItem>
            <FooterLinkInternal to="/privacy">Privacy</FooterLinkInternal>
          </FooterListItem>
          <FooterListItem>
            <FooterLinkInternal to="/copyright">Copyright</FooterLinkInternal>
          </FooterListItem>
          <FooterListItem>
            <FooterLinkInternal to="/about">About</FooterLinkInternal>
          </FooterListItem>
        </FooterUL>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
