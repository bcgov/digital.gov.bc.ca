import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'react-flexbox-grid';

import {
  navBarResize,
  NavBanner,
  NavBarHeader,
  NavBarWrapper,
  NavImage,
  NavHamburgerButton,
  NavMain,
  NavTitle,
  SkipToMainContent,
} from '../StyleComponents/nav';
import {
  NavBarHeaderLink,
  NavBarLi,
  NavBarLink,
  NavBarLinkExternal,
  NavBarLinkFirst,
  NavBarUl,
} from '../StyleComponents/htmlTags';
import { NavBarContainer } from '../StyleComponents/pageContent';

const mobileImg = require('../../images/logo.svg').default;
const desktopImg = require('../../images/logo.png').default;

function NavBar() {
  const history = useHistory();
  const routeLocation = useLocation();
  const [activePage, setActivePage] = useState(routeLocation.pathname);
  const [openMenu, setOpenMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth > 800);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < navBarResize) {
        const nav = document.getElementById('navbar');
        if (nav?.style?.display) {
          nav.style.display = 'none';
        }
        setOpenMenu(false);
        setIsMobile(false);
      } else {
        const nav = document.getElementById('navbar');
        if (nav?.style?.display) {
          nav.style.display = 'block';
        }
        setOpenMenu(true);
        setIsMobile(true);
      }
    }

    window.addEventListener('resize', handleResize);

    history.listen((location) => {
      setActivePage(location.pathname);
      handleResize();
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    });
  }, [history]);

  const toggleMenu = () => {
    if (openMenu === false) {
      const nav = document.getElementById('navbar');
      nav.style.display = 'block';
      setOpenMenu(true);
    } else {
      const nav = document.getElementById('navbar');
      nav.style.display = 'none';
      setOpenMenu(false);
    }
  };

  let logoPath = isMobile ? mobileImg : desktopImg;

  return (
    <NavBarWrapper>
      <style>
        {
          `
          @media screen and (min-width: 1200px){  
        
            .navBarUl{
              display:grid !important;
              grid-template-areas:
                "........ ........ ........ ........ headerNav1 headerNav2 headerNav3"
                "mainNav1 mainNav2 mainNav3 mainNav4 mainNav5 mainNav6 mainNav7";
            }
            .mainNav1{
              grid-area: mainNav1;
            }
            .mainNav2{
              grid-area: mainNav2;
            }
            .mainNav3{
              grid-area: mainNav3;
            }
            .mainNav4{
              grid-area: mainNav4;
            }
            .mainNav5{
              grid-area: mainNav5;
            }
            .mainNav6{
              grid-area: mainNav6;
            }
            .mainNav7{
              grid-area: mainNav7;
            }

            .headerNav1{
              grid-area: headerNav1;
            }
            .headerNav2{
              grid-area: headerNav2;
            }
            .headerNav3{
              grid-area: headerNav3;
            }
          
            .headerNav1, .headerNav2, .headerNav3{
              margin-top:-44px !important;
            }

            .navBarLink{
              text-align: center;
              display: block !important;
            }
          }
          `
        }
      </style>
      {/* If a site banner is needed in the future, add the component here. (see CovidBanner code) */}
      <NavBarHeader>
        <NavBarContainer>
          <Row middle="xs">
            <Col xs={11}>
              <NavBanner>
                <NavBarHeaderLink
                  href="/"
                  alt="Go to the Digital.gov.bc.ca home page."
                >
                  <NavTitle>
                    <NavImage
                      src={logoPath}
                      alt="Go to the Digital.gov.bc.ca home page."
                    />{' '}
                    Digital Government
                  </NavTitle>
                </NavBarHeaderLink>
                <SkipToMainContent>Skip to main content</SkipToMainContent>
              </NavBanner>
            </Col>
            <Col xs={1}>
              <NavHamburgerButton onClick={toggleMenu} href=".">
                <FontAwesomeIcon icon={faBars} />
              </NavHamburgerButton>
            </Col>
          </Row>
        </NavBarContainer>
      </NavBarHeader>
      <NavMain>
        <NavBarContainer>
          <NavBarUl>

            <NavBarLi className="mainNav1" >
              <NavBarLinkFirst
                
                to="/policies-and-standards"
                className={
                  activePage === '/policies-and-standards' ? 'active' : 'notactive'
                }
              >
                Policies and standards
              </NavBarLinkFirst>
            </NavBarLi>

            <NavBarLi className="mainNav2">
              <NavBarLink
                
                to="/common-components"
                className={
                  activePage === '/common-components' ? 'active' : 'notactive'
                }
              >
                Common components
              </NavBarLink>
            </NavBarLi>

            <NavBarLi className="mainNav3">
              <NavBarLink
                to="/resources"
                className={activePage === '/resources' ? 'active' : 'notactive'}
              >
                Resources
              </NavBarLink>
            </NavBarLi>

            <NavBarLi className="mainNav4">
              <NavBarLink
                to="/communities"
                className={
                  activePage === '/communities' ? 'active' : 'notactive'
                }
              >
                Communities
            </NavBarLink>
            </NavBarLi>

            <NavBarLi className="mainNav5">
              <NavBarLink
                to="/case-studies"
                className={
                  activePage === '/case-studies' ? 'active' : 'notactive'
                }
              >
                Case studies
              </NavBarLink>
            </NavBarLi>

            
            <NavBarLi className="mainNav6">
              <NavBarLink
                to="/products-services"
                className={
                  activePage === '/products-services' ? 'active' : 'notactive'
                }
              >
                Services
              </NavBarLink>
            </NavBarLi>

            
            <NavBarLi className="mainNav7">
              <NavBarLink
                to="/learning"
                className={activePage === '/learning' ? 'active' : 'notactive'}
              >
                Learn
              </NavBarLink>
            </NavBarLi>

            <NavBarLi className="headerNav2">
              <NavBarLinkExternal href="/digital-trust">
                Digital Trust
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  className="fa-xs"
                  pull="right"
                />
              </NavBarLinkExternal>
            </NavBarLi>
            <NavBarLi className="headerNav3">
              <NavBarLinkExternal href="https://marketplace.digital.gov.bc.ca">
                Marketplace
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  className="fa-xs"
                  pull="right"
                />
              </NavBarLinkExternal>
            </NavBarLi>
            {/* <NavBarLi className="headerNav3">
              <NavBarLinkExternal href="https://digital-feedback.apps.silver.devops.gov.bc.ca">
                Feedback 
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  className="fa-xs"
                  pull="right"
                />
              </NavBarLinkExternal>
            </NavBarLi> */}
          </NavBarUl>
        </NavBarContainer>
      </NavMain>
    </NavBarWrapper>
  );
}

export default NavBar;
