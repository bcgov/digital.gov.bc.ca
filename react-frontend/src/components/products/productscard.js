import React from 'react';
import 'antd/dist/antd.css';
import { CardStyled } from '../StyleComponents/card';

const ProductsCard = ({ height, content }) => {
  return (
    <CardStyled>
      <div className="cardText">{content}</div>
    </CardStyled>
  );
};

export default ProductsCard;
