import React, {useCallback, useContext} from 'react';
import {Alert, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {NetworkStatusContext} from '../network/NetworkStatus';
import {VoidFunction} from '../types/commonTypes';
import {Errors} from '../constants/Strings';

type TouchableProps = TouchableOpacityProps & {
  checkConnection?: boolean;
  onPress: VoidFunction;
};

const Touchable = (props: TouchableProps) => {
  const {children, onPress = () => {}, checkConnection = true} = props;
  const isConnectionAvailable = useContext(NetworkStatusContext);
  const onTouchablePress = useCallback(() => {
    if (isConnectionAvailable) {
      onPress();
    } else {
      Alert.alert(Errors.alert, Errors.noInternet);
    }
  }, [isConnectionAvailable, onPress]);
  return (
    <TouchableOpacity
      {...props}
      onPress={checkConnection ? onTouchablePress : onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default Touchable;
