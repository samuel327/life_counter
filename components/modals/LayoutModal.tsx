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
            <TouchableOpacity
              style={{ overflow: 'hidden' }}
              onPress={() => handleSelect('columnar')}
            >
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'silver',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden',
                  borderTopLeftRadius: 3,
                }}
              >
                <View style={{ width: 150, alignItems: 'center' }}>
                  <CustomButton
                    color='black'
                    onPress={() => handleSelect('columnar')}
                  >
                    Stacked
                  </CustomButton>
                </View>
              </View>
            </TouchableOpacity>

            <View />
            <View
              style={{
                height: 300,
                width: 0,
                borderColor: 'black',
                borderWidth: 1,
              }}
            ></View>
            <TouchableOpacity
              style={{ overflow: 'hidden' }}
              onPress={() => handleSelect('grid')}
            >
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'silver',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden',
                  borderTopRightRadius: 3,
                }}
              >
                <View style={{ width: 150, alignItems: 'center' }}>
                  <CustomButton
                    color='black'
                    onPress={() => handleSelect('grid')}
                  >
                    Grid
                  </CustomButton>
                </View>
              </View>
            </TouchableOpacity>
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
    overflow: 'hidden',
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
    overflow: 'hidden',
  },
  text: {
    color: 'white',
    fontSize: 22,
  },
});
