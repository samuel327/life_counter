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
      <View style={styles.content}>
        {!rolledNum && (
          <View>
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

              height: 300,
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
          <View style={styles.closeBtnContainer}>
            <Text style={styles.closeBtnTxt}>Close</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  closeBtnContainer: {
    width: 200,
    borderWidth: 6,
    borderRadius: 5,
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    borderColor: 'rgba(1, 150, 150, .9)',
    marginBottom: 50,
  },
  closeBtnTxt: { color: 'white', fontSize: 22, textAlign: 'center' },
});
