import Item from 'antd/lib/list/Item';
import React from 'react';
import ReactDOM from 'react-dom';
import CoCoCard from '../components/CoCos/coCoCard';

it('Renders without crashing if not props are passed in', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CoCoCard></CoCoCard>, div);
});
