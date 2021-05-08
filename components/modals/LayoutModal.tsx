import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { CustomButton } from '../CustomButton';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
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
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',

            justifyContent: 'center',
            marginVertical: 50,
          }}
        >
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <TouchableOpacity
              onPress={onClose}
              style={{
                backgroundColor: 'grey',
                borderRadius: 37.5,
                height: 75,
                width: 75,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  backgroundColor: 'black',
                  height: 70,
                  width: 70,
                  borderRadius: 35,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <MaterialCommunityIcons name='close' size={50} color='red' />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            borderRadius: 5,
            borderColor: 'grey',
            borderWidth: 2,
            width: 150,
            height: 50,
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: 5,
            margin: 15,
          }}
        >
          <Text
            style={{
              fontSize: 22,

              color: 'white',
            }}
          >
            Select layout:
          </Text>
        </View>
        <View style={styles.content}>
          <View style={styles.btns}>
            <View style={{ width: 150, alignItems: 'center' }}>
              <CustomButton
                color='white'
                onPress={() => handleSelect('columnar')}
              >
                Columnar
              </CustomButton>
            </View>

            <View />
            <View
              style={{
                height: 300,
                width: 0,
                borderColor: 'white',
                borderWidth: 1,
              }}
            ></View>
            <View style={{ width: 150, alignItems: 'center' }}>
              <CustomButton color='white' onPress={() => handleSelect('grid')}>
                Grid
              </CustomButton>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 10,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  btns: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 20,
    height: '50%',
    borderWidth: 3,
    borderColor: 'silver',
  },
  text: {
    color: 'white',
    fontSize: 22,
  },
});
