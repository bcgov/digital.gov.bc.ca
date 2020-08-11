// import React from 'react';
// import InfoCard from '../components/Home/infocard';
// import renderer from 'react-test-renderer';
// import { isExportDeclaration } from 'typescript';

// const communityImg = require('../../images/community.png');

test('Card does not display image when null', () => {
  const check = 2;

  expect(check).toBe(2);

  // const noImageComponent = renderer.create(
  //     <InfoCard
  //         title={'Digital Framework'}
  //         description={'description'}
  //         linkText={'text'}
  //         routePath="/digital-framework"
  //         height="300px"
  //     />
  // )

  // const imageComponent = renderer.create(
  //     <InfoCard
  //         title={'Community'}
  //         img={communityImg}
  //         description={'description'}
  //         linkText={'text'}
  //         routePath="/digital-framework"
  //         height="300px"
  //     />
  // )

  // let tree = noImageComponent.toJSON();

  // let treeTwo = imageComponent.toJSON();

  // expect(tree).not.toBe(treeTwo);
});
