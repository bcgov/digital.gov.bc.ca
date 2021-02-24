import React from 'react';

import DigitalFrameworkBlock from './digitalFrameworkBlock';
import { PageContainer } from '../StyleComponents/pageContent';

const Progress = () => {
  return (
    <div>
      <PageContainer>
        {/* add the picture/video */}
        <DigitalFrameworkBlock
          title="Service Delivery"
          paragraph="Simple, easy to use online services that meet British Columbian’s changing expectations."
        />
        <DigitalFrameworkBlock
          title="Data & Information"
          paragraph="Sharing data across government’s organization boundaries in safe, privacy-protecting ways to deliver truly citizen-centered services and better understand today’s complex social challenges."
        />
        <DigitalFrameworkBlock
          title="Digital Inside: Tools, Processes and Practices"
          paragraph="Empowering public servants with modern processes, tools and practices so that they can do their jobs best."
        />
        <DigitalFrameworkBlock
          title="Connected Outside: External Partners"
          paragraph="Partnering with others outside government to deliver better value to British Columbians."
        />
      </PageContainer>
    </div>
  );
};

export default Progress;
