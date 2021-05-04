import React from 'react';
import { Button, View, Text, StyleSheet, Modal } from 'react-native';

interface LayoutModalProps {
  visible: boolean;
  onClose: any;
  setLayout: any;
}
export const LayoutModal = (props: LayoutModalProps) => {
  const { visible, onClose, setLayout } = props;

  function handleSelect(type: string) {
    setLayout(type);
    onClose();
  }
  return (
    <Modal visible={visible}>
      <View style={styles.content}>
        <Text>Layout Modal</Text>
        <View style={styles.btns}>
          <Button title='Columnar' onPress={() => handleSelect('columnar')} />
          <Button title='Grid' onPress={() => handleSelect('grid')} />
        </View>

        <Button title='Cancel' onPress={onClose} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btns: {
    flexDirection: 'row',
  },
});
