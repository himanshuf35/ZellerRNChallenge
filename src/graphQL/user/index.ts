import {useQuery} from '@apollo/client';
import {ALL_CUSTOMERS_LIST} from './queries';
import LoggerUtil from '../../utils/LoggerUtil';
import {parseCustomersList} from './parseData';

export const useZellerCustomersList = () => {
  const {data, loading, error} = useQuery(ALL_CUSTOMERS_LIST);
  if (loading) {
    return {loading, data: []};
  }
  if (error) {
    LoggerUtil.log('Customers list error: ', error);
    return {data: [], loading};
  }
  const parsedData = parseCustomersList(data?.listZellerCustomers?.items);
  return {data: parsedData, loading};
};
