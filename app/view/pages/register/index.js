import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';

import gate from 'gate';
import Button from '../../components/Button';
import {GlobalTextInput, InputPassword} from '../../components/Input';

import ModalNumber from './modal/index';
import {logos} from 'assets/images/images';
import useApi from 'helpers/useApi';

const PhoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

const validationSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .typeError('you should type number!!!!!')
    .matches(PhoneRegex, 'Wrong number, Please write correct number!!!')
    .required('Required!!'),
  password: Yup.string()
    .min(8, 'you should type more 8 ')
    .max(15, 'Too Long!')
    .required('Required!!'),
});

const Register = () => {
  const [data, isLoading, error, mutate] = useApi(gate.register);
  const [phone, setPhone] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    if (data.status == 'SUCCESS') {
      alert(data.message[0]);
      navigation.navigate('Verify', {phone});
    }
  }, [data]);

  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <Formik
      initialValues={{
        phoneNumber: '',
        password: '',
      }}
      onSubmit={(values) => {
        let password = values.password;
        let phone = values.phoneNumber;
        setPhone(values.phoneNumber);
        mutate({password, phone});
      }}
      validationSchema={validationSchema}>
      {({
        handleChange,
        values,
        isValid,
        handleSubmit,
        handleBlur,
        touched,
        errors,
      }) => {
        return (
          <View style={styles.container}>
            <Image source={logos.user} style={styles.userImage} />
            <Image source={logos.instagramLogo} style={styles.instagramLogo} />
            <View style={[styles.header]}>
              <Text
                style={[styles.headerTextLogin]}
                onPress={() => navigation.navigate('SignIn')}>
                EMAIL ADDRESS
              </Text>
              <Text
                style={[styles.headerText]}
                onPress={() => navigation.navigate('Login')}>
                PHONE NUMBER
              </Text>
            </View>
            <View style={styles.phoneNumber}>
              <View
                style={[
                  styles.phoneInputContainer,
                  errors.phoneNumber && touched.phoneNumber
                    ? {borderColor: 'red'}
                    : {borderColor: '#ccc'},
                ]}>
                <View style={styles.modal}>
                  <ModalNumber />
                </View>
                <View style={styles.verticleLine} />
                <GlobalTextInput
                  value={values.phoneNumber}
                  error={errors.phoneNumber}
                  touched={touched.phoneNumber}
                  onBlur={handleBlur('phoneNumber')}
                  onChangeText={handleChange('phoneNumber')}
                  keyboardType="number-pad"
                  placeholder={'Phone number...'}
                  style={styles.InputStyle}
                />
              </View>
            </View>
            <View
              style={[
                styles.password,
                errors.password && touched.password
                  ? {borderColor: 'red'}
                  : {borderColor: '#ccc'},
              ]}>
              <GlobalTextInput
                values={values.password}
                error={errors.password}
                onBlur={handleBlur('password')}
                touched={touched.password}
                onChangeText={handleChange('password')}
                keyboardType="number-pad"
                style={styles.InputStyle}
                placeholder={'Password'}
              />
            </View>

            <View>
              <Text style={styles.phoneMessage}>
                You May receive SMS updates from Instagram and can opt out at
                any time.
              </Text>
            </View>
            <View>
              <Button
                enabled={isValid}
                onPress={handleSubmit}
                title="Next"
                isLoading={isLoading}
              />
            </View>
          </View>
        );
      }}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    borderBottomWidth: 3,
    bottom: 15,
    borderBottomColor: '#ccc',
  },
  headerText: {
    padding: 20,
    color: 'black',
    borderBottomColor: 'black',
    borderBottomWidth: 3,
    borderRadius: 8,
    fontWeight: 'bold',
    fontSize: 16,
  },
  InputStyle: {
    borderRadius: 8,
    color: 'black',
    borderBottomColor: 'transparent',
  },
  InputPassword: {
    borderRadius: 8,
    color: 'black',
    borderBottomColor: 'transparent',
    top: 20
  },
  headerTextLogin: {
    padding: 20,
    color: 'black',
    borderRadius: 8,
    fontWeight: 'bold',
    fontSize: 16,
  },

  title: {
    fontSize: 28,
  },
  subtitle: {
    marginBottom: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
  input: {
    borderRadius: 8,
    color: 'black',
    padding: 10,
    borderBottomColor: 'transparent',
  },
  
  inputPassword: {
    borderRadius: 8,
    color: 'black',
    padding: 10,
    borderBottomColor: 'transparent',
  },
  ActivityIndicator: {
    top: 40,
  },
  errorText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 12,
    left: 20,
    top: 8,
  },
  errorTextPhoneNumber: {
    marginHorizontal: '10%',
    marginBottom: 5,
    color: '#EF4444',
    fontSize: 13,
  },
  phoneNumber: {
    paddingBottom: 25,
  },
  phoneMessage: {
    textAlign: 'center',
    marginHorizontal: '10%',
    marginVertical: 29,
    color: '#5bc4fc',
    fontSize: 13,
  },
  password: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    width: '97%',
    borderColor: '#ccc',
    marginHorizontal: '15%',
    height: 51,
    justifyContent: 'center',
    top: 12
  },

  number: {
    flexDirection: 'row',
    left: 22,
  },
  userImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 5,
  },
  instagramLogo: {
    height: 70,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 10,
  },
  button: {
    justifyContent: 'center',
    borderRadius: 20,
    width: 280,
    height: 45,
    backgroundColor: '#4287f5',
    left: 19,
  },
  error: {justifyContent:'center',alignItems:'center'},

  phoneInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    height: 51,
    width: '97%',
  },
  verticleLine: {
    height: '75%',
    width: 1.5,
    backgroundColor: '#ccc',
    alignSelf: 'center',
    marginVertical: 2,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Register;
