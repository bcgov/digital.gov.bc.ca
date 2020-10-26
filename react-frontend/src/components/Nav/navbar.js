import React, { useState, useEffect } from 'react';
import { Drawer,Menu } from "antd";
import '../../css/nav.css';
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
  NavTitle,
  SkipToMainContent,
} from '../StyleComponents/nav';
import {
  NavBarHeaderLink,
  NavBarLi,
  NavBarLink,
  NavBarUl,
  NavBarLinks
} from '../StyleComponents/htmlTags';
const mobileImg = require('../../images/logo-banner.png');
const desktopImg = require('../../images/logo.png');



function NavBar() {
  const history = useHistory();
  const routeLocation = useLocation();
  const [activePage, setActivePage] = useState(routeLocation.pathname);
  const [openMenu, setOpenMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth > 800);
  const [bredCrub,setBredCrub] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 800) {
        const nav = document.getElementById('navbar');
        nav.style.display = 'none';       
        setIsMobile(false);
      } else {
        const nav = document.getElementById('navbar');
        nav.style.display = 'block';       
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
    setOpenMenu(!openMenu)
    // if (openMenu === false) {
    // const nav = document.getElementById('nav-mobile');
    // nav.style.display = 'block';
    // setOpenMenu(true);
    // }else{
    //   const nav = document.getElementById('navbar');
    //   nav.style.display = 'none';
    //   setOpenMenu(false);
    // }
    
  };

  let logoPath = isMobile ? mobileImg : desktopImg;

  function handleSize(value) { 
  setBredCrub(value);

  }


  return (
<>
     <div className="navBar">
   <CovidBanner test = {handleSize} />
    <NavBarHeader>
      <div className="centerBanner">
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
          <div className="nav-btn" onClick={toggleMenu} href=".">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </NavContentOnRight>
      </div>
    </NavBarHeader>
    <Drawer     
      placement={"left"} 
      closable={false}    
      onClose={() => setOpenMenu(false)}
      visible={openMenu}
      width="100%"
      style={{height:"200px",marginTop:!bredCrub?"11.5rem":"4rem"}}    
      bodyStyle={{backgroundColor:"#38598a",}}
     
    >
       
        <NavBarLink
                to="/"
                className={activePage === '/' ? 'active' : 'notactive'}
                style={{color:"#fff"}}
              >Home
             
              </NavBarLink>
            
       
        <NavBarLink
                to="/resources"
                className={activePage === '/resources' ? 'active' : 'notactive'}
                style={{color:"#fff",marginTop:"1rem"}}
                
              >
            Resources
            </NavBarLink>
       
        <NavBarLink
                to="/products-services"
                className={
                  activePage === '/products-services' ? 'active' : 'notactive'
                }
                style={{color:"#fff",marginTop:"1rem"}}
              >
            Products & Services
            </NavBarLink>
      
    </Drawer>
    </div>
    <nav className="navigation-main" id="navbar" >
      <Menu
        mode="horizontal"                                    
        style={{ lineHeight: "50px",backgroundColor:"#38598a"}}
      >
        <Menu.Item key="/home" style={{left:"12rem"}}>
        <NavBarLi >
        <NavBarLink
                to="/"
                className={activePage === '/' ? 'active' : 'notactive'}
                style={{color:"#fff"}}
              >Home
             
              </NavBarLink>
              </NavBarLi>
        </Menu.Item>
        <Menu.Item key="/resources" style={{left:"10rem"}}>
        <NavBarLink
                to="/resources"
                className={activePage === '/resources' ? 'active' : 'notactive'}
                style={{color:"#fff"}}
              >
            Resources
            </NavBarLink>
          
        </Menu.Item>
        <Menu.Item key="/products-services" style={{left:"8rem"}}>
        <NavBarLink
                to="/products-services"
                className={
                  activePage === '/products-services' ? 'active' : 'notactive'
                }
                style={{color:"#fff"}}
              >
            Products & Services
            </NavBarLink>
        </Menu.Item>
     
      </Menu>
     
    </nav>

   
    <BreadCrumbs bredCrub={bredCrub}/>
    </>
   

  );
}

export default NavBar;
