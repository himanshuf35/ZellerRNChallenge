/**
 * @author Himanshu Yadav
 * @email himanshumki@outlook.com
 * @create date 2022-06-23 18:50:49
 * @modify date 2023-08-04 15:28:46
 * @desc Main file which contains navigators(Stack and Bottom Tabs) created using react-navigation v6.
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ScreenNames} from '../constants/Constants';
import {
  stackScreenOptions,
  tabScreenOptions,
  drawerScreenOptions,
} from './NavigationUtil';

//Screen Imports
import UserListing from '../screenModules/users/UserListing';
import { MainStackParamsList } from '../types/commonTypes';

const Stack = createNativeStackNavigator<MainStackParamsList>();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// const MainTab = () => {
//   return (
//     <Tab.Navigator screenOptions={tabScreenOptions}>
//       <Tab.Screen name={ScreenNames.Discovery} component={Discovery} />
//     </Tab.Navigator>
//   );
// };

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen name={'UserListing'} component={UserListing} />
    </Stack.Navigator>
  );
};

// const MainDrawer = () => {
//   return (
//     <Drawer.Navigator screenOptions={drawerScreenOptions}>
//       <Drawer.Screen name={ScreenNames.MyTabs} component={MainTab} />
//       <Drawer.Screen name={ScreenNames.MyStack} component={MainStack} />
//     </Drawer.Navigator>
//   );
// };

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default AppNavigator;
