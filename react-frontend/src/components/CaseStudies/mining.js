import React from 'react';
import { MiningContent } from './content';
import Template from './template';
import { Grid, Row, Col } from 'antd';
import InfoCard from '../Home/infocard';
import '../../css/casetemplates.css';

const imgLink =
  'https://dalehartery.files.wordpress.com/2015/05/light-grey-background-pattern.jpg';

const descriptions = [
  'The Ministry of Agriculture wanted to understand how farmers monitor and manage their soils. With new environmental regulations around soil management pending, the research aimed to...',
  'In 2016, MSP received 130,000 enrolment and 147,680 Premium Assistance applications. Thirty percent of application forms were returned due to errors. To improve the process, the...',
];

const MiningStudy = () => {
  return (
    <div className="pageContainer">
      <Template
        headerTitle={MiningContent.title}
        headerDescription={MiningContent.description}
        context={MiningContent.context}
        approach={MiningContent.approach}
        outcomes={MiningContent.solution}
        resources={MiningContent.resources}
      />
      <div className="others">
        <Grid>
          <Row>
            <Col sm={12} md={6}>
              <InfoCard
                title={'Helping farmers understand their soil'}
                img={imgLink}
                description={descriptions[0]}
              />
            </Col>
            <Col sm={12} md={6}>
              <InfoCard
                title={'Transforming the Medical Services Plan'}
                img={imgLink}
                description={descriptions[1]}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  );
};

export default MiningStudy;
