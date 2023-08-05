/**
 * @author Rahul Rajput
 * @email rahul@studiographene.com
 * @create date 2020-05-06 09:51:44
 * @modify date 2023-08-04 19:05:27
 * @desc [User listing screen]
 */

/* eslint-disable react-native/no-inline-styles */
import React, { FunctionComponent, useEffect } from 'react';
import {View, StyleSheet} from 'react-native';
import SGHeader from '../../components/Header';
import {Texts} from '../../constants/Strings';
import ScreenWrapper from '../../components/ScreenWrapper';
import { WrappedScreenComponentProps } from '../../types/navigation';
import { useZellerCustomersList } from '../../graphQL/user';


const UserListing:FunctionComponent<WrappedScreenComponentProps> = (props) => {
  const {data, loading} = useZellerCustomersList();
  useEffect(() => {
    console.log('data', data.listZellerCustomers.items);
    console.log('loading', loading);
  }, [data, loading])
  return (
    <>
      <SGHeader title={Texts.userListing} showBack={true} />
      <View style={{flex: 1, flexDirection: 'row'}}>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subView: {
    flex: 1,
    position: 'absolute',
    right: 0,
    backgroundColor: '#FFFFFF',
    height: 500,
  },
});

export default ScreenWrapper(UserListing);
