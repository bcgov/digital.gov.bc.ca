import React from 'react';

import { Collapse } from 'antd';

import { PanelStyled } from '../StyleComponents/collapseMenu';
import { ReactMarkdownStyled } from '../StyleComponents/styledMarkdown';

function CollapsedMenus({ projects }) {
  const [expanded, setExpanded] = React.useState(['']);

  const changeKeyState = (key) => {
    setExpanded(key);
  };
  // This filler content will be deleted when the page fixed.
  const content = 'Content coming soon';
  return (
    <div style={{ marginTop: '60px' }}>
      <Collapse
        defaultActiveKey={['']}
        activeKey={expanded}
        onChange={changeKeyState}
        expandIconPosition="right"
        style={{ background: '#f2f2f2', border: 'none' }}
      >
        {projects?.map((project, i) => {
          console.log(projects);
          return (
            <PanelStyled header={project.Name} key={project.Name}>
              <ReactMarkdownStyled source={content} />
            </PanelStyled>
          );
        })}
      </Collapse>
    </div>
  );
}

export default CollapsedMenus;
