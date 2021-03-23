import React from 'react';
import styled from 'styled-components';
import { Collapse } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const { Panel } = Collapse;

export const CollapseButton = styled.span.attrs({
  className: 'collapseButton',
})`
  border: none;
  color: #1a5a96;
  font-family: BC Sans, Noto Sans, Verdana, Arial, sans-serif;
`;

export const StyledIcon = styled(FontAwesomeIcon).attrs({
  icon: { faChevronDown },
})`
  font-size: 35px;
  padding-bottom: 6px;
  padding-top: 6px;
  top: 15px;
`;

export function CollapseStyled(props) {
  return (
    <Collapse
      defaultActiveKey={props.defaultActiveKey}
      activeKey={props.activeKey}
      onChange={props.onChange}
      expandIconPosition="right"
      expandIcon={({ isActive }) => (
        <FontAwesomeIcon
          icon={faChevronDown}
          flip={isActive ? null : 'vertical'}
          style={{
            fontSize: '35px',
            paddingTop: '6px',
            paddingBottom: '6px',
            top: '15px',
          }}
        />
      )}
      style={{ background: '#f2f2f2', border: 'none' }}
    >
      {props.children}
    </Collapse>
  );
}

export const PanelStyled = styled(Panel).attrs({
  className: 'PanelStyled',
})`
  border-radius: 2px;
  margin-bottom: 8px;
  overflow: hidden;
  padding-top: 5px;

  .ant-collapse-header {
    background: white;
    color: #1a5a96 !important;
    font-family: BC Sans, Noto Sans, Verdana, Arial, sans-serif;
    font-size: 25.92px;
    font-weight: 700;
  }
  .ant-collapse-content > .ant-collapse-content-box {
    margin-left: 40px;
  }
  .ant-collapse-content {
    border-top-width: 2px;
    border-top-color: #f2f2f2;
  }
`;
