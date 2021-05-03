import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';

import {logos} from 'assets/images/images';
import tokenHelper from 'helpers/token';
import gate from 'gate';
import Button from '../../components/Button';
import {GlobalTextInput} from '../../components/Input';
import {useMutation} from 'react-query';

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

const Login = () => {
  const navigation = useNavigation();
  const {isLoading, mutate } = useMutation(gate.login, {
    onSuccess: (data) => {
      if (data?.status === 'SUCCESS') {
        alert(data?.message?.[0]);
        setToken(data?.data?.token);
      }
    },
    onError: (data) => {
      if (data?.status === 'FAIL') {
        alert(data?.message?.[0]);
      }
    },
  });

  const setToken = async (token) => {
    try {
      await tokenHelper.set(token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={{
        phoneNumber: '',
        password: '',
      }}
      onSubmit={(values) => {
        let password = values.password;
        let phone = values.phoneNumber;
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
            <View
              style={[
                styles.header,
                errors.phone && touched.phone
                  ? {borderColor: 'red'}
                  : {borderColor: '#ccc'},
              ]}>
              <Text
                style={[styles.headerText]}
                onPress={() => navigation.navigate('SignIn')}>
                EMAIL ADDRESS
              </Text>
              <Text
                style={[styles.headerTextRegister]}
                onPress={() => navigation.navigate('Login')}>
                PHONE NUMBER
              </Text>
            </View>
            <View style={styles.inputContainer}>
              <View
                style={[
                  styles.phoneNumber,
                  errors.phoneNumber && touched.phoneNumber
                    ? {borderColor: 'red'}
                    : {borderColor: '#ccc'},
                ]}>
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
                  secureTextEntry
                />
              </View>
            </View>
            <View style={styles.button}>
              <Button
                enabled={isValid}
                onPress={handleSubmit}
                title="Login"
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
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    bottom: 15,
    borderBottomWidth: 3,
    borderBottomColor: '#ccc',
  },
  instagramLogo: {
    height: 70,
    width: 200,
    bottom: 20,
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
  headerTextRegister: {
    padding: 20,
    color: 'black',
    borderRadius: 8,
    fontWeight: 'bold',
    fontSize: 16,
  },

  subtitle: {
    marginBottom: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    color: 'black',
    padding: 10,
    borderBottomColor: 'transparent',
    fontSize: 15,
  },
  errorText: {
    marginHorizontal: '10%',
    marginBottom: 5,
    color: '#EF4444',
    fontSize: 13,
  },
  errorTextPass: {
    marginHorizontal: '10%',
    marginBottom: 5,
    color: '#EF4444',
    fontSize: 13,
    top: 15,
  },
  phoneNumber: {
    borderRadius: 8,
    width: '90%',
    height: 58,
    borderWidth: 1,
    borderColor: '#ccc',
    bottom: 10,
    top: 1,
  },
  password: {
    borderRadius: 8,
    width: '90%',
    padding: 5,
    height: 60,
    borderWidth: 1,
    borderColor: '#ccc',
    top: 10,
    marginTop: 20,
  },
  configPassword: {
    paddingBottom: 25,
  },
  InputStyle: {
    borderRadius: 8,
    color: 'black',
    borderBottomColor: 'transparent',
  },
  userImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 10,
  },
  closeButtonContainer: {
    justifyContent: 'center',
    marginVertical: 3,
    width: '5%',
  },
  button: {
    paddingTop: 25,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
  },

  ActivityIndicator: {
    top: 40,
  },
});

export default Login;
