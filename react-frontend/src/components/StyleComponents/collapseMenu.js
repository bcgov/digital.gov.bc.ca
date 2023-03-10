import React from 'react';
import styled from 'styled-components';
import { Collapse } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const { Panel } = Collapse;

export const CollapseButton = styled.button.attrs({
  className: 'collapseButton styled-collapse-button',
  role: 'button',
})`
&.styled-collapse-button{
  background: transparent;
  border: none;
  color: #1a5a96;
  cursor: pointer;
  font-family: BC Sans, Noto Sans, Verdana, Arial, sans-serif;
  margin: 10px 0;
}
`;

export const StyledIcon = styled(FontAwesomeIcon).attrs({
  icon: { faChevronDown },
  className: 'styled-styled-icon'
})`
&.styled-styled-icon{
  font-size: 35px;
  padding-bottom: 6px;
  padding-top: 6px;
  top: 15px;
}
`;

export function CollapseStyled(props) {
  console.log("children");
  console.log(props.children);
  if(props.activeKey) {
  return (
    <Collapse
      defaultActiveKey={[props.defaultActiveKey]}
      activeKey={props.activeKey}
      onChange={props.onChange}
      expandIconPosition="right"
      expandIcon={({ isActive }) => (
        <FontAwesomeIcon
          icon={faChevronDown}
          flip={isActive ? 'vertical' : null}
          style={{
            fontSize: '35px',
            paddingTop: '6px',
            paddingBottom: '6px',
            top: '12px',
          }}
        />
      )}
      style={{ background: '#f2f2f2', border: 'none' }}
    >
      {props.children}
    </Collapse>
  ); } else {
   return <Collapse
    defaultActiveKey={[props.defaultActiveKey]}
    onChange={props.onChange}
    expandIconPosition="right"
    expandIcon={({ isActive }) => (
      <FontAwesomeIcon
        icon={faChevronDown}
        flip={isActive ? 'vertical' : null}
        style={{
          fontSize: '35px',
          paddingTop: '6px',
          paddingBottom: '6px',
          top: '12px',
        }}
      />
    )}
    style={{ background: '#f2f2f2', border: 'none' }}
  >
    {props.children}
  </Collapse>
  }
}

export const PanelStyled = styled(Panel).attrs({
  className: 'PanelStyled styled-panel-styled',
})`
&.styled-panel-styled{
  border-radius: 2px;
  margin-bottom: 8px;
  overflow: hidden;
  padding-top: 5px;
}

  &.styled-panel-styled .ant-collapse-header {
    background: white;
    border: 4px solid #fff;
    color: #1a5a96 !important;
    font-family: BC Sans, Noto Sans, Verdana, Arial, sans-serif;
    font-size: 22px;
    font-weight: 700;
  }
  &.styled-panel-styled .ant-collapse-header :focus {
      border-color: #fdb917;
    }
  
  &.styled-panel-styled .ant-collapse-content > .ant-collapse-content-box {
    margin-left: 40px;
  }
  &.styled-panel-styled .ant-collapse-content {
    border-top-width: 2px;
    border-top-color: #f2f2f2;
  }
`;

export const PanelStyledNoMargin = styled(PanelStyled).attrs({
  className: 'PanelStyled styled-panel-styled-no-margin',
})`
  &.styled-panel-styled-no-margin .ant-collapse-content > .ant-collapse-content-box {
    margin-left: 5px;
  }
  &.styled-panel-styled-no-margin .ant-collapse-content {
    font-family: BC Sans, Noto Sans, Verdana, Arial, sans-serif;
    font-size: 1rem;
  }
`;
