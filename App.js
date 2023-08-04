/**
 * Forms
 * App
 * @author-Himanshu Yadav
 * @modify date 2023-08-04 15:27:31
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import ErrorBoundary from './src/components/ErrorBoundary';
import Store from './src/store';
import AppNavigator from './src/navigationRoutes';
import {PersistGate} from 'redux-persist/integration/react';
import RNAsyncStorageFlipper from 'rn-async-storage-flipper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo, {NetworkStatusProvider} from './src/network/NetworkStatus';

const {store, persistor} = Store();
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
        <NetworkStatusProvider value={isConnectionAvailable}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <AppNavigator />
            </PersistGate>
          </Provider>
        </NetworkStatusProvider>
      </SafeAreaProvider>
    </ErrorBoundary>
  );
};

export default App;
