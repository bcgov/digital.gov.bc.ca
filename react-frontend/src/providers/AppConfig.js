import React, { useState, useEffect } from 'react';

export const AppConfigContext = React.createContext();

export const AppConfig = () => {
  const [config, setConfig] = useState({});
  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/config.json');

    xhr.send();

    xhr.onload = function () {
      if (xhr.status !== 200) {
        // analyze HTTP status of the xhrsponse
        // do something
      } else {
        // show the xhrsult
        setConfig(JSON.parse(xhr.response));
      }
    };
  });

  return <AppConfigContext.Provider value={config} />;
};
