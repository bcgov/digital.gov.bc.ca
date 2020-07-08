import React from 'react';

function CollaborationTool(props) {
  return (
    <div className="collaborationTool">
      <a href={props.url}>
        <strong>{props.name}</strong>
      </a>{' '}
      *
      <ul>
        <li>
          <strong>Cost</strong>: {props.cost}
        </li>
        <li>
          <strong>Platform</strong>: {props.platform}
        </li>
        <li>
          <strong>Capacity</strong>: {props.capacity}
        </li>
        <li>
          <strong>Features</strong>: {props.features}
        </li>
      </ul>
    </div>
  );
}

export default CollaborationTool;
