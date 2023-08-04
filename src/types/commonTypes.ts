import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Store from '../store/index';
import { ParamListBase } from '@react-navigation/native';
import { EdgeInsets } from 'react-native-safe-area-context';
import { ScreenNames } from '../constants/Constants';
const {store} = Store();

export type ReduxState = ReturnType<typeof store.getState>;
export type ReduxDispatch = typeof store.dispatch;
export type VoidFunction = () => void;
export type FunctionWithOneParam = (value: any) => void;
export type FunctionWithTwoParam = (value1: any, value2: any) => void;
export type FunctionWithThreeParam = (
  value1: any,
  value2: any,
  value3: any,
) => void;

export type MainStackParamsList = {
  UserListing: undefined
}

export type MainStackScreenProps = NativeStackScreenProps<MainStackParamsList>

export type WrappedScreenComponentProps = MainStackScreenProps & {
  insets: EdgeInsets | null;
  isLoading: boolean;
  showLoader: Function;
  hideLoader: Function;
  isConnectionAvailable: boolean;
}