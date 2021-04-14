import React from 'react';
import {useState} from 'react';
import {Modal, View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import ModalPicker from './ModalPicker';

const ModalNumber = () => {
  const [chooseData, setChooseData] = useState('IR+98');
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity 
      onPress={()=> setVisible(true)}
      style={styles.touchableOpacity}>
        <Text style={styles.text}>{chooseData}</Text>
      </TouchableOpacity>
      <Modal 
      transparent={true} 
      animationType="fade" 
      visible={visible}
      >
      <ModalPicker setChooseData={setChooseData} setVisible={setVisible} />
      </Modal>
    </View>
  );
};
export default ModalNumber;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  text: {
    fontSize: 13,
  },
  touchableOpacity: {
    backgroundColor: 'transparent',
    height: 25,
    width: 135
  },
});
