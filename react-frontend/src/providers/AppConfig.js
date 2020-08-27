import React, { useState, useEffect } from 'react';
import _ from 'lodash';

export const AppConfigContext = React.createContext();

export const AppConfig = () => {
  const [config, setConfig] = useState({});
  useEffect(() => {
    console.log(config);
    if (_.isEmpty(config)) {
      console.log(config);
      const xhr = new XMLHttpRequest();
      xhr.open('GET', '/config.json');

      xhr.send();

      xhr.onload = function () {
        if (xhr.status !== 200) {
          // analyze HTTP status of the xhrs response
          // do something
        } else {
          // show the xhrsult
          setConfig(JSON.parse(xhr.response));
        }
      };
    }
  });

  return <AppConfigContext.Provider value={config} />;
};
