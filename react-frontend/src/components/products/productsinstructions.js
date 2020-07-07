import React from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid';

const instructions = [
  'Clearly define the problems you’re trying to solve, the outcomes you want to improve, or the value you want to deliver for the users of your service',
  'Identify and consider different technology approaches you might pursue — for example, licensing and customizing a commercial digital product or building a custom application from scratch',
  'Confirm support and funding to pursue your solution',
  'Assemble a team with the skills and capacity to deliver, test, improve, and maintain your digital service into the future',
];

const ProductsInstructions = () => {
  var cols = [];
  for (var i = 0; i < 4; i++) {
    cols.push(
      <Col sm={12} md={3} key={i}>
        <p className="instructionCol">{instructions[i]}</p>
      </Col>
    );
  }

  return (
    <div className="instructions">
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
