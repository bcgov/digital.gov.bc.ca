import React from 'react';
import '../../css/footer.css';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer>
      <div className="container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="https://www2.gov.bc.ca/gov/content/home/disclaimer">
              Disclaimer
            </a>
          </li>
          <li>
            <a href="https://www2.gov.bc.ca/gov/content/home/privacy">
              Privacy
            </a>
          </li>
          <li>
            <a href="https://www2.gov.bc.ca/gov/content/home/accessible-government">
              Accessibility
            </a>
          </li>
          <li>
            <a href="https://www2.gov.bc.ca/gov/content/home/copyright">
              Copyright
            </a>
          </li>
          <li>
            <a href="https://www2.gov.bc.ca/gov/content/home/get-help-with-government-services">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
