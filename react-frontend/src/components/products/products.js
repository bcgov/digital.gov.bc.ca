import React from 'react';
import BannerSideImage from '../PageElements/Banners/bannerSideImage';
import ProductsInstructions from './productsInstructions';
import Defining from './defining';
import Considering from './considering';
import Assembling from './assembling';
import DocumentTitle from 'react-document-title';

const productsImage = require('../../images/pngIllustrations/productsServicesWhite.png')
  .default;

const Products = () => {
  return (
    <DocumentTitle title="Products & Services - Digital Government - Province of British Columbia">
      <div>
        <BannerSideImage
          title={'Products and Services'}
          content={'Supports to help you create or improve a digital service.'}
          image={productsImage}
        />
        <ProductsInstructions />
        <Defining />
        <Considering />
        <Assembling />
      </div>
    </DocumentTitle>
  );
};

export default Products;
