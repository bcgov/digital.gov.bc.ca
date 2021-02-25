import React from 'react';

import { Collapse } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { DownOutlined } from '@ant-design/icons';

import CollapsedMenuContent from './collapsedMenuContent';

import { PanelStyled, CollapseStyled } from '../StyleComponents/collapseMenu';

function CollapsedMenus({ projects }) {
  const [expanded, setExpanded] = React.useState(['']);

  const changeKeyState = (key) => {
    setExpanded(key);
  };

  return (
    <CollapseStyled
      defaultActiveKey={['']}
      activeKey={expanded}
      onChange={changeKeyState}
    >
      {projects?.map((project, i) => {
        return (
          <PanelStyled header={project.Name} key={project.Name}>
            <CollapsedMenuContent content={project} />
          </PanelStyled>
        );
      })}
    </CollapseStyled>
  );
}

export default CollapsedMenus;
