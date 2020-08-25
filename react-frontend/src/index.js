import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from 'react-apollo';
import client from './utils/apolloClient';
import './index.css';
import App from './containers/App';
import { AppConfig } from './providers/AppConfig';

/*
 * If you want your app to work offline and load faster, you can change
 * unregister() to register() below. Note this comes with some pitfalls.
 * Learn more about service workers: https://bit.ly/CRA-PWA
 */
//serviceWorker.unregister();

ReactDOM.render(
  <ApolloProvider client={client}>
    <AppConfig>
      <App />
    </AppConfig>
  </ApolloProvider>,

  document.getElementById('root')
);
