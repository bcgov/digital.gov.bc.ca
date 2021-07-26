import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import ProductsCard from './productscard';

import { ProductPageSubHeading } from '../StyleComponents/headings';
import { HrefLink } from '../StyleComponents/htmlTags';
import { ContentBlockContainer } from '../StyleComponents/pageContent';
import { assemblingLinks } from '../../constants/urls';

const cards = [
  <div>
    <p>
      <HrefLink
        href={assemblingLinks.exchangeLab}
        target="_blank"
        rel="noopener noreferrer"
      >
        The Exchange Lab
      </HrefLink>{' '}
      provides training, community, and digital service delivery residency
      programs that apply Agile and DevOps methods that can help you build your
      team.
    </p>
  </div>,
  <div>
    <p>
      If you need to contract a team and want them to follow an Agile process,
      you can use the{' '}
      <HrefLink href={assemblingLinks.digitalMarketplace} target="_blank">
        Digital Marketplace.
      </HrefLink>
    </p>
  </div>,
  <div>
    <p>
      By requesting access to the B.C. Government’s{' '}
      <HrefLink
        href={assemblingLinks.devops}
        target="_blank"
        rel="noopener noreferrer"
      >
        DevOps Container Platform
      </HrefLink>
      , you can empower your developers to deploy digital applications quickly,
      securely, and at scale.
    </p>
  </div>,
  <div>
    <p>
      Learn about{' '}
      <HrefLink
        href={assemblingLinks.imit}
        target="_blank"
        rel="noopener noreferrer"
      >
        IM/IT Capital Investment
      </HrefLink>{' '}
      that you may require to build your service.
    </p>
  </div>,
];

const Assembling = () => {
  return (
    <ContentBlockContainer id="assemblingTeam">
      <Row>
        <Col sm={12}>
          <ProductPageSubHeading>
            Assembling and supporting your team
          </ProductPageSubHeading>
          <p>
            Whatever technology solution you decide to pursue, you will need a
            team of people with all the skills necessary to implement and
            maintain it. Here are some services that can help you form that team
            and set them up for success.
          </p>
          <p>Here are some services that might help you at this stage.</p>
        </Col>
      </Row>
      <Row style={{ minHeight: '250px' }}>
        {cards.map((element, i) => (
          <Col key={i} sm={12} md={3}>
            <ProductsCard content={element} />
          </Col>
        ))}
      </Row>
    </ContentBlockContainer>
  );
};

export default Assembling;
