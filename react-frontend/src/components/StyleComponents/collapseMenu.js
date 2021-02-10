import styled from 'styled-components';
import { Collapse } from 'antd';

const { Panel } = Collapse;

export const CollapseButton = styled.span.attrs({
  className: 'collapseButton',
})`
  border: none;
  color: #1a5a96;
  font-family: ‘BC Sans’, ‘Noto Sans’, Verdana, Arial, sans-serif;
`;

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
    font-family: ‘BC Sans’, ‘Noto Sans’, Verdana, Arial, sans-serif;
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