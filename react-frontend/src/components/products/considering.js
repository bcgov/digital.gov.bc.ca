import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import ProductsCard from './productscard';

import { ProductPageSubHeading } from '../StyleComponents/headings';
import { HrefLink } from '../StyleComponents/htmlTags';
import { ContentBlockContainer } from '../StyleComponents/pageContent';

const cards = [
  <div>
    <p>
      If you are facing an urgent service delivery challenge due to COVID-19,
      connect with the Digital Response Unit through the{' '}
      <HrefLink
        href="mailto:exchangelab@gov.bc.ca"
        target="_blank"
        rel="noopener noreferrer"
      >
        Exchange Lab
      </HrefLink>
      , a community of digital experts who are working together to address
      urgent challenges.
    </p>
  </div>,
  <div>
    <p>
      <HrefLink
        href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/service-experience-digital-delivery/service-design"
        target="_blank"
        rel="noopener noreferrer"
      >
        The Service Design team{' '}
      </HrefLink>
      can help you generate, prototype, and test ideas for improving your
      service before you decide to fully invest in a delivery team to build a
      new digital product.
    </p>
  </div>,
  <div>
    <p>
      Gain a better understanding of solutions that already exist in the
      marketplace before you decide what to buy or build with the{' '}
      <HrefLink
        href="https://procurementconcierge.gov.bc.ca/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Procurement Concierge.
      </HrefLink>
    </p>
  </div>,
  <div>
    <p>
      If you are considering cloud storage or tools such as Salesforce, Service
      Now, MS Dynamics, or Microsoft Office, read about{' '}
      <HrefLink
        href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/secure-cloud"
        target="_blank"
        rel="noopener noreferrer"
      >
        Cloud services.
      </HrefLink>
    </p>
  </div>,
];

const Considering = () => {
  return (
    <ContentBlockContainer id="definingContainer">
      <Row>
        <Col sm={12}>
          <ProductPageSubHeading>
            Considering different technology approaches
          </ProductPageSubHeading>
          <p>
            Depending on the complexity of your problem, you may apply a variety
            of methods to discover appropriate solutions. If your challenge is
            complex, you should take an{' '}
            <HrefLink
              href="https://bcgov.github.io/ExchangeLabOps/Agile-in-the-BCPS/readme.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agile
            </HrefLink>{' '}
            approach—that is, form a small team to incrementally build your
            solution, frequently testing it with users and reevaluating what
            should be done next. On the other hand, if your challenge is simple
            or complicated, adopting an existing solution with a bit of
            customization may meet your needs..
          </p>
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

export default Considering;
