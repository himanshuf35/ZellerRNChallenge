import React, {FunctionComponent, useCallback} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Touchable from '../../../components/Touchable';
import {User} from '../../../types/users';
import {Colors, Fonts} from '../../../constants/Constants';
import FirstAlphabet from '../../../components/FirstAlphabet';
import {useNavigation} from '@react-navigation/native';

type UserCardProps = {
  item: User;
};

const UserCard: FunctionComponent<UserCardProps> = props => {
  const {item} = props;
  const {name, role} = item;
  const navigation = useNavigation();
  const onCardPress = useCallback(() => {
    navigation.navigate('UserDetails', {
      user: item,
    });
  }, [item, navigation]);

  return (
    <Touchable onPress={onCardPress} style={styles.container}>
      <FirstAlphabet name={name} />
      <View style={styles.detailsView}>
        <Text style={styles.nameText}>{name ?? '-'}</Text>
        <Text style={styles.roleText}>{role ?? '-'}</Text>
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  detailsView: {
    marginLeft: 15,
  },
  nameText: {
    fontSize: 16,
    fontFamily: Fonts.OpenSansRegular,
    lineHeight: 20,
    color: Colors.primaryBlack,
  },
  roleText: {
    marginTop: 2,
    fontSize: 14,
    fontFamily: Fonts.OpenSansRegular,
    color: Colors.textGrey,
    lineHeight: 18,
  },
});

export default React.memo(UserCard);
