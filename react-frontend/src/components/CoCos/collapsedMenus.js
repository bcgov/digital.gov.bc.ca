import React from 'react';

import { Collapse } from 'antd';
import { Col, Row } from 'react-flexbox-grid';

import {
  CollapseButton,
  PanelStyled,
  StyledCheckbox,
} from '../StyleComponents/collapseMenu';

const { Panel } = Collapse;

function CollapsedMenus({ price, service, technicalInfo, requirements }) {
  const [expanded, setExpanded] = React.useState(['1']);

  const expandAll = () => {
    setExpanded(['1', '2', '3', '4']);
  };

  const collapseAll = () => {
    setExpanded([]);
  };

  const changeKeyState = (key) => {
    setExpanded(key);
  };

  return (
    <div>
      <Row>
        <Col xs={12}>
          <CollapseButton onClick={expandAll} style={{ paddingLeft: '0' }}>
            Expand All
          </CollapseButton>{' '}
          | <CollapseButton onClick={collapseAll}>Collapse All</CollapseButton>
        </Col>
      </Row>
      <StyledCheckbox> Test</StyledCheckbox>
      <Collapse
        defaultActiveKey={['1']}
        activeKey={expanded}
        onChange={changeKeyState}
        expandIconPosition="right"
      >
        {price && (
          <PanelStyled header="Price" key="1">
            <p>{price}</p>
          </PanelStyled>
        )}
        {service && (
          <PanelStyled header="Service Level Support" key="2">
            <p>{service}</p>
          </PanelStyled>
        )}
        {technicalInfo && (
          <PanelStyled header="Additional Technical Information" key="3">
            <p>{technicalInfo}</p>
          </PanelStyled>
        )}
        {requirements && (
          <PanelStyled header="Requirements and Restrictions" key="4">
            <p>{requirements}</p>
          </PanelStyled>
        )}
      </Collapse>
    </div>
  );
}

export default CollapsedMenus;
