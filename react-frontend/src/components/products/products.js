import React from 'react';
import ProductsBanner from './productsbanner';
import ProductsInstructions from './productsinstructions';
import '../../css/products.css';
import Defining from './defining';
import Considering from './considering';
import Assembling from './assembling';

const Products = () => {
  return (
    <div className="productsContainer">
      <ProductsBanner />
      <div className="productsBody">
        <ProductsInstructions />
        <div>
          <p className="productsTitle">
            Here are some services to help you along this journey:
          </p>
        </div>
        <Defining />
        <Considering />
        <Assembling />
      </div>
    </div>
  );
};

export default Products;
