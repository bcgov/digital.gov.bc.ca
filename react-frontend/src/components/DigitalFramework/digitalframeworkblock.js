import React from 'react';
import '../../css/digital.css';

const DigitalFrameworkBlock = (props) => {
  return (
    <div className="digitalBlock">
      <h2 className="digitalTitle">{props.title}</h2>
      <div className="digitalParagraph">
        <p>{props.paragraph}</p>
      </div>
    </div>
  );
};

export default DigitalFrameworkBlock;
