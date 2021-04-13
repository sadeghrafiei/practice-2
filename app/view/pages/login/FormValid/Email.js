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
import Success from './Success';

export function EmailScreen({navigation}) {
  const [email, setEmail] = useState();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const DATA = ['sadeghrafiei@gmail.com', 'sadegh@gmail.com'];

  const validate = (email) => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    return expression.test(String(email).toLowerCase());
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
            setEmail('');
            setError('');
            setSuccess('');
          }}
          style={styles.button1}>
          <Text>PHONE NUMBER</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Email');
            setEmail('');
            setError('');
            setSuccess('');
          }}
          style={styles.button2}>
          <Text>EMAIL ADDRESS</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          style={{
            width: 300,
            borderColor: error ? 'red' : success ? 'green' : 'black',
            borderWidth: 1,
            borderRadius: 20,
            padding: 10,
            marginVertical: 12,
            bottom: 50,
          }}
          placeholder="Email"
          placeholderTextColor={'darkgray'}
          keyboardType={'email-address'}
          value={email}
          onChangeText={setEmail}
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
          disabled={!email}
          onPress={() => {
            validate(email) && DATA[(0, 1)] == email
              ? setSuccess('success email')
              : setError('invalid email');
            setEmail('');
          }}
          style={styles.next}>
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
  input: {
    width: 300,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    marginVertical: 12,
    bottom: 50,
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
    top: 50
  },
  next: {
    bottom: 25,
    backgroundColor: '#4f98f7',
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    borderRadius: 8,
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
    alignItems: 'center',
    fontSize: 13,
    top:30
  },
  textInput: {

  }
});
