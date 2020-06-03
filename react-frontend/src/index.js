import React from "react";
import ReactDOM from "react-dom";

import { ApolloProvider } from "react-apollo";
import client from "./utils/apolloClient";

import App from "./containers/App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Router>,
  document.getElementById("root")
)
