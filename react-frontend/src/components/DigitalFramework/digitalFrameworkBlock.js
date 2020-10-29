import React from 'react';

import { DigitalFrameworkHeading } from '../StyleComponents/headings';
import { DigitalFrameworkP } from '../StyleComponents/htmlTags';
import { DigitalBlock } from '../StyleComponents/pageContent';

const DigitalFrameworkBlock = (props) => {
  return (
    <DigitalBlock>
      <DigitalFrameworkHeading>{props.title}</DigitalFrameworkHeading>
      <DigitalFrameworkP>{props.paragraph}</DigitalFrameworkP>
    </DigitalBlock>
  );
};

export default DigitalFrameworkBlock;
