import React from 'react';

import { DigitalFrameworkHeading } from '../StyleComponents/headings';
import { StyledP } from '../StyleComponents/htmlTags';
import { DigitalBlock } from '../StyleComponents/pageContent';

const DigitalFrameworkBlock = (props) => {
  return (
    <DigitalBlock>
      <DigitalFrameworkHeading>{props.title}</DigitalFrameworkHeading>
      <StyledP>{props.paragraph}</StyledP>
    </DigitalBlock>
  );
};

export default DigitalFrameworkBlock;
