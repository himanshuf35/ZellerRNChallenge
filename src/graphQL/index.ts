// Initialize Apollo Client
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {IS_ANDROID} from '../constants/Constants';

export const client = new ApolloClient({
  uri: IS_ANDROID ? 'http://10.0.2.2:9002/' : 'http://localhost:9002/',
  cache: new InMemoryCache(),
});

export const GraphQLProvider = ApolloProvider;
