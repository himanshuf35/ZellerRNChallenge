import {useLazyQuery} from '@apollo/client';
import {FILTER_CUSTOMER_LIST} from './queries';
import {Errors} from '../../constants/Strings';
import {Alert} from 'react-native';

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
    Alert.alert(Errors.alert, error.message);
    return {fetchList, loading, data: previousData ?? [], refetchList: refetch};
  }
  return {
    fetchList,
    loading,
    data: data?.listZellerCustomers?.items ?? [],
    refetchList: refetch,
  };
};
