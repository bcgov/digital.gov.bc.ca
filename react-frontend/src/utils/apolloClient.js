import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  // uri: `${process.env.STRAPI_BACKEND_URL}/graphql` || "http://localhost:1337/graphql",
  uri: 'http://localhost:1337/graphql',
});

export default client;
