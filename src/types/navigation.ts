import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {EdgeInsets} from 'react-native-safe-area-context';

export type MainStackParamsList = {
  UserListing: undefined;
};

export type MainStackScreenProps = NativeStackScreenProps<MainStackParamsList>;

export type WrappedScreenComponentProps = MainStackScreenProps & {
  insets: EdgeInsets | null;
  isLoading: boolean;
  showLoader: Function;
  hideLoader: Function;
  isConnectionAvailable: boolean;
};
