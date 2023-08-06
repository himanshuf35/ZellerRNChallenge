import React, {FunctionComponent, useCallback, useMemo} from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import {Colors, Fonts} from '../../../constants/Constants';
import RadioButton from '../../../components/RadioButton';
import {FunctionWithOneParam} from '../../../types/commonTypes';

type UserTypeCardProps = {
  isSelected: boolean;
  type: string;
  setCurrentType: FunctionWithOneParam;
};

const UserTypeCard: FunctionComponent<UserTypeCardProps> = props => {
  const {isSelected, type, setCurrentType} = props;

  const onSelection = useCallback(
    (updatedState: boolean) => {
      if (updatedState) {
        setCurrentType(type);
      } else {
        setCurrentType('');
      }
    },
    [type, setCurrentType],
  );

  const onCardPress = useCallback(() => {
    onSelection(!isSelected);
  }, [isSelected, onSelection]);

  const containerStyle = useMemo(
    () => [styles.container, isSelected && styles.selectedContainer],
    [isSelected],
  );

  return (
    <Pressable onPress={onCardPress} style={containerStyle}>
      <RadioButton isSelected={isSelected} onSelection={onSelection} />
      <Text style={styles.userTypeText}>{type}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 5,
    padding: 15,
    borderRadius: 5,
  },
  selectedContainer: {
    backgroundColor: Colors.backgroundBlue,
  },
  userTypeText: {
    marginLeft: 15,
    fontSize: 16,
    fontFamily: Fonts.OpenSansRegular,
    color: Colors.primaryBlack,
    lineHeight: 20,
  },
});

export default React.memo(UserTypeCard);
