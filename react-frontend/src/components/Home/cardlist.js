import React from 'react';
import InfoCard from './infocard';
import { Col, Row } from 'antd';
import '../../css/home.css';

const descriptions = [
  'The Digital Framework provides a high level vision and some expectations for how we work and what we deliver to enable digital ways of working.',
  'Principles to guide the day-to-day work of BC Public Servants and contractors who are designing, developing, and delivering digital services.',
  'Work is underway to renew policies towards information management and technology.',
  'Find standards, policy, guides, and services to help you work more effectively in the digital age and deliver better services for citizens.',
  'Connect with people working to improve digital services in British Columbia.',
  'See examples of how teams are improving digital services for British Columbians.',
];

const imgLinks = [
  'https://emasuvajac.com/wp-content/uploads/2017/06/DSC_2210a.jpg',
  'https://theculturetrip.com/wp-content/uploads/2017/01/garibaldi-lake.jpg',
  'https://www.naturallywood.com/sites/default/files/styles/inside_banner/public/coastalforest_04_0.jpg?itok=uF5QgK-Q',
  'https://upload.wikimedia.org/wikipedia/commons/6/67/Vancouver%2C_BC%2C_Canada_landscape.jpg',
  'https://i.cbc.ca/1.4486747.1515895578!/fileImage/httpImage/coastal-douglas-fir-ecosystem-southern-vancouver-island.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/5/5f/Howesound.JPG',
];
const linkTexts = [
  'Read the framework',
  'Read the principals',
  'Read the policy',
  'Find resources',
  'Connect',
  'Learn more',
];
function CardList() {
  return (
    <div className="cardContainer">
      <Row gutter={[0, 24]} justify={'space-around'}>
        <Col span={11}>
          <InfoCard
            title={'Digital Framework'}
            img={imgLinks[0]}
            description={descriptions[0]}
            linkText={linkTexts[0]}
          />
        </Col>
        <Col span={11}>
          <InfoCard
            title={'Digital Principles'}
            img={imgLinks[1]}
            description={descriptions[1]}
            linkText={linkTexts[1]}
          />
        </Col>
      </Row>
      <Row gutter={[0, 24]} justify={'space-around'}>
        <Col span={11}>
          <InfoCard
            title={'Digital Policy'}
            img={imgLinks[2]}
            description={descriptions[2]}
            linkText={linkTexts[2]}
          />
        </Col>
        <Col span={11}>
          <InfoCard
            title={'Resources'}
            img={imgLinks[3]}
            description={descriptions[3]}
            linkText={linkTexts[3]}
          />
        </Col>
      </Row>
      <Row gutter={[0, 24]} justify={'space-around'}>
        <Col span={11}>
          <InfoCard
            title={'Community'}
            img={imgLinks[4]}
            description={descriptions[4]}
            linkText={linkTexts[4]}
          />
        </Col>
        <Col span={11}>
          <InfoCard
            title={'Case Studies'}
            img={imgLinks[5]}
            description={descriptions[5]}
            linkText={linkTexts[5]}
          />
        </Col>
      </Row>
    </div>
  );
}

export default CardList;
