import React, { Dispatch, SetStateAction } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import { Player } from '../../screens/ActivePlayersScreen';

interface ChooseNumPlayersProps {
  visible: boolean;
  onClose: Function;
  setPlayers: Dispatch<SetStateAction<Player[]>>;
}
export const ChooseNumPlayers = (props: ChooseNumPlayersProps) => {
  const { visible, onClose } = props;
  return (
    <Modal visible={visible} style={{ backgroundColor: 'black' }}>
      <View
        style={{ flex: 1, justifyContent: 'center', backgroundColor: 'black' }}
      >
        <View
          style={{
            height: 100,
            justifyContent: 'center',
            backgroundColor: 'black',
          }}
        >
          <Text style={{ ...styles.text, ...{ textAlign: 'left' } }}>
            Choose number of players:
          </Text>
        </View>
        <View style={styles.content}>
          <View style={styles.viewsContainer}>
            <TouchableOpacity>
              <View style={styles.view}>
                <Text style={styles.text}>2</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.view}>
                <Text style={styles.text}>3</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.view}>
                <Text style={styles.text}>4</Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => onClose()}>
            <View
              style={{
                width: 150,
                height: 50,
                borderWidth: 3,
                borderRadius: 20,
                borderColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={styles.text}>Close</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  viewsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  view: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderRadius: 20,
    borderWidth: 5,
    marginBottom: 150,
    marginHorizontal: 6,
  },
  text: {
    color: 'white',
  },
});
