import React from 'react';
import {useState} from 'react';
import {Modal, View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import ModalPicker from './ModalPicker';

const ModalNumber = () => {
  const [chooseData, setChooseData] = useState('IR+98');
  const [visible, setVisible] = useState(false);

  const changeModalVisible = (bool) => {
      setVisible(bool)
  }
  const setData = (option) => {
    setChooseData(option)
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity 
      onPress={()=> changeModalVisible(true)}
      style={styles.touchableOpacity}>
        <Text style={styles.text}>{chooseData}</Text>
      </TouchableOpacity>
      <Modal 
      transparent={true} 
      animationType="fade" 
      visible={visible}
      nRequestClose = {() => changeModalVisible(false)}>
      <ModalPicker setData={setData} changeModalVisible={changeModalVisible} />
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
    backgroundColor: '#e6e6e6',
    paddingHorizontal: 20,
    marginHorizontal: 15,
    height: 25
  },
});
