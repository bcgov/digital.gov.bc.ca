import React from 'react';
import SimpleBanner from '../BannerSimple/bannerSimple';
import ProductsInstructions from './productsinstructions';
import Defining from './defining';
import Considering from './considering';
import Assembling from './assembling';

import '../../css/products.css';
import '../../css/global.css';

const Products = () => {
  return (
    <div className="pageContainer">
      <SimpleBanner
        title="Products and Services"
        description="Supports to help you create or improve a digital service."
      />
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
