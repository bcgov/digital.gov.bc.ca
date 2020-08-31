import React, { Component, useContext, useEffect } from 'react';
import { ApolloProvider } from 'react-apollo';
// import { ApolloClient } from 'apollo-client';
import ApolloClient from 'apollo-boost';

import { AppConfigContext } from './AppConfig';

function ApolloProviderAsync(props) {
  const config = useContext(AppConfigContext);
  console.log('The apollo provider url was called, config is');
  console.log(config);
  console.log(config['state']['strapiApiUrl']);
  const strapiURL = config['state']['strapiApiUrl'];
  let client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
  });

  if (strapiURL) {
    console.log('The strapi url was called');
    console.log(strapiURL);
    client = new ApolloClient({
      uri: strapiURL,
    });
  }
  // if (client) {
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
  // } else {
  //   return (<div>{props.children}</div>)

  // }
}

export default ApolloProviderAsync;

// export class ApolloProviderAsync extends Component {
//   render() {
//     if (strapiURL) {
//       return (
//         <ApolloProvider client={new ApolloClient({ uri: strapiURL })}>
//           {this.props.children}
//         </ApolloProvider>
//       )
//     } else {
//       return (<div>{this.props.children}</div>)

//     }
//   }

// }

// const Foop = (props) => {
//   const [ clientUrl, set, client] = useStte(null);
// const config =
//   useContext(configAppConfi )

//   useEffeeeeeeeeeet(() => {
//     if(config) {
//       SecurityPolicyViolationEvent(config.url)
//     }
//   }, [config, clientUrl])

//   if(clientUrl) return
//   else return props.childer();

// }
