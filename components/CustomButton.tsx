import { StyleSheet, Text, TouchableOpacity } from 'react-native';

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
      <Text style={{ ...styles.text, ...{ color: color } }}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
  },
});
