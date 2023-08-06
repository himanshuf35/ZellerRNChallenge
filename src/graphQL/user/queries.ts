import {gql} from '@apollo/client';

export const FILTER_CUSTOMER_LIST = gql`
  query ListCustomers($roleFilter: String) {
    listZellerCustomers(filter: {role: {eq: $roleFilter}}) {
      items {
        id
        name
        role
        email
      }
    }
  }
`;
