import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  ActivityIndicator,
  Image
} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import gate from '../../../../../../gate';
import Token from '../../../../../../helpers/token';
import { logos } from '../../../../../../assets/images/images';
import { InputVerify } from '../../../../../components/Input';
import Button from '../../../../../components/Button';

const validationSchema = Yup.object().shape({
  verifyCode: Yup.string()
    .min(6, 'you should type more 6 ')
    .required('Required!!'),
});

const VerifyCode = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  const onSubmit = async () => {
    try {
      const res = await gate.verifyCode({
        phone: '09130000038',
        verifyCode: '123456',
      });
      console.log(res.data.token);
      if (res.status == 'SUCCESS') {
      setIsLoading(true);
        console.log({res});
        (await Token.set(res?.data?.token));
      } else if (res.status === 'FAIL') {
          setIsLoading(false);
        console.log({res});
      }
    } catch (e) {
      console.log(e);
    } finally {
      
    }
  };
  return (
    <Formik
      initialValues={{
        verifyCode: '',
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
            <View style={styles.verify}>
              <Image style={styles.Image} source={logos.instagramLogo} />
              <Text style={styles.text}>Enter Verify Code</Text>
            </View>
            <InputVerify
              values={values}
              errors={errors}
              touched={touched}
              handleBlur={handleBlur}
              handleChange={handleChange}
            />
            <View style={styles.Button}>
            <Button
              isValid={isValid}
              handleSubmit={handleSubmit}
              values={values}
              text="Next"
              />
              </View>

            <View>
              {isLoading && (
                <ActivityIndicator
                  style={styles.ActivityIndicator}
                  size="large"
                  color="black"
                />
              )}
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
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    borderColor: '#ccc',
  },
  inputPassword: {
    borderWidth: 0.9,
    borderRadius: 8,
    width: 265,
    right: 50,
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
    paddingBottom: 39,
  },
  configPassword: {
    paddingBottom: 25,
  },
  number: {
    flexDirection: 'row',
  },
  Button: {
    paddingLeft: 21
  }
});

export default VerifyCode;
