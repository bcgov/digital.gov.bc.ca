import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import ProductsCard from './productscard';

import {
  ProductPageHeading,
  ProductPageSubHeading,
} from '../StyleComponents/headings';
import { HrefLink } from '../StyleComponents/htmlTags';
import { ContentBlockContainer } from '../StyleComponents/pageContent';

const cards = [
  <div>
    <p>
      <HrefLink href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/service-experience-digital-delivery/service-design">
        The Service Design team
      </HrefLink>{' '}
      can help you discover and understand problems that currently exist with
      your service and where the best opportunities for improvement might lie.
    </p>
  </div>,
  <div>
    <p>
      Consider if there are{' '}
      <HrefLink href="https://www2.gov.bc.ca/gov/content/data">
        data and data services
      </HrefLink>{' '}
      that can enhance your research, analysis, and decision-making.
    </p>
  </div>,
  <div>
    <p>
      If you are trying to improve a <b>process</b>,{' '}
      <HrefLink href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/service-experience-digital-delivery/lean-bc">
        LeanBC
      </HrefLink>{' '}
      can help you identify areas for improvement as you apply the Lean
      continuous improvement philosophy.
    </p>
  </div>,
];

const Defining = () => {
  return (
    <ContentBlockContainer id="definingProblems">
      <Row>
        <Col sm={12}>
          <ProductPageHeading>
            Here are some services to help you along this journey:
          </ProductPageHeading>
          <ProductPageSubHeading>
            Defining problems, outcomes, value
          </ProductPageSubHeading>
          <p>
            To truly improve something for people, it’s critical to take time to
            understand them and be clear about what you want to achieve.
          </p>
        </Col>
      </Row>
      <Row style={{ minHeight: '200px' }}>
        {cards.map((element, i) => (
          <Col key={i} sm={12} md={4}>
            <ProductsCard content={element} />
          </Col>
        ))}
      </Row>
    </ContentBlockContainer>
  );
};

export default Defining;
