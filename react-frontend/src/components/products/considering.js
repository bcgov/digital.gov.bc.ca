import React from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid';
import ProductsCard from './productscard';

const Considering = () => {
  let cardOne = (
    <div className="cardContent">
      <p>
        If you are facing an urgent service delivery challenge due to COVID-19,
        connect with the <a href=".">Digital Response Unit</a>, a community of
        digital experts who are working together to address urgent challenges.
      </p>
    </div>
  );

  let cardTwo = (
    <div className="cardContent">
      <p>
        The Service Design team <a href="."></a>can help you generate,
        prototype, and test ideas for improving your service before you decide
        to fully invest in a delivery team to build a new digital product.
      </p>
    </div>
  );

  let cardThree = (
    <div className="cardContent">
      <p>
        Gain a better understanding of solutions that already exist in the
        marketplace before you decide what to buy or build with the{' '}
        <a href=".">Procurement Concierge.</a>
      </p>
    </div>
  );

  let cardFour = (
    <div className="cardContent">
      <p>
        If you are considering cloud storage or tools such as Salesforce,
        Service Now, MS Dynamics, or Microsoft Office, read about{' '}
        <a href=".">Cloud services.</a>
      </p>
    </div>
  );
  return (
    <div className="definingContainer">
      <div className="productsSubtitle">
        Considering different technology approaches
      </div>
      <p>
        Depending on the complexity of your problem, you may apply a variety of
        methods to discover appropriate solutions. If your challenge is complex,
        you should take an <a href=".">Agile</a> approach—that is, form a small
        team to incrementally build your solution, frequently testing it with
        users and reevaluating what should be done next. On the other hand, if
        your challenge is simple or complicated, adopting an existing solution
        with a bit of customization may meet your needs..
      </p>
      <Grid>
        <Row>
          <Col sm={12} md={3}>
            <ProductsCard content={cardOne} />
          </Col>
          <Col sm={12} md={3}>
            <ProductsCard content={cardTwo} />
          </Col>
          <Col sm={12} md={3}>
            <ProductsCard content={cardThree} />
          </Col>
          <Col sm={12} md={3}>
            <ProductsCard content={cardFour} />
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Considering;
