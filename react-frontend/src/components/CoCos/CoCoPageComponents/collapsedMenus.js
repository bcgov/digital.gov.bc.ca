import React from 'react';

import { Col, Row } from 'react-flexbox-grid';

import {
  CollapseButton,
  CollapseStyled,
  PanelStyled,
} from '../../StyleComponents/collapseMenu';
import { StyleRichText } from '../../StyleComponents/styledMarkdown';
import { Heading } from '../../StyleComponents/headings';

function CollapsedMenus({ price, service, technicalInfo, requirements, name }) {
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
    <div style={{ marginTop: '60px' }}>
      <Row>
        <Col xs={12}>
          <Heading>About {name}</Heading>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <CollapseButton onClick={expandAll} style={{ paddingLeft: '0' }}>
            Expand All
          </CollapseButton>{' '}
          &nbsp; | &nbsp;
          <CollapseButton onClick={collapseAll}>Collapse All</CollapseButton>
        </Col>
      </Row>
      <CollapseStyled
        defaultActiveKey={['1']}
        activeKey={expanded}
        onChange={changeKeyState}
      >
        {price && (
          <PanelStyled header="Price" key="1">
            <StyleRichText htmlOrMarkdown={price} />
          </PanelStyled>
        )}
        {service && (
          <PanelStyled header="Service Level Support" key="2">
            <StyleRichText htmlOrMarkdown={service} />
          </PanelStyled>
        )}
        {technicalInfo && (
          <PanelStyled header="Additional Technical Information" key="3">
            <StyleRichText htmlOrMarkdown={technicalInfo} />
          </PanelStyled>
        )}
        {requirements && (
          <PanelStyled header="Requirements and Restrictions" key="4">
            <StyleRichText htmlOrMarkdown={requirements} />
          </PanelStyled>
        )}
      </CollapseStyled>
    </div>
  );
}

export default CollapsedMenus;
