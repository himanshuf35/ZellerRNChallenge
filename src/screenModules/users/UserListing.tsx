/**
 * @author Rahul Rajput
 * @email rahul@studiographene.com
 * @create date 2020-05-06 09:51:44
 * @modify date 2023-08-04 19:05:27
 * @desc [Discovery screen placeholder]
 */

/* eslint-disable react-native/no-inline-styles */
import React, { FunctionComponent } from 'react';
import {View, StyleSheet} from 'react-native';
import SGHeader from '../../components/Header';
import {Texts} from '../../constants/Strings';
import ScreenWrapper from '../../components/ScreenWrapper';
import { WrappedScreenComponentProps } from '../../types/commonTypes';

const UserListing:FunctionComponent<WrappedScreenComponentProps> = (props) => {
  const {navigation} = props;
  return (
    <>
      <SGHeader title={Texts.discovery} showBack={false} />
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
