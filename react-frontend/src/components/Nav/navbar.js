import React, { useState, useEffect } from 'react';
import '../../css/nav.css';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  const history = useHistory();
  const routeLocation = useLocation();
  const [activePage, setActivePage] = useState(routeLocation.pathname);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 800) {
        const nav = document.getElementById('navbar');
        nav.style.display = 'none';
        setOpenMenu(false);
      } else {
        const nav = document.getElementById('navbar');
        nav.style.display = 'block';
        setOpenMenu(true);
      }
    }

    window.addEventListener('resize', handleResize);
    return history.listen((location) => {
      setActivePage(location.pathname);
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    });
  });

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

  return (
    <div className="navBar">
      <header>
        <div className="banner">
          <a
            href="https://gov.bc.ca"
            alt="Go to the Government of British Columbia website"
          >
            <img
              src={require('../../images/logo-banner.png')}
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
                Products & Services
              </Link>
            </li>
            {/* 
            // <li>
            //   <a href=".">Blog</a>
            // </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
