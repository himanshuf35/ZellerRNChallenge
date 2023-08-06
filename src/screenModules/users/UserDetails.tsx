/**
 * @author Rahul Rajput
 * @email rahul@studiographene.com
 * @create date 2020-05-06 09:51:44
 * @modify date 2023-08-04 19:05:27
 * @desc [User listing screen]
 */

import React, {FunctionComponent, useMemo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import Header from '../../components/Header';
import ScreenWrapper from '../../components/ScreenWrapper';
import {
  UserDetailsScreenRouteProp,
  WrappedScreenComponentProps,
} from '../../types/navigation';

const UserDetails: FunctionComponent<WrappedScreenComponentProps> = () => {
  const route = useRoute<UserDetailsScreenRouteProp>();
  const user = useMemo(() => route?.params?.user ?? {}, [route?.params?.user]);
  return (
    <>
      <Header title={user?.name ?? '-'} showBack={true} />
      <View style={styles.container}>
        <Text>Email: {user?.email}</Text>
        <Text>Role: {user?.role}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default ScreenWrapper(UserDetails);
