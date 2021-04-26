import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

export const InputPhoneNumber = ({
  errors,
  touched,
  handleBlur,
  handleChange,
  values,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.phoneTextInputContainer}>
        <TextInput
          style={styles.inputPassword}
          placeholder="Phone Number"
          placeholderTextColor="#686868"
          onChangeText={handleChange('phoneNumber')}
          value={values.phoneNumber}
          onBlur={handleBlur('phoneNumber')}
          keyboardType="number-pad"
        />
      </View>
      {errors.phoneNumber && touched.phoneNumber && (
        <Text style={styles.errorTextPhoneNumber}>{errors.phoneNumber}</Text>
      )}
    </View>
  );
};
export const InputPassword = ({
  errors,
  touched,
  handleBlur,
  handleChange,
  values,
}) => {
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#686868"
          onChangeText={handleChange('password')}
          value={values.password}
          onBlur={handleBlur('password')}
          keyboardType="number-pad"
          
        />
      </View>
      {errors.password && touched.password && (
        <Text style={styles.errorTextPassword}>{errors.password}</Text>
      )}
    </View>
  );
};

export const InputVerify = ({
  handleChange,
  values,
  handleBlur,
  touched,
  errors,
}) => {
  return (
    <View style={[styles.password]}>
      <TextInput
        style={[
          styles.inputVerify,
          errors.verifyCode && touched.verifyCode
            ? {borderColor: 'red'}
            : {borderColor: '#ccc'},
        ]}
        placeholder="Verify Code..."
        onChangeText={handleChange('verifyCode')}
        value={values.password}
        onBlur={handleBlur('verifyCode')}
        keyboardType="number-pad"
      />
      {errors.verifyCode && touched.verifyCode && (
        <Text style={styles.errorTextVerify}>{errors.verifyCode}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  phoneTextInputContainer: {
    padding: 5,
  },
  inputPassword: {
    borderRadius: 8,
    color: 'black',
    borderBottomColor: 'transparent',
    left: 40,
  },
  errorTextPassword: {
    marginHorizontal: '1%',
    marginBottom: 5,
    color: '#EF4444',
    fontSize: 13,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
  },
  errorTextPhoneNumber: {
    marginHorizontal: '1%',
    marginBottom: 5,
    color: '#EF4444',
    fontSize: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderRadius: 8,
    color: 'black',
    padding: 10,
    borderBottomColor: 'transparent',
  },
  password: {
    paddingBottom: 39,
  },
  inputVerify: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    borderColor: '#ccc',
  },
  errorTextVerify: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
