import React from 'react';

const CollaborationTool = ({
  url,
  name,
  cost,
  platform,
  capacity,
  features,
}) => (
  <div className="collaborationTool">
    <a href={url}>
      <strong>{name}</strong>
    </a>{' '}
    *
    <ul>
      <li>
        <strong>Cost is a lot</strong>: {cost}
      </li>
      <li>
        <strong>Platform</strong>: {platform}
      </li>
      <li>
        <strong>Capacity</strong>: {capacity}
      </li>
      <li>
        <strong>Features</strong>: {features}
      </li>
    </ul>
  </div>
);

export default CollaborationTool;
