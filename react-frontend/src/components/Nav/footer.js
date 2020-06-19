import React from 'react';
import '../../css/footer.css';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href=".">Disclaimer</a>
          </li>
          <li>
            <a href=".">Privacy</a>
          </li>
          <li>
            <a href=".">Accessibility</a>
          </li>
          <li>
            <a href=".">Copyright</a>
          </li>
          <li>
            <a href=".">Contact Us</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
