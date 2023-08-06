import {gql} from '@apollo/client';

export const ALL_CUSTOMERS_LIST = gql`
  query {
    listZellerCustomers {
      items {
        id
        name
        role
      }
    }
  }
`;
