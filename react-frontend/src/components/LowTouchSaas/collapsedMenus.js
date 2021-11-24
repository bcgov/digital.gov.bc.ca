import React from 'react';

import {
  CollapseButton,
  CollapseStyled,
  PanelStyledNoMargin,
} from '../StyleComponents/collapseMenu';
import { StyleRichText } from '../StyleComponents/styledMarkdown';
import Planning from './planning';

function CollapsedMenus({
  planning,
  selection,
  privacyReview,
  securityReview,
  legalReview,
  riskManagementReview,
  procurementAndImplementation,
}) {
  const [expanded, setExpanded] = React.useState(['1']);

  const expandAll = () => {
    setExpanded(['1', '2', '3', '4', '5', '6', '7']);
  };

  const collapseAll = () => {
    setExpanded([]);
  };

  const changeKeyState = (key) => {
    setExpanded(key);
  };

  return (
    <div style={{ marginTop: '60px' }}>
      <CollapseStyled
        defaultActiveKey={['1']}
        activeKey={expanded}
        onChange={changeKeyState}
      >
        <PanelStyledNoMargin header="Planning" key="1">
          {Planning}
        </PanelStyledNoMargin>
        <PanelStyledNoMargin header="Selection" key="2">
          <div>Planning content...</div>
        </PanelStyledNoMargin>
        <PanelStyledNoMargin header="Privacy review" key="3">
          <div>Planning content...</div>
        </PanelStyledNoMargin>
        <PanelStyledNoMargin header="Security review" key="4">
          <div>Planning content...</div>
        </PanelStyledNoMargin>
        <PanelStyledNoMargin header="Legal review" key="5">
          <div>Planning content...</div>
        </PanelStyledNoMargin>
        <PanelStyledNoMargin header="Risk management review" key="6">
          <div>Planning content...</div>
        </PanelStyledNoMargin>
        <PanelStyledNoMargin header="Procurement and implementation" key="7">
          <div>Planning content...</div>
        </PanelStyledNoMargin>
      </CollapseStyled>
    </div>
  );
}

export default CollapsedMenus;
