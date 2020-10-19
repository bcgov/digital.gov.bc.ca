import React from 'react';
import SimpleBanner from '../PageElements/BannerSimple/bannerSimple';
import ProductsInstructions from './productsInstructions';
import Defining from './defining';
import Considering from './considering';
import Assembling from './assembling';
import DocumentTitle from 'react-document-title';

import { PageContainer, SimplePageBody } from '../StyleComponents/pageContent';

const Products = () => {
  return (
    <DocumentTitle title="Products & Services - Digital Government - Province of British Columbia">
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
    </DocumentTitle>
  );
};

export default Products;
