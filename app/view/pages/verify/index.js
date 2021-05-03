import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';

import gate from 'gate';
import {logos} from 'assets/images/images';
import {GlobalTextInput, InputVerify} from '../../components/Input';
import Button from '../../components/Button';
import tokenHelper from 'helpers/token';
import {useMutation} from 'react-query';

const validationSchema = Yup.object().shape({
  verifyCode: Yup.string()
    .min(6, 'you should type more 6 ')
    .required('Required!!'),
});

const VerifyCode = ({route}) => {
  const phone = route.params.phone;

  const {isLoading, mutate} = useMutation(gate.verifyCode, {
    onSuccess: (data) => {
      console.log('data =>>', data);
      if (data?.status === 'SUCCESS') {
        alert(data?.message?.[0]);
        setToken(data?.data?.token);
      }
    },
    onError: (e) => {
      console.log('error =>', e);
    },
  });

  const setToken = (token) => {
    try {
      const res = tokenHelper.set(token);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  
  /*
  const mutate = async (values) => {
    mutation.isLoading(true);
    try {
      const res = await gate.verifyCode(values);
      mutation.data(res);
    } catch (e) {
      mutation.isError(e);
    } finally {
      mutation.isLoading(false);
    }
  };
  const token = setToken(gate.verifyCode?.data?.token);
  
    if (mutation.isSuccess) {
      mutate(token)
      console.log('isSuccess')
    } */

  return (
    <Formik
      initialValues={{
        verifyCode: '',
      }}
      onSubmit={(values) => {
        let verifyCode = values.verifyCode;
        verifyCode = '123456';
        mutate({
          phone,
          verifyCode,
        });
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
            <View style={styles.verify}>
              <Image style={styles.Image} source={logos.instagramLogo} />
              <Text style={styles.text}>Enter Verify Code</Text>
            </View>
            <View
              style={[
                styles.inputVerify,
                errors.verifyCode && touched.verifyCode
                  ? {borderColor: 'red'}
                  : {borderColor: '#ccc'},
              ]}>
              <GlobalTextInput
                values={values.verifyCode}
                error={errors.verifyCode}
                touched={touched.verifyCode}
                onBlur={handleBlur('verifyCode')}
                onChangeText={handleChange('verifyCode')}
                keyboardType={'number-pad'}
                placeholder={'Verification code...'}
                style={styles.InputStyle}
              />
            </View>
            <View style={styles.Button}>
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
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#f0f0f0',
  },
  verify: {
    alignItems: 'center',
    paddingVertical: 15,
  },
  inputVerify: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
    height: 55,
  },
  Image: {
    height: 70,
    width: 200,
    bottom: 100,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  Button: {
    paddingLeft: 21,
    marginTop: 18,
  },
  InputStyle: {
    borderRadius: 8,
    color: 'black',
    borderBottomColor: 'transparent',
  },
});

export default VerifyCode;
