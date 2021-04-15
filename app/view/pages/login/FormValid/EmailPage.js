import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Button,
} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';


const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
  });

const EmailPage = () => {
  const onSubmit =  () => {
    alert('Success Login')
  };

  return (
    <Formik
      initialValues={{
        email: ''
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({handleChange, values, isValid ,handleSubmit, handleBlur, touched, errors}) => {
        return (
          <View style={styles.container}>
            <View style={styles.phoneNumber}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={handleChange('email')}
                value={values.phoneNumber}
                onBlur={handleBlur('email')}
              />
              {errors.email && touched.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
            </View>
            <Button title={'Next'} disabled={!isValid || values.email === ''} onPress={handleSubmit} />
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
    borderWidth: 0.5,
    borderRadius: 8,
    padding: 12,
  },
  errorText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 12,
  },
  phoneNumber: {
      paddingBottom:25
  },
  password: {
      paddingBottom: 20
  },
  configPassword: {
      paddingBottom: 25
  }
});

export default EmailPage;
