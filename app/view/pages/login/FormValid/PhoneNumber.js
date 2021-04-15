import React from 'react';
import {View, TextInput, StyleSheet, Text, Button} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';
import ModalNumber from './Modal';

const PhoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

const validationSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .typeError('you should type number!!!!!')
    .matches(PhoneRegex , 'Wrong number, Please write correct number!!!')
    .min(11, 'Too Short!')
    .required('Required!!'),
  password: Yup.string()
    .min(8, 'you should type more 8 ')
    .max(15, 'Too Long!')
    .required('Required!!'),
  configPassword: Yup.string()
    .required('Required!!')
    .oneOf(
      [Yup.ref('password'), null],
      'Wrong Password!! They are not similar',
    ),
});

const PhoneNumberPage = () => {
  const onSubmit = () => {
    alert('Success Login');
  };

  return (
    <Formik
      initialValues={{
        phoneNumber: '',
        password: '',
        configPassword: '',
      }}
      onSubmit={onSubmit}
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
            <View style={styles.phoneNumber}>
            <View style={styles.number}>
            <ModalNumber />
              <TextInput
                style={styles.inputPassword}
                placeholder="PhoneNumber"
                onChangeText={handleChange('phoneNumber')}
                value={values.phoneNumber}
                onBlur={handleBlur('phoneNumber')}
              />
              </View>
              {errors.phoneNumber && touched.phoneNumber && (
                <Text style={styles.errorText}>{errors.phoneNumber}</Text>
              )}
            </View>
            <View style={styles.password}>
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                  value={values.password}
                  onBlur={handleBlur('password')}
                />
              
              {errors.password && touched.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
            </View>
            <View style={styles.configPassword}>
              <TextInput
                style={styles.input}
                placeholder="configPassword"
                onChangeText={handleChange('configPassword')}
                value={values.configPassword}
                onBlur={handleBlur('configPassword')}
              />
              {errors.configPassword && touched.configPassword && (
                <Text style={styles.errorText}>{errors.configPassword}</Text>
              )}
            </View>
            <Button
              title={'Next'}
              disabled={!isValid || values.password === ''}
              onPress={handleSubmit}
            />
          </View>
        );
      }}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
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
    borderWidth: 0.9,
    borderRadius: 8,
    padding: 12,
  },
  inputPassword: {
    borderWidth: 0.9,
    borderRadius: 8,
    width: 265,
    right: 50
  },
  errorText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 12,
  },
  phoneNumber: {
    paddingBottom: 25,
  },
  password: {
    paddingBottom: 20,
  },
  configPassword: {
    paddingBottom: 25,
  },
  number: {
    flexDirection: 'row'
  }
});

export default PhoneNumberPage;
