import React from 'react';
import { View, StyleSheet, Text, Modal, Button } from 'react-native';

interface ChooseColorModalProps {
  visible: boolean;
  setVisible: Function;
}
export const ChooseColorModal = (props: ChooseColorModalProps) => {
  const { visible, setVisible } = props;
  return (
    <Modal visible={visible}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title='Close' onPress={() => setVisible()} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  content: {},
});
