import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import '../../css/breadcrumbs.css';
import { DisplayNames as routeDisplayNames } from '../Nav/routes';
import { HrefLinkStandaloneInternal } from '../StyleComponents/htmlTags';

const BreadCrumbs = () => {
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

  let pathArray = pathName.split('/');
  let displayName = pathArray[1];
  let listEntry = [];

  listEntry.push(
    <li className="listOption">
      <HrefLinkStandaloneInternal to="/">Home</HrefLinkStandaloneInternal>
    </li>
  );
  listEntry.push(<li className="listOption">{'>'}</li>);
  for (var i = 1; i < pathArray.length - 1; i++) {
    displayName = pathArray[i];
    listEntry.push(
      <li className="listOption">
        <HrefLinkStandaloneInternal to={'/' + displayName}>
          {routeDisplayNames[displayName]}
        </HrefLinkStandaloneInternal>
      </li>
    );
    listEntry.push(<li className="listOption">{'>'}</li>);
  }

  //no paths exist yet that are more than one path deep, if this occurs then we can add a split function using / to populate .options

  let crumbs = (
    <div>
      <ul className="options">{listEntry}</ul>
    </div>
  );

  return <div className="breadCrumbs">{crumbs}</div>;
};

export default BreadCrumbs;
