import React from 'react';

import { Col, Row } from 'react-flexbox-grid';

import {
  CollapseButton,
  CollapseStyled,
  PanelStyled,
} from '../../StyleComponents/collapseMenu';
import { StyleRichText } from '../../StyleComponents/styledMarkdown';
import { Heading } from '../../StyleComponents/headings';

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
      <Row>
        <Col xs={12}>
          <CollapseButton onClick={expandAll} style={{ paddingLeft: '0' }}>
            Expand All
          </CollapseButton>{' '}
          | <CollapseButton onClick={collapseAll}>Collapse All</CollapseButton>
        </Col>
      </Row>
      <CollapseStyled
        defaultActiveKey={['1']}
        activeKey={expanded}
        onChange={changeKeyState}
      >
        {planning && (
          <PanelStyled header="Planning" key="1">
            <div>Planning content...</div>
          </PanelStyled>
        )}
        {selection && (
          <PanelStyled header="Selection" key="2">
            <div>Planning content...</div>
          </PanelStyled>
        )}
        {privacyReview && (
          <PanelStyled header="Privacy review" key="3">
            <div>Planning content...</div>
          </PanelStyled>
        )}
        {securityReview && (
          <PanelStyled header="Security review" key="4">
            <div>Planning content...</div>
          </PanelStyled>
        )}
        {legalReview && (
          <PanelStyled header="Legal review" key="5">
            <div>Planning content...</div>
          </PanelStyled>
        )}
        {riskManagementReview && (
          <PanelStyled header="Risk management review" key="6">
            <div>Planning content...</div>
          </PanelStyled>
        )}
        {procurementAndImplementation && (
          <PanelStyled header="Procurement and implementation" key="7">
            <div>Planning content...</div>
          </PanelStyled>
        )}
      </CollapseStyled>
    </div>
  );
}

export default CollapsedMenus;
