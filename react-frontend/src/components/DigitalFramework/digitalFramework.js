import React, { useState } from 'react';
import DocumentTitle from 'react-document-title';

import BannerSideImage from '../PageElements/Banners/bannerSideImage';

import { PageContainer } from '../StyleComponents/pageContent';
import { DigitalFrameworkToggle } from '../StyleComponents/htmlTags';
import Progress from './progress';
import Strategy from './strategy';

const digitalFrameworkImage = require('../../images/pngIllustrations/digitalFrameworkWhite.png')
  .default;

const DigitalFramework = () => {
  const [strategyToggled, setStrategyToggled] = useState(true);

  function onChange(strategy) {
    setStrategyToggled(strategy);
  }

  return (
    <DocumentTitle title="Digital Framework - Digital Government - Province of British Columbia">
      <div>
        <BannerSideImage
          title={'Digital Framework'}
          content={
            'The Digital Framework was released in July 2019. Here are key actions and progress we’re making towards becoming a digital government and the impact of COVID-19.'
          }
          image={digitalFrameworkImage}
        />
        <PageContainer style={{ paddingBottom: '0' }}>
          <div style={{ textAlign: 'center' }}>
            <DigitalFrameworkToggle
              onClick={() => onChange(true)}
              underlined={strategyToggled}
            >
              STRATEGY
            </DigitalFrameworkToggle>
            <DigitalFrameworkToggle
              onClick={() => onChange(false)}
              underlined={!strategyToggled}
            >
              PROGRESS
            </DigitalFrameworkToggle>
          </div>
        </PageContainer>
        {strategyToggled ? <Strategy /> : <Progress />}
      </div>
    </DocumentTitle>
  );
};

export default DigitalFramework;
