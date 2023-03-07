import React from 'react';
import { FooterStyled, FooterContainer } from '../StyleComponents/pageContent';
import { HrefLink } from '../StyleComponents/htmlTags';
import {
  FooterLinkInternal,
  FooterListItem,
  FooterUL,
} from '../StyleComponents/htmlTags';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faBars } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div>
    <FooterStyled style={{'background': '#313132',
    'padding': '20px 0',
    'borderTop': '0'}}>
      <FooterContainer>
        <div>
          The B.C. Public Service acknowledges the territories of First Nations around B.C. and is grateful to carry out our work on these lands. We acknowledge the rights, interests, priorities, and concerns of all Indigenous Peoples -- First Nations, Métis, and Inuit - respecting and acknowledging their distinct cultures, histories, rights, laws, and governments.
        </div>
      </FooterContainer>
    </FooterStyled>


    <FooterStyled>
      <FooterContainer>       
        <FooterUL>
          <FooterListItem>
            <FooterLinkInternal to="/">Home</FooterLinkInternal>
          </FooterListItem>
          <FooterListItem>
            <FooterLinkInternal to="/about">About digital.gov</FooterLinkInternal>
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
          
        </FooterUL>
        
        <div style={{'overflow':'hidden'}}>
          <div style={{
                'background': 'white',
                'borderRadius': '52px',
                'textAlign': 'center',
                'width': '336px',
                'margin': 'auto',
                'color': '#003366',
                'padding': '24px 20px 61px 20px',
                'margin': '20px auto -46px'
          }}>

            Help us decide what to work on next <br/>
            <HrefLink href="https://digital-feedback.apps.silver.devops.gov.bc.ca/">
              Share your feedback 
              <FontAwesomeIcon
                  style={{
                    'marginLeft': '8px',
                    'width': '13px'
                  }}
                  icon={faExternalLinkAlt}
                />
            </HrefLink>
          </div>
        </div>
      </FooterContainer>
    </FooterStyled>
    </div>
  );
};

export default Footer;
