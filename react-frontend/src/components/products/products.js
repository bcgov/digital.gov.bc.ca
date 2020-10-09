import React from 'react';
import SimpleBanner from '../PageElements/BannerSimple/bannerSimple';
import ProductsInstructions from './productsInstructions';
import Defining from './defining';
import Considering from './considering';
import Assembling from './assembling';

import {
  PageContainerResource,
  SimplePageBody,
} from '../StyleComponents/pageContent';
import { ProductPageHeading } from '../StyleComponents/headings';
const Products = () => {
  return (
    <PageContainerResource>
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
    </PageContainerResource>
  );
};

export default Products;
