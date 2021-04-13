import React from 'react';
import {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';

import images from '../../../../assets/images/images';
import Error from './Error';
import ModalNumber from './Modal/index';
import Success from './Success';

export function PhoneNumber({navigation}) {
  const [number, setNumber] = useState();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const validate = (number) => {
    const expression = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    return expression.test(String(number).toLowerCase());
  };


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={images.logos.user} />
      </View>
      <View style={styles.switch}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('PhoneNumber');
            setNumber('');
            setError('');
            setSuccess('');
          }}
          style={styles.button1}>
          <Text>PHONE NUMBER</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Email');
            setNumber('');
            setError('');
            setSuccess('');
          }}
          style={styles.button2}>
          <Text>EMAIL ADDRESS</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <ModalNumber  /> 
        <TextInput
          style={{
            width: 225,
            height:40,
            borderColor: error ? 'red' : success ? 'green' : 'black',
            borderWidth: 1,
            borderRadius: 20,
            marginVertical: 12,
            bottom:10
          }}
          placeholder="Phone Number"
          placeholderTextColor={'darkgray'}
          value={number}
          onChangeText={setNumber}
          
        />
      </View>
      <View>
        <Error error={error} />
        <Success success={success} />
      </View>
      <View>
        <View style={styles.containerText}>
          <Text style={styles.smsText}>
            You may receive SMS updates from instagram and can opt out at any
            time
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.next}
          disabled={!number}
          onPress={() => {
            validate(number) 
              ? setSuccess('success number')
              : setError('Error: invalid number please enter a valid 10 number ');
            setNumber('');
          }}>
          <Text style={styles.text}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: '#ebebeb',
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
    marginBottom: 10,
    bottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    height: 50,
    right: 50
  },  
  switch: {
    display: 'flex',
    flexDirection: 'row',
    margin: 40,
    bottom: 20,
    padding: 5,
  },
  button2: {
    padding: 5,
    paddingLeft: 30,
  },
  button1: {
    padding: 5,
    paddingRight: 30,
  },
  buttonContainer: {
    width: '70%',
  },
  next: {
    backgroundColor: '#4f98f7',
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    borderRadius: 8,
    top: 20
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
  containerText: {
    width: '70%',
    paddingBottom: 15,
    bottom: 20,
  },
  smsText: {
    top: 40,
    alignItems: 'center',
    fontSize: 13,
  },
});
