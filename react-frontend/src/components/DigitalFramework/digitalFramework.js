import React, { useState } from 'react';
import DocumentTitle from 'react-document-title';
import {
  BannerSideImgTitle,
  BannerSideImgSubTitle,
} from '../StyleComponents/bannerWithImage';

import { PageContainer } from '../StyleComponents/pageContent';
import { DigitalFrameworkToggle } from '../StyleComponents/htmlTags';
import Progress from './progress';
import Strategy from './strategy';


const DigitalFramework = () => {
  const [strategyToggled, setStrategyToggled] = useState(true);

  function onChange(strategy) {
    setStrategyToggled(strategy);
  }

  return (
    <DocumentTitle title="Digital Framework - Digital Government - Province of British Columbia">
<div>
        <PageContainer style={{ paddingBottom: '0' }}>
        <BannerSideImgTitle>Digital Framework</BannerSideImgTitle>
            <BannerSideImgSubTitle> The Digital Framework was released in July 2019. Here are key actions and progress we’re making towards becoming a digital government and the impact of COVID-19.</BannerSideImgSubTitle>

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
