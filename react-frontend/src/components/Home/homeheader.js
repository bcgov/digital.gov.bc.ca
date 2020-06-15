import React from 'react';
import '../../css/home.css';
import '../../css/pageheader.css';

const HomeHeader = () => {
  return (
    <div className="pageHeader">
      <div className="pageText">
        <div className="pageTitle">
          <p>Digital Government</p>
        </div>
        <div className="pageDescription">
          <p>
            In this digital age, people expect fast and easy access to
            information and services.
          </p>
          <p>
            Learn how the British Columbia Public Service is building teams and
            using modern technology to meet those expectations and deliver
            better government services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
