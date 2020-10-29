import React, { useState, useEffect } from 'react';
import { Drawer, Menu } from 'antd';
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
} from '../StyleComponents/nav';
import {
  NavBarHeaderLink,
  NavBarLi,
  NavBarLink,
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
  const isTablet = useMediaQuery({
    query: '(max-device-width:700px)',
  });

  const isTabletSreen = useMediaQuery({
    query: '(max-device-width:698px)',
  });

  const isTabletView = useMediaQuery({
    query: '(max-width:650px)',
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
        <Drawer
          placement={'left'}
          closable={false}
          onClose={() => setOpenMenu(false)}
          visible={openMenu}
          width="100%"
          style={{
            height: '140px',
            marginTop: !breadCrumb
              ? isTablet
                ? isTabletView
                  ? '188px'
                  : '128px'
                : isTabletSreen
                ? '64px'
                : '128px'
              : '64px',
          }}
          bodyStyle={{ backgroundColor: '#38598a' }}
        >
          <NavBarLink
            onClick={toggleMenu}
            to="/"
            className={activePage === '/' ? 'active' : 'notactive'}
            style={{ color: '#fff' }}
          >
            Home
          </NavBarLink>

          <NavBarLink
            onClick={toggleMenu}
            to="/resources"
            className={activePage === '/resources' ? 'active' : 'notactive'}
            style={{ color: '#fff', marginTop: '1rem' }}
          >
            Resources
          </NavBarLink>

          <NavBarLink
            onClick={toggleMenu}
            to="/products-services"
            className={
              activePage === '/products-services' ? 'active' : 'notactive'
            }
            style={{ color: '#fff', marginTop: '1rem' }}
          >
            Products & Services
          </NavBarLink>
        </Drawer>
      </div>
      <NavMain>
        <Menu mode="horizontal" style={{ backgroundColor: '#38598a' }}>
          <Menu.Item
            key="/home"
            style={{ left: '8rem', borderBottomStyle: 'none' }}
          >
            <NavBarLi>
              <NavBarLink
                to="/"
                className={activePage === '/' ? 'active' : 'notactive'}
                style={{ color: '#fff' }}
              >
                Home
              </NavBarLink>
            </NavBarLi>
          </Menu.Item>
          <Menu.Item
            key="/resources"
            style={{ left: '6rem', borderBottomStyle: 'none' }}
          >
            <NavBarLink
              to="/resources"
              className={activePage === '/resources' ? 'active' : 'notactive'}
              style={{ color: '#fff' }}
            >
              Resources
            </NavBarLink>
          </Menu.Item>
          <Menu.Item
            key="/products-services"
            style={{ left: '4rem', borderBottomStyle: 'none' }}
          >
            <NavBarLink
              to="/products-services"
              className={
                activePage === '/products-services' ? 'active' : 'notactive'
              }
              style={{ color: '#fff' }}
            >
              Products & Services
            </NavBarLink>
          </Menu.Item>
        </Menu>
      </NavMain>

      <BreadCrumbs breadCrumb={breadCrumb} />
    </>
  );
}

export default NavBar;
