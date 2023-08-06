/**
 * @author Rahul Rajput
 * @email rahul@studiographene.com
 * @create date 2020-05-06 09:51:53
 * @modify date 2023-08-04 18:57:40
 * @desc [Define all your constants here]
 */

import {Dimensions, Platform} from 'react-native';

export const deviceHeight = Dimensions.get('window').height;
export const deviceWidth = Dimensions.get('window').width;
export const IS_IOS = Platform.OS === 'ios';
export const IS_ANDROID = Platform.OS === 'android';

export const ScreenNames = {
  UserListing: 'listing',
  MyTabs: 'MyTabs',
  MyStack: 'MyStack',
};

export const Colors = {
  white: '#ffffff',
  primaryBlack: '#212322',
  backgroundBlue: '#E8F2FB',
  primaryBlue: '#0370ce',
  textBlue: '#1979d1',
  textGrey: '#5f605f',
  separatorGrey: '#e9edf3',
  borderGrey: '#e9edf3',
};

export const Fonts = {
  OpenSansBold: 'OpenSans-Bold',
  OpenSansBoldItalic: 'OpenSans-BoldItalic',
  OpenSansExtraBold: 'OpenSans-ExtraBold',
  OpenSansExtraBoldItalic: 'OpenSans-ExtraBoldItalic',
  OpenSansItalic: 'OpenSans-Italic',
  OpenSansLight: 'OpenSans-Light',
  OpenSansLightItalic: 'OpenSans-LightItalic',
  OpenSansMedium: 'OpenSans-Medium',
  OpenSansMediumItalic: 'OpenSans-MediumItalic',
  OpenSansRegular: 'OpenSans-Regular',
  OpenSansSemiBold: 'OpenSans-SemiBold',
  OpenSansSemiBoldItalic: 'OpenSans-SemiBoldItalic',
};
