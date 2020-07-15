import React from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import '../../css/card.css';

const ProductsCard = ({ height, content }) => {
  let cardHeight = 0;

  cardHeight = height == null ? '200px' : height;

  return (
    <Card className="cardBody" style={{ height: cardHeight }}>
      <div className="cardText">{content}</div>
    </Card>
  );
};

export default ProductsCard;
