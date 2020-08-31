import ApolloClient from 'apollo-boost';
// import { AppConfigContext } from '../providers/AppConfig';
// import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
// const config = useContext(AppConfigContext);
// console.log('The env config is:', config);
// const getURI = () => {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', '/config.json');

//   xhr.send();

//   xhr.onload = () => {
//     if (xhr.status !== 200) {
//       // analyze HTTP status of the xhrs response
//       // do something
//       return null
//     } else {
//       console.log("The get URI was called")
//       return JSON.parse(xhr.response)["strapiApiUrl"]
//     }
//   };
// };

// const client = new ApolloClient({
//   link: 'www.getgood.com',
//   cache: new InMemoryCache()
// });

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
});

export default client;
