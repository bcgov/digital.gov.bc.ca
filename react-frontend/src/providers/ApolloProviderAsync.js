import React, { useContext } from 'react';
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

  let client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
  });

  if (strapiURL) {
    client = new ApolloClient({
      uri: strapiURL,
    });
  }
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}

export default ApolloProviderAsync;
