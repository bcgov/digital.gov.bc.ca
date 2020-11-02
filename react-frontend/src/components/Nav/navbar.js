import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import CovidBanner from '../../components/Nav/covidbanner';
import BreadCrumbs from '../../components/Nav/breadcrumbs';
import { useMediaQuery } from 'react-responsive';
import {
  NavBanner,
  NavBarHeader,
  NavImage,
  NavTitle,
  SkipToMainContent,
  CenterBanner,
  NavMain,
  NavHamburgerButton,
  TopHeader,
  CustomDrawer,
  MenuItem,
  MenuItemHome,
  MenuItemResources,
  MenuItemProducts,
} from '../StyleComponents/nav';
import {
  NavBarHeaderLink,
  NavBarLi,
  NavBarLink,
  NavBarLinkResource,
  NavBarLinkProducts,
} from '../StyleComponents/htmlTags';
const mobileImg = require('../../images/logo-banner.png');
const desktopImg = require('../../images/logo.png');

function NavBar() {
  const history = useHistory();
  const routeLocation = useLocation();
  const [activePage, setActivePage] = useState(routeLocation.pathname);
  const [openMenu, setOpenMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth > 800);
  const [breadCrumb, setBreadCrumb] = useState(false);

  const isSmallScreen = useMediaQuery({
    query: '(min-width: 160px) and (max-width:429px)',
  });
  const IsScreen = useMediaQuery({
    query: '(min-width: 430px) and (max-width:550px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-width: 551px) and (max-width:596px)',
  });
  const isTabletScreen = useMediaQuery({
    query: '(min-width: 597px) and (max-width:798px)',
  });

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 800) {
        const NavMain = document.getElementById('navbar');
        NavMain.style.display = 'none';
        setIsMobile(false);
      } else {
        const NavMain = document.getElementById('navbar');
        NavMain.style.display = 'block';
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
    setOpenMenu(!openMenu);
  };

  let logoPath = isMobile ? mobileImg : desktopImg;

  function handleSize(value) {
    setBreadCrumb(value);
  }

  return (
    <>
      <div className="navBar">
        <CovidBanner test={handleSize} />
        <NavBarHeader>
          <CenterBanner>
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
              <NavHamburgerButton onClick={toggleMenu} href=".">
                <FontAwesomeIcon icon={faBars} />
              </NavHamburgerButton>
            </NavBanner>
          </CenterBanner>
        </NavBarHeader>
        <CustomDrawer
          breadCrumb={breadCrumb}
          isSmallScreen={isSmallScreen}
          IsScreen={IsScreen}
          isTablet={isTablet}
          isTabletScreen={isTabletScreen}
          placement={'left'}
          closable={false}
          onClose={() => setOpenMenu(false)}
          visible={openMenu}
          width="100%"
        >
          <NavBarLink
            onClick={toggleMenu}
            to="/"
            className={activePage === '/' ? 'active' : 'notactive'}
          >
            Home
          </NavBarLink>

          <NavBarLinkResource
            onClick={toggleMenu}
            to="/resources"
            className={activePage === '/resources' ? 'active' : 'notactive'}
          >
            Resources
          </NavBarLinkResource>

          <NavBarLinkProducts
            onClick={toggleMenu}
            to="/products-services"
            className={
              activePage === '/products-services' ? 'active' : 'notactive'
            }
          >
            Products & Services
          </NavBarLinkProducts>
        </CustomDrawer>
      </div>
      <NavMain>
        <TopHeader>
          <MenuItem mode="horizontal">
            <MenuItemHome key="/home">
              <NavBarLi>
                <NavBarLink
                  to="/"
                  className={activePage === '/' ? 'active' : 'notactive'}
                >
                  Home
                </NavBarLink>
              </NavBarLi>
            </MenuItemHome>
            <MenuItemResources key="/resources">
              <NavBarLink
                to="/resources"
                className={activePage === '/resources' ? 'active' : 'notactive'}
              >
                Resources
              </NavBarLink>
            </MenuItemResources>
            <MenuItemProducts key="/products-services">
              <NavBarLink
                to="/products-services"
                className={
                  activePage === '/products-services' ? 'active' : 'notactive'
                }
              >
                Products & Services
              </NavBarLink>
            </MenuItemProducts>
          </MenuItem>
        </TopHeader>
      </NavMain>

      <BreadCrumbs breadCrumb={breadCrumb} />
    </>
  );
}

export default NavBar;
