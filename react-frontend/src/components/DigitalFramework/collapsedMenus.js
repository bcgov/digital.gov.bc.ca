import React from 'react';

import { Collapse } from 'antd';

import CollapsedMenuContent from './collapsedMenuContent';

import { PanelStyled } from '../StyleComponents/collapseMenu';
import { ReactMarkdownStyled } from '../StyleComponents/styledMarkdown';

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
