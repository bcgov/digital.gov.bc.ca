import React from 'react';
import '../../css/home.css';
import '../../css/pagetop.css';
import homeImage from '../../images/home-banner.png';

const imgStyle = {
  backgroundImage: 'url(' + homeImage + ')',
};

const HomeBanner = () => {
  return (
    <div className="pageTop" style={imgStyle}>
      <div className="pageTextBanner">
        <div className="pageText">
          <div>
            <p className="pageTitle" style={{ color: 'white' }}>
              Digital Government
            </p>
          </div>
          <div className="pageDescription">
            <p style={{ color: 'white' }}>
              In this digital age, people expect fast and easy access to
              information and services.
              <br />
              Learn how the British Columbia Public Service is building teams
              and using modern technology to meet those expectations and deliver
              better government services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
