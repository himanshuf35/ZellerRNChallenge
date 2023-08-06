import {useLazyQuery} from '@apollo/client';
import {FILTER_CUSTOMER_LIST} from './queries';
import LoggerUtil from '../../utils/LoggerUtil';

export const useZellerCustomersList = (roleFilter?: string) => {
  const [fetchList, {loading, error, data, previousData, refetch}] =
    useLazyQuery(FILTER_CUSTOMER_LIST, {
      fetchPolicy: 'network-only',
      variables: {roleFilter: roleFilter},
    });
  if (loading) {
    return {fetchList, loading, data: previousData ?? [], refetchList: refetch};
  }
  if (error) {
    LoggerUtil.log('Customers list error: ', error);
    return {fetchList, loading, data: previousData ?? [], refetchList: refetch};
  }
  return {
    fetchList,
    loading,
    data: data?.listZellerCustomers?.items,
    refetchList: refetch,
  };
};
