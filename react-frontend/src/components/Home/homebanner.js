import React from 'react';
import '../../css/home.css';
import '../../css/pagetop.css';

const homeImage = require('../../images/home-banner.png');

const content = (
  <p style={{ color: 'white' }}>
    In this digital age, people expect fast and easy access to information and
    services.
    <br />
    Learn how the British Columbia Public Service is building teams and using
    modern technology to meet those expectations and deliver better government
    services.
  </p>
);
const HomeBanner = () => {
  return (
    <div className="pageTop">
      <img className="bannerImage homeBannerImage" alt="" src={homeImage} />
      <div className="pageTextBanner">
        <div className="pageText">
          <div>
            <p className="pageTitle" style={{ color: 'white' }}>
              Digital Government
            </p>
          </div>
          <div className="pageDescription">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
