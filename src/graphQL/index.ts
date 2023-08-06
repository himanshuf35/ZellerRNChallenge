// Initialize Apollo Client
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:9002/',
  cache: new InMemoryCache(),
});

export const GraphQLProvider = ApolloProvider;
