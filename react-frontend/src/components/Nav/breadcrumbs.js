import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import '../../css/breadcrumbs.css';
import { displayNames as routeDisplayNames } from '../Nav/routes';
import { Breadcrumb } from 'antd';

/**
 * Gets a crumb label from a bread crumb by either referencing a preset crumb label
 * or auto generating one
 * @param {String} crumb ie 'self-service'
 * @param {Object} crumbLabels ie { 'self-service': 'Self & Service' }
 * @returns {String}
 */
export const getCrumbLabel = (crumb, crumbLabels) => {
  if (Object.prototype.hasOwnProperty.call(crumbLabels, crumb)) {
    return crumbLabels[crumb];
  } else {
    return crumb.replace('-', '').toLowerCase();
  }
};

const BreadCrumbs = ({ crumbLabels, ...rest }) => {
  const history = useHistory();
  const routeLocation = useLocation();
  const [pathName, setPathName] = useState(routeLocation.pathname);

  useEffect(() => {
    history.listen((location) => {
      console.log('change');
      setPathName(location.pathname);
    });
  }, [history]);

  if (pathName === '/') {
    return null;
  }

  // dont include the root page or current page as apart of the crumbs
  const crumbs = pathName.split('/').slice(1, -1);

  return (
    <div {...rest}>
      <Breadcrumb separator=">">
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        {crumbs.map((crumb, index, array) => (
          <Breadcrumb.Item>
            <Link to={array.slice(0, index)}>
              {getCrumbLabel(crumb, routeDisplayNames)}
            </Link>
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </div>
  );
};

export default BreadCrumbs;
