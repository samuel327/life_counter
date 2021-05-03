import React from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';

interface LayoutModalProps {
  visible: boolean;
}
export const LayoutModal = (props: LayoutModalProps) => {
  const { visible } = props;
  return <Modal></Modal>;
};
