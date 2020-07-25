import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import '../../css/breadcrumbs.css';
import { displayNames as routeDisplayNames } from '../Nav/routes';
import { Breadcrumb } from 'antd';
import { StyledLink } from '../StyleComponents/link';

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
          <StyledLink to="/">Home</StyledLink>
        </Breadcrumb.Item>
        {crumbs.map((crumb, index, array) => (
          <Breadcrumb.Item>
            <StyledLink to={array.slice(0, index)}>
              {getCrumbLabel(crumb, routeDisplayNames)}
            </StyledLink>
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </div>
  );
};

export default BreadCrumbs;
