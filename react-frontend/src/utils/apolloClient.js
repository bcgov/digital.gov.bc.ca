import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
});

export default client;
