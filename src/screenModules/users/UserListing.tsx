/**
 * @author Rahul Rajput
 * @email rahul@studiographene.com
 * @create date 2020-05-06 09:51:44
 * @modify date 2023-08-04 19:05:27
 * @desc [User listing screen]
 */

import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
  useRef,
} from 'react';
import {View, Text, StyleSheet, FlatList, RefreshControl} from 'react-native';
// import SGHeader from '../../components/Header';
import {Texts} from '../../constants/Strings';
import ScreenWrapper from '../../components/ScreenWrapper';
import {WrappedScreenComponentProps} from '../../types/navigation';
import {useZellerCustomersList} from '../../graphQL/user';
import UserCard from './moduleComponents/UserCard';
import {User} from '../../types/users';
import HorizontalLine from '../../components/HorizontalLine';
import UserTypeCard from './moduleComponents/UserTypeCard';
import {Colors, Fonts} from '../../constants/Constants';

type RenderItemArg = {
  item: User;
  index: number;
};

const UserListing: FunctionComponent<WrappedScreenComponentProps> = props => {
  const {showLoader, hideLoader} = props;
  const [selectedType, setSelectedType] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const {fetchList, loading, data} = useZellerCustomersList(selectedType);
  const isRefreshLoading = useRef(false);

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  useEffect(() => {
    if (isRefreshLoading.current) {
      if (!loading) {
        setIsRefreshing(false);
        isRefreshLoading.current = false;
      }
    } else {
      loading ? showLoader() : hideLoader();
    }
  }, [hideLoader, loading, showLoader]);

  const onRefresh = useCallback(() => {
    isRefreshLoading.current = true;
    setIsRefreshing(true);
    fetchList();
  }, [fetchList]);

  const renderListHeader = useCallback(() => {
    const title = selectedType
      ? `${selectedType} ${Texts.users}`
      : Texts.allUsers;
    return (
      <View>
        <HorizontalLine />
        <Text style={styles.titleText}>{title}</Text>
      </View>
    );
  }, [selectedType]);

  const renderListFooter = useCallback(
    () => <HorizontalLine style={styles.userListFooter} />,
    [],
  );

  const renderUserTypes = useCallback(() => {
    return (
      <View>
        <Text style={styles.titleText}>{Texts.userTypes}</Text>
        <UserTypeCard
          type={Texts.admin}
          isSelected={selectedType === Texts.admin}
          setCurrentType={setSelectedType}
        />
        <UserTypeCard
          type={Texts.manager}
          isSelected={selectedType === Texts.manager}
          setCurrentType={setSelectedType}
        />
      </View>
    );
  }, [selectedType]);

  const renderListItem = useCallback(
    ({item}: RenderItemArg) => <UserCard item={item} />,
    [],
  );

  return (
    <View style={styles.container}>
      {renderUserTypes()}
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
        style={styles.userList}
        ListFooterComponent={renderListFooter}
        ListHeaderComponent={renderListHeader}
        renderItem={renderListItem}
        data={data}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  userList: {
    marginTop: 30,
  },
  userListFooter: {
    marginTop: 15,
  },
  titleText: {
    fontSize: 22,
    fontFamily: Fonts.OpenSansSemiBold,
    lineHeight: 26,
    color: Colors.primaryBlack,
    marginVertical: 30,
  },
});

export default ScreenWrapper(UserListing);
