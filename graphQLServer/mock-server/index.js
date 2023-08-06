import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import {GraphQLFileLoader} from '@graphql-tools/graphql-file-loader';
import {loadSchema} from '@graphql-tools/load';
import {addMocksToSchema} from '@graphql-tools/mock';

import {listZellerCustomers} from './queries/listZellerCustomers.js';
import {getZellerCustomer} from './queries/getZellerCustomer.js';

const schema = await loadSchema('schema.gql', {
  loaders: [new GraphQLFileLoader()],
});

const server = new ApolloServer({
  schema: addMocksToSchema({
    schema,
    resolvers: {
      Query: {
        listZellerCustomers: (_, args) => {
          const argsLength = Object.entries(args)?.length;
          if (argsLength === 0) {
            return listZellerCustomers;
          } else if (args.filter.role.eq === 'Admin') {
            return {
              ...listZellerCustomers,
              items: listZellerCustomers.items.filter(
                user => user.role === 'Admin',
              ),
            };
          } else if (args.filter.role.eq === 'Manager') {
            return {
              ...listZellerCustomers,
              items: listZellerCustomers.items.filter(
                user => user.role === 'Manager',
              ),
            };
          } else {
            return listZellerCustomers;
          }
        },
        getZellerCustomer: () => getZellerCustomer,
      },
    },
  }),
});

const {url} = await startStandaloneServer(server, {
  listen: {port: 9002},
});

console.log(`🚀 Server is using is listening at ${url}`);
