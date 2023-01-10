import React from 'react';

import {
  CollapseButton,
  CollapseStyled,
  PanelStyledNoMargin,
} from '../StyleComponents/collapseMenu';

import Planning from './planning';
import Selection from './selection';
import PrivacyReview from './privacyReview';
import SecurityReview from './securityReview';
import LegalReview from './legalReview';
import RiskManagementReview from './riskManagementReview';
import ProcurementAndImplementation from './procurementAndImplementation';

function CollapsedMenus() {
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

  const toggleExpandAll = () => {
    if (expanded.length==7){
      collapseAll();
    }else{
      expandAll();
    }
  }

  return (
    <div style={{ marginTop: '60px' }}>
      {/* <CollapseButton onClick={expandAll} style={{ paddingLeft: '0' }}>
        Expand All
      </CollapseButton>{' '}
      |<CollapseButton onClick={collapseAll}>Collapse All</CollapseButton> */}
      <CollapseButton aria-expanded={expanded.length==7?'true':'false'} onClick={toggleExpandAll} style={{ paddingLeft: '0' }}>
            {expanded.length==7?'Collapse All':'Expand All'}
          </CollapseButton>
      <CollapseStyled
        defaultActiveKey={['1']}
        activeKey={expanded}
        onChange={changeKeyState}
      >
        <PanelStyledNoMargin header="Planning" key="1">
          <Planning />
        </PanelStyledNoMargin>
        <PanelStyledNoMargin header="Selection" key="2">
          <Selection />
        </PanelStyledNoMargin>
        <PanelStyledNoMargin header="Privacy review" key="3">
          <PrivacyReview />
        </PanelStyledNoMargin>
        <PanelStyledNoMargin header="Security review" key="4">
          <SecurityReview />
        </PanelStyledNoMargin>
        <PanelStyledNoMargin header="Legal review" key="5">
          <LegalReview />
        </PanelStyledNoMargin>
        <PanelStyledNoMargin header="Risk management review" key="6">
          <RiskManagementReview />
        </PanelStyledNoMargin>
        <PanelStyledNoMargin header="Procurement and implementation" key="7">
          <ProcurementAndImplementation />
        </PanelStyledNoMargin>
      </CollapseStyled>
    </div>
  );
}

export default CollapsedMenus;
