import React from 'react';

import { Collapse } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import CollapsedMenuContent from './collapsedMenuContent';

import { PanelStyled } from '../StyleComponents/collapseMenu';

function CollapsedMenus({ projects }) {
  const [expanded, setExpanded] = React.useState(['']);

  const changeKeyState = (key) => {
    setExpanded(key);
  };

  return (
    <Collapse
      defaultActiveKey={['']}
      activeKey={expanded}
      onChange={changeKeyState}
      expandIconPosition="right"
      expandIcon={({ isActive }) => (
        <DownOutlined rotate={isActive ? 180 : 0} />
      )}
      style={{ background: '#f2f2f2', border: 'none' }}
    >
      {projects?.map((project, i) => {
        return (
          <PanelStyled header={project.Name} key={project.Name}>
            <CollapsedMenuContent content={project} />
          </PanelStyled>
        );
      })}
    </Collapse>
  );
}

export default CollapsedMenus;
