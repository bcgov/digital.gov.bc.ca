import React from 'react';
import SimpleBanner from '../PageElements/BannerSimple/bannerSimple';
import ProductsInstructions from './productsInstructions';
import Defining from './defining';
import Considering from './considering';
import Assembling from './assembling';

import { PageContainer, SimplePageBody } from '../StyleComponents/pageContent';

const Products = () => {
  return (
    <PageContainer>
      <SimpleBanner
        title="Products and Services"
        description="Supports to help you create or improve a digital service."
      />
      <SimplePageBody>
        <ProductsInstructions />
        <Defining />
        <Considering />
        <Assembling />
      </SimplePageBody>
    </PageContainer>
  );
};

export default Products;
