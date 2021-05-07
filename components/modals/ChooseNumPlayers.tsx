import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';

interface ChooseNumPlayersProps {
  visible: boolean;
  onClose: Function;
}
export const ChooseNumPlayers = (props: ChooseNumPlayersProps) => {
  const { visible, onClose } = props;
  return (
    <Modal visible={visible}>
      <View style={styles.content}>
        <Text>TBD</Text>
        <TouchableOpacity onPress={() => onClose()}>
          <Text>Close</Text>
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
  },
});
