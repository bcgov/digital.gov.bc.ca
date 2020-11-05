import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import CovidBanner from '../../components/Nav/covidbanner';
import BreadCrumbs from '../../components/Nav/breadcrumbs';

import {
  NavBanner,
  NavBarHeader,
  NavContentOnRight,
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
  NavBarLinkFirst,
  NavBarUl,
} from '../StyleComponents/htmlTags';
import { NavBarContainer } from '../StyleComponents/pageContent';

const mobileImg = require('../../images/logo-banner.png');
const desktopImg = require('../../images/logo.png');

function NavBar() {
  const history = useHistory();
  const routeLocation = useLocation();
  const [activePage, setActivePage] = useState(routeLocation.pathname);
  const [openMenu, setOpenMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth > 800);
  const [breadCrumb, setBreadCrumb] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 800) {
        const nav = document.getElementById('navbar');
        nav.style.display = 'none';
        setOpenMenu(false);
        setIsMobile(false);
      } else {
        const nav = document.getElementById('navbar');
        nav.style.display = 'block';

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

  function handleSize(value) {
    setBreadCrumb(value);
  }

  return (
    <div>
      <CovidBanner test={handleSize} />
      <NavBarHeader>
        <NavBarContainer>
          <NavBanner>
            <NavBarHeaderLink
              href="https://gov.bc.ca"
              alt="Go to the Government of British Columbia website"
            >
              <NavImage
                src={logoPath}
                alt="Go to the Government of British Columbia website"
              />
            </NavBarHeaderLink>
            <NavTitle>Digital Government</NavTitle>
            <SkipToMainContent>Skip to main content</SkipToMainContent>
          </NavBanner>
          <NavContentOnRight>
            <NavHamburgerButton onClick={toggleMenu} href=".">
              <FontAwesomeIcon icon={faBars} />
            </NavHamburgerButton>
          </NavContentOnRight>
        </NavBarContainer>
      </NavBarHeader>
      <NavMain>
        <NavBarContainer>
          <NavBarUl>
            <NavBarLi>
              <NavBarLinkFirst
                to="/"
                className={activePage === '/' ? 'active' : 'notactive'}
              >
                Home
              </NavBarLinkFirst>
            </NavBarLi>
            <NavBarLi>
              <NavBarLink
                to="/resources"
                className={activePage === '/resources' ? 'active' : 'notactive'}
              >
                Resources
              </NavBarLink>
            </NavBarLi>
            <NavBarLi>
              <NavBarLink
                to="/products-services"
                className={
                  activePage === '/products-services' ? 'active' : 'notactive'
                }
              >
                Products & Services
              </NavBarLink>
            </NavBarLi>
            <NavBarLi>
              <NavBarLink
                to="/case-studies"
                className={
                  activePage === '/case-studies' ? 'active' : 'notactive'
                }
              >
                Case Studies
              </NavBarLink>
            </NavBarLi>
            <NavBarLi>
              <NavBarLink
                to="/marketplace"
                className={
                  activePage === '/marketplace' ? 'active' : 'notactive'
                }
              >
                Marketplace
              </NavBarLink>
            </NavBarLi>
          </NavBarUl>
        </NavBarContainer>
      </NavMain>
      <BreadCrumbs breadCrumb={breadCrumb} />
    </div>
  );
}

export default NavBar;
