import React, { useState, useEffect } from 'react';
import '../../css/nav.css';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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
      const nav = document.getElementById('navbar');
      nav.style.display = 'none';
      setOpenMenu(false);
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
      <header>
        <div className="banner">
          <a
            href="https://gov.bc.ca"
            alt="Go to the Government of British Columbia website"
          >
            <img
              className="navImage"
              src={logoPath}
              alt="Go to the Government of British Columbia website"
            />
          </a>
          <h1 className="titleText">Digital Government</h1>
        </div>
        <div className="other">
          <div className="nav-btn" onClick={toggleMenu} href=".">
            <FontAwesomeIcon icon={faBars} />
          </div>
          {/* <!-- 
                This place is for anything that needs to be right aligned
                beside the logo.
                --> */}
        </div>
      </header>
      <nav className="navigation-main" id="navbar">
        <div className="container">
          <ul>
            <li>
              <Link
                to="/"
                className={activePage === '/' ? 'active' : 'notactive'}
              >
                <p className="navOption">Home</p>
              </Link>
            </li>
            <li>
              <Link
                to="/resources"
                className={activePage === '/resources' ? 'active' : 'notactive'}
              >
                <p className="navOption">Resources</p>
              </Link>
            </li>
            <li>
              <Link
                to="/products-services"
                className={
                  activePage === '/products-services' ? 'active' : 'notactive'
                }
              >
                <p className="navOption">Products & Services</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
