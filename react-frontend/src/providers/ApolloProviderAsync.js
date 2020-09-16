import React, { useContext, useEffect, useState } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import { AppConfigContext } from './AppConfig';

// The apollo provider implements the strapi configuration
// by pulling the backend url from a config file. This allows
// the deployment config file instead of being baked into
// the build config.

function ApolloProviderAsync(props) {
  const config = useContext(AppConfigContext);
  const strapiURL = config['state']['strapiApiUrl'];

  // using client as state prevents it from being initialized needlessly
  const [client, setClient] = useState(
    new ApolloClient({
      uri: 'http://localhost:3000/graphql',
    })
  );

  // The useEffect is only called when config changes
  useEffect(() => {
    if (strapiURL) {
      setClient(new ApolloClient({ uri: strapiURL }));
    }
    console.log('This was called!');
  }, [config, strapiURL]);

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}

export default ApolloProviderAsync;
