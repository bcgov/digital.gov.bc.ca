import React from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid';
import ProductsCard from './productscard';
import { ProductPageSubHeading } from '../StyleComponents/headings';

const cards = [
  <div className="cardContent">
    <p>
      <a
        className="productCardLink"
        href="https://bcdevexchange.org/ExchangeLab"
        target="_blank"
        rel="noopener noreferrer"
      >
        The Exchange Lab
      </a>{' '}
      provides training, community, and digital service delivery residency
      programs that apply Agile and DevOps methods that can help you build your
      team.
    </p>
  </div>,
  <div className="cardContent">
    <p>
      If you need to contract a team and want them to follow an Agile process,
      you can use the{' '}
      <a className="productCardLink" target="_blank">
        Digital Marketplace.
      </a>
    </p>
  </div>,
  <div className="cardContent">
    <p>
      By requesting access to the B.C. Government’s{' '}
      <a
        className="productCardLink"
        href="https://www.bcdevexchange.org/DevOpsPlatform"
        target="_blank"
        rel="noopener noreferrer"
      >
        DevOps Container Platform
      </a>
      , you can empower your developers to deploy digital applications quickly,
      securely, and at scale.
    </p>
  </div>,
  <div className="cardContent">
    <p>
      Learn about{' '}
      <a
        className="productCardLink"
        href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/information-management-technology/im-it-capital-investment"
        target="_blank"
        rel="noopener noreferrer"
      >
        IM/IT Capital Investment
      </a>{' '}
      that you may require to build your service.
    </p>
  </div>,
];

const Assembling = () => {
  return (
    <div className="definingContainer">
      <ProductPageSubHeading>
        Assembling and supporting your team
      </ProductPageSubHeading>
      <p>
        Whatever technology solution you decide to pursue, you will need a team
        of people with all the skills necessary to implement and maintain it.
        Here are some services that can help you form that team and set them up
        for success.
      </p>
      <p>Here are some services that might help you at this stage.</p>
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

export default Assembling;
