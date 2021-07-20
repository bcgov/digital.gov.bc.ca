import React from 'react';
import ReactPlayer from 'react-player';

import CollapsedMenus from './collapsedMenus';
import DigitalFrameworkBlock from './digitalFrameworkBlock';
import Query from '../Query';

import FRAMEWORK_PROGRESS_QUERY from '../../queries/digitalFrameworkProgress/digitalFrameworkProgress';

import { PageContainer } from '../StyleComponents/pageContent';
import { videoLinks } from '../../constants/urls';

const Progress = () => {
  return (
    <div>
      <PageContainer>
        <div style={{ textAlign: 'center' }}>
          <ReactPlayer
            url={videoLinks.digitalFramework}
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
        <Query query={FRAMEWORK_PROGRESS_QUERY} category="ServiceDelivery">
          {({ data: { digitalFrameworkProgresses } }) => {
            return <CollapsedMenus projects={digitalFrameworkProgresses} />;
          }}
        </Query>
        <DigitalFrameworkBlock
          title="Data & Information"
          paragraph="Sharing data across government’s organization boundaries in safe, privacy-protecting ways to deliver truly citizen-centered services and better understand today’s complex social challenges."
        />
        <Query query={FRAMEWORK_PROGRESS_QUERY} category="DataAndInfo">
          {({ data: { digitalFrameworkProgresses } }) => {
            return <CollapsedMenus projects={digitalFrameworkProgresses} />;
          }}
        </Query>
        <DigitalFrameworkBlock
          title="Digital Inside: Tools, Processes and Practices"
          paragraph="Empowering public servants with modern processes, tools and practices so that they can do their jobs best."
        />
        <Query query={FRAMEWORK_PROGRESS_QUERY} category="DigitalInside">
          {({ data: { digitalFrameworkProgresses } }) => {
            return <CollapsedMenus projects={digitalFrameworkProgresses} />;
          }}
        </Query>
        <DigitalFrameworkBlock
          title="Connected Outside: External Partners"
          paragraph="Partnering with others outside government to deliver better value to British Columbians."
        />
        <Query query={FRAMEWORK_PROGRESS_QUERY} category="ConnectedOutside">
          {({ data: { digitalFrameworkProgresses } }) => {
            return <CollapsedMenus projects={digitalFrameworkProgresses} />;
          }}
        </Query>
      </PageContainer>
    </div>
  );
};

export default Progress;
