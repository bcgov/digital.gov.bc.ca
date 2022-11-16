import React, { useState, useEffect } from 'react';
import BannerSideImage from '../PageElements/Banners/bannerSideImage';
import ProductsInstructions from './productsInstructions';
import Defining from './defining';
import Considering from './considering';
import Assembling from './assembling';
import DocumentTitle from 'react-document-title';

const productsImage =
  require('../../images/pngIllustrations/productsServicesWhite.png').default;

  const wordpressCss=`
/* MANUAL COPY */
.hhA-dJm {
    color: rgb(49, 49, 50);
    font-family: "BC Sans", "Noto Sans", Verdana, Arial, sans-serif;
    font-size: 19px;
    text-align: left;
}

.iQLvBu {
    color: rgb(49, 49, 50);
    font-family: "BC Sans", "Noto Sans", Verdana, Arial, sans-serif;
    font-size: 37px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 10px;
    text-align: left;
}
.bUqtBz {
    border: none;
    position: sticky;
    top: 0px;
    z-index: 2;
}
.gNSzXF {
    background-color: rgb(242, 242, 242);
    z-index: -2;
}
.clMozd {
    background-color: rgb(242, 242, 242);
}

.itMmZS {
    margin: auto;
    max-width: 1065px !important; /* important to override editor */
    padding-left: 30px  !important; /* important to override editor */
    padding-right: 20px;
    z-index: -2;
}

@media screen and (min-width: 800px){

	.itMmZS {
		padding-left: 107px  !important; /* important to override editor */
	}
}

.ant-card-body:before {
    display: table;
    content: "";
}
.bGtrCL {
    border-radius: 21px;
    height: 95%;
    margin-bottom: 20px;
    width: 100%;
}
*, :after, :before {
    box-sizing: border-box;
}

.iISgDu {
    margin-bottom: 5px;
}

.iwFZjo {
    font-size: 31px;
    font-weight: 700;
    line-height: 1.3;
}

.fdhstP {
    margin-bottom: 5px;
}

.clKDgz {
    font-size: 26px;
    font-weight: 700;
    line-height: 1.3;
}
.fHWvXR {
    padding-bottom: 60px;
}
.inylga {
    font-family: "BC Sans", "Noto Sans", Verdana, Arial, sans-serif;
    font-size: 31px;
    font-weight: 700;
    line-height: 1.2;
    position: relative;
}

.fXvxkj {
    display: block;
    margin-bottom: 20px;
}

@media only screen and (min-width: 768px){
	.fXvxkj {
		-webkit-box-align: stretch;
		align-items: stretch;
		display: flex;
		width: 100%;
	}
}

.ehcsox {
    background: center center / cover white;
    border-radius: 21px 21px 0px 0px;
    text-align: center;
    width: 100%;
}
@media only screen and (min-width: 768px){
.ehcsox {
    border-radius: 21px 0px 0px 21px;
    height: initial;
    width: 50%;
}
}

.gFRdeg {
    border-radius: 0px 0px 21px 21px;
    background: rgb(255, 255, 255);
    height: fit-content;
    padding: 24px;
    text-align: left;
	height:auto; /*note: may not always apply - should apply on image container on "Common components" block at the bottom of resources page */
}

@media only screen and (min-width: 768px){
	.gFRdeg {
		border-radius: 0px 21px 21px 0px;
		width: 50%;
	}
}

/* core wordpress styles */
.wp-block-image img {
  height: auto;
  max-width: 100%;
  vertical-align: bottom;
  box-sizing: border-box;
}

/* INLINE STYLES PORTS */
.cardHorizontalImage img{
	height: 200px;
    margin: 20px;
	width: auto; /* required because wordpress hard-codes deminsions into html attributes */
}

/* can't apply classes on image directly (maybe) */
.bannerCenterText img{
    background: rgb(242, 242, 242);
    display: block;
    max-width: 100%;
    max-height: 100%;
    padding-bottom: 20px;
    padding-top: 20px;
}

/* page title component is used, and must be styled like in old v2 */
.bannerCenterText .wp-block-post-title{
	color: rgb(49, 49, 50);
    font-family: "BC Sans", "Noto Sans", Verdana, Arial, sans-serif;
    font-size: 37px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 10px;
    text-align: left;
}

`;

const Products = () => {
  const [content, setContent] = useState('');
  useEffect(() => {
    fetch('http://wordpress-c0cce6-dev.apps.silver.devops.gov.bc.ca/wp-json/wp/v2/pages?slug=products_and_services')
       .then((response) => response.json())
       .then((data) => {
          // console.log('API CONTENT:')
          // console.log(data);
          // let setC = sanitizeHtml(data[0].content.rendered);
          let setC = data[0].content.rendered;
          // console.log('setC: ', setC);
          setContent(setC);
       })
       .catch((err) => {
          console.log('error fetching: ')
          console.log(err.message);
       });
 }, []);

  return (
    <DocumentTitle title="Products & Services - Digital Government - Province of British Columbia">
      <div>
        <style>
          {wordpressCss}
        </style>
        {/* <BannerSideImage
          title={'Products and Services'}
          content={'Supports to help you create or improve a digital service.'}
          image={productsImage}
        />
        <ProductsInstructions />
        <Defining />
        <Considering />
        <Assembling /> */}
        <div dangerouslySetInnerHTML={{__html: content}}></div>
      </div>
    </DocumentTitle>
  );
};

export default Products;
