import React from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid';

import { ContentBlockContainer } from '../StyleComponents/pageContent';

const instructions = [
  <p>
    Clearly define the <b>problems</b> you’re trying to solve, the{' '}
    <b>outcomes</b> you want to improve, or the <b>values</b> you want to
    deliver for the users of your service
  </p>,
  <p>
    Identify and consider <b>different technology approaches</b> you might
    pursue — for example, licensing and customizing a commercial digital product
    or building a custom application from scratch
  </p>,
  <p>
    Confirm <b>support and funding</b> to pursue your solution
  </p>,
  <p>
    <b>Assemble a team</b> with the skills and capacity to deliver, test,
    improve, and maintain your digital service into the future
  </p>,
];

const ProductsInstructions = () => {
  var cols = [];
  for (var i = 0; i < 4; i++) {
    cols.push(
      <Col sm={12} md={3} key={i}>
        {instructions[i]}
      </Col>
    );
  }

  return (
    <ContentBlockContainer id="productInstructions">
      <Grid>
        <Row>
          <Col sm={12}>
            <p>
              Before you’re ready to create or improve a digital service, you
              will need to:
            </p>
          </Col>
        </Row>
        <Row>{cols}</Row>
      </Grid>
    </ContentBlockContainer>
  );
};

export default ProductsInstructions;
