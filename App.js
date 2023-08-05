/**
 * Forms
 * App
 * @author-Himanshu Yadav
 * @modify date 2023-08-05 21:14:10
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import RNAsyncStorageFlipper from 'rn-async-storage-flipper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ErrorBoundary from './src/components/ErrorBoundary';
import store from './src/store';
import AppNavigator from './src/navigationRoutes';
import NetInfo, {NetworkStatusProvider} from './src/network/NetworkStatus';
import {client, GraphQLProvider} from './src/graphQL';

const App = () => {
  const [isConnectionAvailable, setConnectionAvailable] = useState(true);
  useEffect(() => {
    //Enable async storage flipper plugin in dev mode
    if (__DEV__) {
      RNAsyncStorageFlipper(AsyncStorage);
    }
    const netUnsubscribeFunc = NetInfo.addEventListener(state => {
      setConnectionAvailable(state.isConnected);
    });
    return () => {
      netUnsubscribeFunc();
    };
  }, []);

  return (
    <ErrorBoundary>
      <SafeAreaProvider>
        <GraphQLProvider client={client}>
          <NetworkStatusProvider value={isConnectionAvailable}>
            <Provider store={store}>
              <AppNavigator />
            </Provider>
          </NetworkStatusProvider>
        </GraphQLProvider>
      </SafeAreaProvider>
    </ErrorBoundary>
  );
};

export default App;
