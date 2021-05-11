import {
  Button,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import React, { useState } from 'react';

interface DiceModalProps {
  visible: boolean;
  setDiceModalVisible: Function;
}
export const DiceModal = (props: DiceModalProps) => {
  const { visible, setDiceModalVisible } = props;

  const [rolledNum, setRolledNum] = useState<number>();
  return (
    <Modal visible={visible} animationType='fade'>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'grey',
        }}
      >
        <View
          style={{
            height: '50%',
            justifyContent: 'space-between',
          }}
        >
          {!rolledNum && (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setRolledNum(Math.floor(Math.random() * 20 + 1));
                  setTimeout(() => {
                    setRolledNum(undefined);
                  }, 1000);
                }}
              >
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    source={require('../../assets/dice_images/skuff_d20.png')}
                  />
                </View>
              </TouchableOpacity>
            </View>
          )}
          {rolledNum && (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 90,
                height: 210,
              }}
            >
              <Text
                style={{
                  color: 'white',
                  fontSize: 50,
                  textAlign: 'center',
                }}
              >
                {rolledNum}
              </Text>
            </View>
          )}
          <TouchableOpacity onPress={() => setDiceModalVisible(false)}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 100,
              }}
            >
              <View
                style={{
                  width: 200,
                  //borderColor: 'grey',
                  borderWidth: 6,
                  borderRadius: 5,
                  alignItems: 'center',
                  height: 50,
                  justifyContent: 'center',
                  borderColor: 'rgba(1, 150, 150, .9)',
                }}
              >
                <Text
                  style={{ color: 'white', fontSize: 22, textAlign: 'center' }}
                >
                  Close
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({});
