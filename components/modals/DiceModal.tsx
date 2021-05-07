import {
  Button,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
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
          backgroundColor: 'black',
        }}
      >
        <View
          style={{
            height: '50%',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ color: 'grey', textAlign: 'center' }}></Text>
          <TouchableOpacity
            onPress={() => {
              setRolledNum(Math.floor(Math.random() * 20 + 1));
            }}
          >
            <Text style={{ color: 'white', fontSize: 70, textAlign: 'center' }}>
              D20
            </Text>
          </TouchableOpacity>
          <Text style={{ color: 'white', fontSize: 50, textAlign: 'center' }}>
            {rolledNum}
          </Text>
          <TouchableOpacity onPress={() => setDiceModalVisible(false)}>
            <View
              style={{
                width: 200,
                //borderColor: 'grey',
                borderWidth: 6,
                borderRadius: 5,
                alignItems: 'center',
                height: 50,
                justifyContent: 'center',
                borderColor: 'rgba(158, 150, 150, .5)',
              }}
            >
              <Text style={{ color: 'white', fontSize: 22 }}>Close</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({});
