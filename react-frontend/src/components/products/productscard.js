import React from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import '../../css/card.css';

function ProductsCard(props) {
  let cardHeight = 0;

  cardHeight = props.height == null ? '200px' : props.height;

  return (
    <Card className="cardBody" style={{ height: cardHeight }}>
      <div className="cardText">{props.content}</div>
    </Card>
  );
}

export default ProductsCard;
