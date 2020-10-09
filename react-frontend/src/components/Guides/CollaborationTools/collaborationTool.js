import React from 'react';
import { HrefLink } from '../../StyleComponents/htmlTags';

const CollaborationTool = ({
  url,
  name,
  cost,
  platform,
  capacity,
  features,
}) => (
  <div className="collaborationTool">
    <HrefLink href={url}>
      <strong>{name}</strong>
    </HrefLink>{' '}
    *
    <ul>
      <li>
        <strong>Cost</strong>: {cost}
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
