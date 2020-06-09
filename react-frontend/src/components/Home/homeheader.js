import React from 'react';
import '../../css/home.css';

const HomeHeader = () => {
  return (
    <div className="homeHeader">
      <div className="homeText">
        <div className="homeTitle">
          <p>Digital Government</p>
        </div>
        <div className="homeDescription">
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
