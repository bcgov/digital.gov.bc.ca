import React from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid';
import ProductsCard from './productscard';

const cards = [
  <div>
    <p className="cardContent">
      <a
        className="productCardLink"
        href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/service-experience-digital-delivery/service-design"
      >
        The Service Design team
      </a>{' '}
      can help you discover and understand problems that currently exist with
      your service and where the best opportunities for improvement might lie.
    </p>
  </div>,
  <div>
    <p className="cardContent">
      Consider if there are{' '}
      <a
        className="productCardLink"
        href="https://www2.gov.bc.ca/gov/content/data"
      >
        data and data services
      </a>{' '}
      that can enhance your research, analysis, and decision-making.
    </p>
  </div>,
  <div>
    <p className="cardContent">
      If you are trying to improve a <b>process</b>,{' '}
      <a
        className="productCardLink"
        href="https://www2.gov.bc.ca/gov/content/careers-myhr/about-the-bc-public-service/lean-bc"
      >
        Lean BC
      </a>{' '}
      can help you identify areas for improvement as you apply the Lean
      continuous improvement philosophy.
    </p>
  </div>,
];

const Defining = () => {
  return (
    <div className="definingContainer">
      <p className="productsSubtitle">Defining problems, outcomes, value</p>
      <p>
        To truly improve something for people, it’s critical to take time to
        understand them and be clear about what you want to achieve.
      </p>
      <Grid className="cardAdjustment">
        <Row>
          {cards.map((element, i) => (
            <Col key={i} sm={12} md={4}>
              <ProductsCard content={element} height="200px" />
            </Col>
          ))}
        </Row>
      </Grid>
    </div>
  );
};

export default Defining;
