import React from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import '../../css/card.css';

function ProductsCard(props) {
  let cardHeight = 0;
  if (props.height == null) {
    cardHeight = '200px';
  } else {
    cardHeight = props.height;
  }
  return (
    <Card className="cardBody" hoverable style={{ height: cardHeight }}>
      {props.content}
    </Card>
  );
}

export default ProductsCard;
