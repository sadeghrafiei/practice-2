import React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';

const OPTION = [
  'IR +98',
  'Afghanistan +93',
  ' ISLAND +358',
  'Albania +355',
  'Austria +43',
  'Belgium	+32',
  'Afghanistan +93',
  ' Islands +358',
  'Albania +355',
  'Austria +43',
  'Belgium	+32',
  'IR +98',
  'Afghanistan +93',
  ' Islands +358',
  'Albania+355',
  'Austria+43',
  'Belgium	+32',
  'Afghanistan+93',
  ' Islands+358',
  'Albania+355',
  'Austria+43',
  'Belgium	+32',
];

const ModalPicker = ({setVisible, setChooseData}) => {
  const onItemPress = (option) => {
    setVisible(false);
    setChooseData(option);
  };

  const [filtered, setFiltered] = useState(OPTION)
  const [searching, setSearching] = useState(false)
  const onSearch = (text) => {
    if (text) {
      setSearching(true)
      const temp = text.toUpperCase() 

      const tempList = OPTION.filter(item => {
        if (item.includes(temp))
          return item
      })
      setFiltered(tempList)
    }
    else {
      setSearching(false)
      setFiltered(OPTION)
    }

  }
  return (
    <TouchableOpacity
      onPress={() => setVisible(false)}
      style={styles.container}>
      <View style={styles.modal}>
        <ScrollView>
          <TextInput
            style={styles.input}
            onChangeText={onSearch}
            placeholder="Search country code..."
            placeholderTextColor="white"
          />
          { 
            filtered.length ?
          filtered.map((item, index) => {
            return (
              <TouchableOpacity
                style={styles.option}
                key={index}
                onPress={() => onItemPress(item)}>
                <Text style={styles.text}>{item}</Text>
              </TouchableOpacity>
            );
          }) :
          <View
              style={styles.noResultView}>
              <Text style={styles.noResultText}>No search items matched</Text>
          </View>}
        </ScrollView>
      </View>
    </TouchableOpacity>
  );
};

export default ModalPicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    top: 30,
    left: 70,
  },
  modal: {
    backgroundColor: 'black',
    borderRadius: 10,
    height: 500,
    width: 250,
  },
  option: {
    alignItems: 'flex-start',
  },
  text: {
    margin: 20,
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    borderColor: 'white',
    borderWidth: 1,
    color: 'white',
  },
});
