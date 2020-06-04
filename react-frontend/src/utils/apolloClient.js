import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: process.env.REACT_APP_STRAPI_BACKEND_URL || "http://localhost:1337/graphql",
  // uri: "http://localhost:1337/graphql",
});

export default client;