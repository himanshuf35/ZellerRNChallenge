import {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RouteProp} from '@react-navigation/native';
import {EdgeInsets} from 'react-native-safe-area-context';
import {User} from './users';

export type MainStackParamsList = {
  UserListing: undefined;
  UserDetails: {
    user: User;
  };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainStackParamsList {}
  }
}

export type MainStackScreenProps = NativeStackScreenProps<MainStackParamsList>;

export type WrappedScreenComponentProps = MainStackScreenProps & {
  insets: EdgeInsets | null;
  isLoading: boolean;
  showLoader: Function;
  hideLoader: Function;
  isConnectionAvailable: boolean;
};

export type UserDetailsScreenRouteProp = RouteProp<
  MainStackParamsList,
  'UserDetails'
>;
