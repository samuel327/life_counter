import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import React from 'react';

interface CustomButtonProps {
  [x: string]: any;
  onPress: any;
  color: string;
}

export const CustomButton = (props: CustomButtonProps) => {
  const { color, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.textView}>
        <Text style={{ ...styles.text, ...{ color: color } }}>
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textView: {
    width: 50,

    marginHorizontal: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
  },
});
