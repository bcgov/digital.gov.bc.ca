import React from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid';
import ProductsCard from './productscard';

const Defining = () => {
  let cardOne = (
    <div className="cardContent">
      <p>
        <a href=".">The Service Design team</a> can help you discover and
        understand problems that currently exist with your service and where the
        best opportunities for improvement might lie.
      </p>
    </div>
  );

  let cardTwo = (
    <div className="cardContent">
      <p>
        Consider if there are <a href=".">data and data services</a> that can
        enhance your research, analysis, and decision-making.
      </p>
    </div>
  );

  let cardThree = (
    <div className="cardContent">
      <p>
        If you are trying to improve a <b>process</b>, <a href=".">Lean BC</a>{' '}
        can help you identify areas for improvement as you apply the Lean
        continuous improvement philosophy.
      </p>
    </div>
  );
  return (
    <div className="definingContainer">
      <div className="productsSubtitle">Defining problems, outcomes, value</div>
      <p>
        To truly improve something for people, it’s critical to take time to
        understand them and be clear about what you want to achieve.
      </p>
      <Grid>
        <Row>
          <Col sm={12} md={4}>
            <ProductsCard content={cardOne} />
          </Col>
          <Col sm={12} md={4}>
            <ProductsCard content={cardTwo} />
          </Col>
          <Col sm={12} md={4}>
            <ProductsCard content={cardThree} />
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Defining;
