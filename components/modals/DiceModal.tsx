import { Button, Modal, StyleSheet, Text, View } from 'react-native';

import React from 'react';

interface DiceModalProps {
  visible: boolean;
  setDiceModalVisible: Function;
}
export const DiceModal = (props: DiceModalProps) => {
  const { visible, setDiceModalVisible } = props;
  return (
    <Modal visible={visible}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Die Modal TBD</Text>
        <Button title="Close" onPress={() => setDiceModalVisible(false)} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({});
