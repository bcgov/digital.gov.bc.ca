import Item from 'antd/lib/list/Item';
import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import CollapsedMenus from './collapsedMenus';

afterEach(cleanup);

it('Renders zero collapsible menus when no projects passed in.', () => {
  const div = document.createElement('div');
  const { container } = render(<CollapsedMenus />, div);
  expect(container.querySelectorAll('.PanelStyled').length).toEqual(0);
});

it('Renders two collapsible menus when two projects passed in.', () => {
  const projects = [
    {
      Achievements: 'blah',
      Description: 'blah ',
      FuturePlans: 'blah',
      Milestones: 'blah',
      MoreInformation: 'blah',
      Name: 'Keycloak',
      ProblemStatement: 'blha',
      ReportingPeriod: 'June 2021',
      ministry: { MinistryAcronym: 'CITZ', __typename: 'Ministry' },
    },
    {
      Achievements: 'agergqerger',
      Description: 'agergqerger',
      FuturePlans: 'agergqerger',
      Milestones: 'agergqerger',
      MoreInformation: 'agergqerger',
      Name: 'Category 1',
      ProblemStatement: 'dqerneqr ',
      ReportingPeriod: 'gqergreqg',
      ministry: { MinistryAcronym: 'FIN', __typename: 'Ministry' },
    },
  ];
  const div = document.createElement('div');
  const { container } = render(<CollapsedMenus projects={projects} />, div);
  expect(container.querySelectorAll('.PanelStyled').length).toEqual(2);
});
