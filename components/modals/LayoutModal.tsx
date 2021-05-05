import { Modal, StyleSheet, Text, View } from 'react-native';

import { CustomButton } from '../CustomButton';
import React from 'react';

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
        <Text
          style={{ fontSize: 22, alignSelf: 'flex-start', marginLeft: '12%' }}
        >
          Choose a layout:
        </Text>
        <View style={styles.btns}>
          <View style={{ width: 150, alignItems: 'center' }}>
            <CustomButton
              color="black"
              onPress={() => handleSelect('columnar')}
            >
              Columnar
            </CustomButton>
          </View>

          <View />
          <View style={{ width: 150, alignItems: 'center' }}>
            <CustomButton color="black" onPress={() => handleSelect('grid')}>
              Grid
            </CustomButton>
          </View>
        </View>
        <View
          style={{
            alignSelf: 'flex-start',
            marginLeft: '15%',
            marginVertical: 10,
          }}
        >
          <CustomButton color="red" onPress={onClose}>
            Cancel
          </CustomButton>
        </View>
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'silver',
    borderRadius: 20,
    height: '50%',
  },
});
