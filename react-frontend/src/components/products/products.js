import React from 'react';
import ProductsBanner from './productsbanner';
import ProductsInstructions from './productsinstructions';
import '../../css/products.css';

const Products = () => {
  return (
    <div className="productsContainer">
      <ProductsBanner />
      <div className="productsBody">
        <ProductsInstructions />
      </div>
    </div>
  );
};

export default Products;
