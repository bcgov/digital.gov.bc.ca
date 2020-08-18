import React from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid';
import ProductsCard from './productscard';

const cards = [
  <div className="cardContent">
    <p>
      If you are facing an urgent service delivery challenge due to COVID-19,
      connect with the{' '}
      <a
        className="productCardLink"
        href="mailto:exchangelab@gov.bc.ca"
        target="_blank"
        rel="noopener noreferrer"
      >
        Digital Response Unit
      </a>
      , a community of digital experts who are working together to address
      urgent challenges.
    </p>
  </div>,
  <div className="cardContent">
    <p>
      <a
        className="productCardLink"
        href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/service-experience-digital-delivery/service-design"
        target="_blank"
      >
        The Service Design team{' '}
      </a>
      can help you generate, prototype, and test ideas for improving your
      service before you decide to fully invest in a delivery team to build a
      new digital product.
    </p>
  </div>,
  <div className="cardContent">
    <p>
      Gain a better understanding of solutions that already exist in the
      marketplace before you decide what to buy or build with the{' '}
      <a
        className="productCardLink"
        href="https://procurementconcierge.gov.bc.ca/"
        target="_blank"
      >
        Procurement Concierge.
      </a>
    </p>
  </div>,
  <div className="cardContent">
    <p>
      If you are considering cloud storage or tools such as Salesforce, Service
      Now, MS Dynamics, or Microsoft Office, read about{' '}
      <a
        className="productCardLink"
        href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/secure-cloud"
        target="_blank"
      >
        Cloud services.
      </a>
    </p>
  </div>,
];

const Considering = () => {
  return (
    <div className="definingContainer productBlock">
      <div>
        <p className="productsSubtitle">
          Considering different technology approaches
        </p>
      </div>
      <p>
        Depending on the complexity of your problem, you may apply a variety of
        methods to discover appropriate solutions. If your challenge is complex,
        you should take an{' '}
        <a
          className="productCardLink"
          href="https://bcgov.github.io/ExchangeLabOps/Agile-in-the-BCPS/readme.html"
          target="_blank"
        >
          Agile
        </a>{' '}
        approach—that is, form a small team to incrementally build your
        solution, frequently testing it with users and reevaluating what should
        be done next. On the other hand, if your challenge is simple or
        complicated, adopting an existing solution with a bit of customization
        may meet your needs..
      </p>
      <Grid className="cardAdjustment">
        <Row style={{ minHeight: '250px' }}>
          {cards.map((element, i) => (
            <Col key={i} sm={12} md={3}>
              <ProductsCard content={element} />
            </Col>
          ))}
        </Row>
      </Grid>
    </div>
  );
};

export default Considering;
