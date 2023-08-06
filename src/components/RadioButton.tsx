import React, {FunctionComponent, useCallback, useMemo} from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {Colors} from '../constants/Constants';
import {FunctionWithOneParam} from '../types/commonTypes';

type RadioButtonProps = {
  isSelected: boolean;
  onSelection: FunctionWithOneParam;
};

const RadioButton: FunctionComponent<RadioButtonProps> = props => {
  const {isSelected, onSelection} = props;

  const onPress = useCallback(() => {
    onSelection(!isSelected);
  }, [onSelection, isSelected]);

  const containerStyle = useMemo(
    () => [styles.container, isSelected && styles.selectedContainer],
    [isSelected],
  );

  return (
    <Pressable onPress={onPress} style={containerStyle}>
      {isSelected && <View style={styles.filledView} />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.borderGrey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedContainer: {
    borderColor: Colors.primaryBlue,
  },
  filledView: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: Colors.primaryBlue,
  },
});

export default React.memo(RadioButton);
