import {
  Button,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import React from 'react';

interface DiceModalProps {
  visible: boolean;
  setDiceModalVisible: Function;
}
export const DiceModal = (props: DiceModalProps) => {
  const { visible, setDiceModalVisible } = props;
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
          <Text style={{ color: 'grey', textAlign: 'center' }}>
            Die Modal TBD
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
