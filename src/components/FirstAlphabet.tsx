import React, {FunctionComponent, useMemo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors, Fonts} from '../constants/Constants';

type FirstAlphabetProps = {
  name: string;
};

const FirstAlphabet: FunctionComponent<FirstAlphabetProps> = props => {
  const {name} = props;
  const alphabet = useMemo(() => name?.charAt(0), [name]);
  return (
    <View style={styles.container}>
      <Text style={styles.alphabetText}>{alphabet}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundBlue,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  alphabetText: {
    fontSize: 16,
    fontFamily: Fonts.OpenSansRegular,
    color: Colors.primaryBlue,
  },
});

export default React.memo(FirstAlphabet);
