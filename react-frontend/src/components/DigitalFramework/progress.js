import React from 'react';
import ReactPlayer from 'react-player';

import DigitalFrameworkBlock from './digitalFrameworkBlock';
import Query from '../Query';

import FRAMEWORK_PROGRESS_QUERY from '../../queries/digitalFrameworkProgress/digitalFrameworkProgress';

import { PageContainer } from '../StyleComponents/pageContent';

const Progress = () => {
  return (
    <div>
      <Query query={FRAMEWORK_PROGRESS_QUERY} category="ServiceDelivery">
        {({ data: { digitalFrameworkProgresses } }) => {
          {
            console.log(digitalFrameworkProgresses);
          }
          return <div />;
        }}
      </Query>
      <PageContainer>
        <div style={{ textAlign: 'center' }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=D4DhfV7splA"
            controls
            width="auto"
            style={{
              maxWidth: '546px',
              maxHeight: '310px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />
        </div>
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
