import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Modal,
  Button,
  TouchableOpacity,
} from 'react-native';

interface ChooseColorModalProps {
  visible: boolean;
  setVisible: Function;
  colors: string[];
  setColor: Function;
}
export const ChooseColorModal = (props: ChooseColorModalProps) => {
  const { visible, setVisible, colors, setColor } = props;

  return (
    <Modal visible={visible}>
      <View style={styles.content}>
        <View>
          {colors.map((color: string) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setColor(color);
                  setVisible();
                }}
              >
                <View
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    margin: 10,
                    backgroundColor: color,
                    borderColor: 'black',
                    borderWidth: 5,
                  }}
                ></View>
              </TouchableOpacity>
            );
          })}
        </View>
        <Button title='Close' onPress={() => setVisible()} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
