/**
 * @author Himanshu Yadav
 * @email himanshumki@outlook.com
 * @create date 2022-06-23 18:52:03
 * @modify date 2023-08-04 18:00:51
 * @desc Util file for navigators which contains screenOptions to apply on navigators screens, i.e. headerShown
 */

import React from 'react';
import {Colors, ScreenNames} from '../constants/Constants';
import ProfileIcon from '../assets/svgs/profile.svg';
import DiscoveryIcon from '../assets/svgs/discovery.svg';
import { DefaultRouterOptions, Route } from '@react-navigation/native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

type TabScreenOptionsParam = {
  route: Route<string>
}

type TabBarIconParam = {
  color: string;
}

export const stackScreenOptions: NativeStackNavigationOptions  = {
  headerShown: false,
  animation: 'slide_from_right',
};

export const tabScreenOptions = ({route}: TabScreenOptionsParam) => ({
  tabBarActiveTintColor: Colors.glOrange,
  tabBarInactiveTintColor: Colors.glGrey,
  headerShown: false,
});

export const drawerScreenOptions = {
  drawerType: 'front',
  headerShown: false,
};
