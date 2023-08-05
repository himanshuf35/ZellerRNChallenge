
import { useQuery } from '@apollo/client'
import {ALL_CUSTOMERS_LIST} from './queries';

export const useZellerCustomersList = () => {
  const {data, loading} = useQuery(ALL_CUSTOMERS_LIST);
  return {data, loading};
}