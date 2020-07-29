import React from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';

const ProductsCard = ({ height, content }) => {
  return (
    <Card className="cardBody" style={{ height: '95%', width: '100%' }}>
      <div className="cardText">{content}</div>
    </Card>
  );
};

export default ProductsCard;
