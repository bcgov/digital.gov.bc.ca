import React from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import '../../css/card.css';

function ProductsCard(props) {
  return (
    <Card className="cardBody" hoverable style={{ height: '170px' }}>
      {props.content}
    </Card>
  );
}

export default ProductsCard;
