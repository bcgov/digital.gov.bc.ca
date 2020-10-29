import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { DisplayNames as routeDisplayNames } from '../Nav/routes';
import {
  BreadcrumbLI,
  BreadcrumbUL,
  HrefLinkStandaloneInternal,
} from '../StyleComponents/htmlTags';
import { BreadcrumbContainer } from '../StyleComponents/pageContent';
const BreadCrumbs = (props) => {
  const history = useHistory();
  const routeLocation = useLocation();
  const [pathName, setPathName] = useState(routeLocation.pathname);
  const isTabletOrMobile = useMediaQuery({
    query: '(max-device-width:1224px)',
  });
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width:760px)',
  });
  const isTablet = useMediaQuery({
    query: '(max-device-width:580px)',
  });

  const isTabletView = useMediaQuery({
    query: '(max-device-width:430px)',
  });

  useEffect(() => {
    history.listen((location) => {
      setPathName(location.pathname);
    });
  }, [history, props]);

  if (pathName === '/') {
    return null;
  }

  let pathArray = pathName.split('/');
  let displayName = pathArray[1];
  let listEntry = [];

  listEntry.push(
    <BreadcrumbLI key="0">
      <HrefLinkStandaloneInternal to="/">Home</HrefLinkStandaloneInternal>
    </BreadcrumbLI>
  );
  listEntry.push(<BreadcrumbLI key="0->">{'>'}</BreadcrumbLI>);
  for (var i = 1; i < pathArray.length - 1; i++) {
    displayName = pathArray[i];
    listEntry.push(
      <BreadcrumbLI key={i}>
        <HrefLinkStandaloneInternal to={'/' + displayName}>
          {routeDisplayNames[displayName]}
        </HrefLinkStandaloneInternal>
      </BreadcrumbLI>
    );
    listEntry.push(<BreadcrumbLI key={i + '->'}>{'>'}</BreadcrumbLI>);
  }
  let breadCrumb = props ? props.breadCrumb : false;
  //no paths exist yet that are more than one path deep, if this occurs then we can add a split function using / to populate .options

  const crumbs = (
    <div>
      <BreadcrumbUL
        style={
          breadCrumb
            ? { marginTop: 0 }
            : {
                marginTop: isTabletOrMobile
                  ? isTabletOrMobileDevice
                    ? isTabletView
                      ? '30%'
                      : '20%'
                    : isTablet
                    ? '15%'
                    : '10%'
                  : '5%',
              }
        }
      >
        {listEntry}
      </BreadcrumbUL>
    </div>
  );

  return <BreadcrumbContainer>{crumbs}</BreadcrumbContainer>;
};

export default BreadCrumbs;
