import React from 'react';
import '../../css/nav.css';

function NavBar() {
  return (
    <div className="navBar">
      <header>
        <div class="banner">
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
        <div class="other">
          <a class="nav-btn" href=".">
            <i class="fas fa-bars" id="menu"></i>
          </a>
          {/* <!-- 
                This place is for anything that needs to be right aligned
                beside the logo.
                --> */}
        </div>
      </header>
      <nav class="navigation-main" id="navbar">
        <div class="container">
          <ul>
            <li>
              <a href="." class="active">
                Home
              </a>
            </li>
            <li>
              <a href=".">Resources</a>
            </li>
            <li>
              <a href=".">Products & Services</a>
            </li>
            <li>
              <a href=".">Blog</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
