import React, {FunctionComponent, useMemo} from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import {Colors} from '../constants/Constants';

type HorizontalLineProps = {
  style?: ViewStyle;
};

const HorizontalLine: FunctionComponent<HorizontalLineProps> = props => {
  const {style} = props;
  const containerStyle = useMemo(() => [styles.container, style], [style]);
  return <View style={containerStyle} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.separatorGrey,
  },
});

export default React.memo(HorizontalLine, () => true);
