import React from 'react';
import '../../css/digital.css';

import { DigitalFrameworkHeading } from '../StyleComponents/headings';
import { DigitalFrameworkP } from '../StyleComponents/htmlTags';
const DigitalFrameworkBlock = (props) => {
  return (
    <div className="digitalBlock">
      <DigitalFrameworkHeading>{props.title}</DigitalFrameworkHeading>
      <DigitalFrameworkP>{props.paragraph}</DigitalFrameworkP>
    </div>
  );
};

export default DigitalFrameworkBlock;
