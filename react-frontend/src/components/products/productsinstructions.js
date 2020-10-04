import React from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid';

const instructions = [
  <p>
    Clearly define the <span className="bolder">problems</span> you’re trying to
    solve, the <span className="bolder">outcomes</span> you want to improve, or
    the <span className="bolder">values</span> you want to deliver for the users
    of your service
  </p>,
  <p>
    Identify and consider{' '}
    <span className="bolder">different technology approaches</span> you might
    pursue — for example, licensing and customizing a commercial digital product
    or building a custom application from scratch
  </p>,
  <p>
    Confirm <span className="bolder">support and funding</span> to pursue your
    solution
  </p>,
  <p>
    <span className="bolder">Assemble a team</span> with the skills and capacity
    to deliver, test, improve, and maintain your digital service into the future
  </p>,
];

const ProductsInstructions = () => {
  var cols = [];
  for (var i = 0; i < 4; i++) {
    cols.push(
      <Col sm={12} md={3} key={i}>
        <div className="instructionCol">{instructions[i]}</div>
      </Col>
    );
  }

  return (
    <div className="instructions contentBlock">
      <div>
        <p className="instructionsFirst">
          Before you’re ready to create or improve a digital service, you will
          need to:
        </p>
      </div>
      <Grid className="cardAdjustment">
        <Row>{cols}</Row>
      </Grid>
    </div>
  );
};

export default ProductsInstructions;
