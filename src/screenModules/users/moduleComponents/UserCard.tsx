import React, {FunctionComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {User} from '../../../types/users';
import {Colors, Fonts} from '../../../constants/Constants';
import FirstAlphabet from '../../../components/FirstAlphabet';

type UserCardProps = {
  item: User;
};

const UserCard: FunctionComponent<UserCardProps> = props => {
  const {
    item: {name, role},
  } = props;
  return (
    <View style={styles.container}>
      <FirstAlphabet name={name} />
      <View style={styles.detailsView}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.roleText}>{role}</Text>
      </View>
    </View>
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
