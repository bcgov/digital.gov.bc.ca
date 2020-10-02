import React, { useState, useEffect } from 'react';
import '../../css/nav.css';
import { useLocation, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import {
  NavBanner,
  NavContentOnRight,
  NavTitle,
  SkipToMainContent,
} from '../StyleComponents/nav';
import {
  NavBarHeaderLink,
  NavBarLi,
  NavBarLink,
  NavBarUl,
} from '../StyleComponents/htmlTags';
const mobileImg = require('../../images/logo-banner.png');
const desktopImg = require('../../images/logo.png');

function NavBar() {
  const history = useHistory();
  const routeLocation = useLocation();
  const [activePage, setActivePage] = useState(routeLocation.pathname);
  const [openMenu, setOpenMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth > 800);

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

  return (
    <div className="navBar">
      <header id="navheader">
        <div className="centerBanner">
          <NavBanner>
            <NavBarHeaderLink
              href="https://gov.bc.ca"
              alt="Go to the Government of British Columbia website"
            >
              <img
                className="navImage"
                src={logoPath}
                alt="Go to the Government of British Columbia website"
              />
            </NavBarHeaderLink>
            <SkipToMainContent>Skip to main content</SkipToMainContent>
            <NavTitle>Digital Government</NavTitle>
          </NavBanner>
          <NavContentOnRight>
            <div className="nav-btn" onClick={toggleMenu} href=".">
              <FontAwesomeIcon icon={faBars} />
            </div>
            {/* <!-- 
                  This place is for anything that needs to be right aligned
                  beside the logo.
                  --> */}
          </NavContentOnRight>
        </div>
      </header>
      <nav className="navigation-main" id="navbar">
        <div className="container">
          <NavBarUl>
            <NavBarLi>
              <NavBarLink
                to="/"
                className={activePage === '/' ? 'active' : 'notactive'}
              >
                Home
              </NavBarLink>
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
          </NavBarUl>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
