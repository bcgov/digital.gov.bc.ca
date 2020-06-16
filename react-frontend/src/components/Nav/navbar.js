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
          <h1 className="titleText">Hello British Columbia</h1>
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
                Link 1
              </a>
            </li>
            <li>
              <a href=".">Link 2</a>
            </li>
            <li>
              <a href=".">Link 3</a>
            </li>
            <li>
              <a href=".">Link 4</a>
            </li>
            <li>
              <a href=".">Link 5</a>
            </li>
            <li>
              <a href=".">Link 6</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
