import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { logos } from '../../../../../../assets/images/images';
import Token from '../../../../../../helpers/token';
import gate from '../../../../../../gate';
import Button from '../../../../../components/Button';
import { InputPassword, InputPhoneNumber } from '../../../../../components/Input';

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
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation()

  
  const onSubmit = async () => {
    try {
      const res = await gate.Login({
        phone: '09130000037',
        password: '12345678',
      });
      console.log({res})
      if(res.status == 'SUCCESS') {
        await Token.set(res?.data?.token);
      }else if (res.status == "FAIL") {
        console.log({res})
      }
    }catch(e) {
      console.log(e)
    }
    finally{
      setIsLoading(true);
    }
  };

  return (
    <Formik
      initialValues={{
        phoneNumber: '',
        password: '',
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
                Login
              </Text>
              <Text
                style={[styles.headerTextRegister]}
                onPress={() => navigation.navigate('Login')}>
                Register
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
                <InputPhoneNumber
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
              </View>

              <View
                style={[
                  styles.password,
                  errors.password && touched.password
                    ? {borderColor: 'red'}
                    : {borderColor: '#ccc'},
                ]}>
                <InputPassword
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
              </View>
            </View>
            <View style={styles.button}>
            <Button
              isValid={isValid}
              handleSubmit={handleSubmit}
              values={values}
              text="Login"
              />
              </View>
            <View>
              {isLoading && (
                <ActivityIndicator
                  style={styles.ActivityIndicator}
                  color="black"
                  size="large"
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
    alignItems: 'center',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    padding: 14,
    bottom: 10,
  },
  instagramLogo: {
    height: 70,
    width: 200,
  },
  headerText: {
    padding: 20,
    color: 'black',
    borderBottomColor: '#ccc',
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
    justifyContent: 'center',
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
    height: 60,
    borderWidth: 1,
    borderColor: '#ccc',
    bottom: 10,
  },
  password: {
    borderRadius: 8,
    width: '90%',
    padding: 5,
    height: 60,
    borderWidth: 1,
    borderColor: '#ccc',
    top: 10,
  },
  configPassword: {
    paddingBottom: 25,
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
    paddingRight: 20
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
  },
  disabledButton: {
    opacity: 0.7,
    backgroundColor: '#93C5FD',
    borderRadius: 5,
    marginHorizontal: '10%',
    height: 45,
    justifyContent: 'center',
  },
  enabledButton: {
    opacity: 1,
    backgroundColor: '#3B82F6',
    borderRadius: 5,
    marginHorizontal: '10%',
    height: 45,
    justifyContent: 'center',
  },
  ActivityIndicator: {
    top: 40,
  },
});

export default Login;
