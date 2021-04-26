import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';
import ModalNumber from '../../modal';
import {useNavigation} from '@react-navigation/native';
import gate from '../../../../../../gate';
import {logos} from '../../../../../../assets/images/images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../../../../../components/Button';
import {InputPhoneNumber , InputPassword} from '../../../../../components/Input';

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
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  const onSubmit = async () => {
    try {
      const res = await gate.Register({
        phone: '09130000041',
        password: '12345678',
      });
      console.log(res.status);
      {
        if (res.status === 'FAIL') {
          console.log('error');
          setIsLoading(false)
          //  navigation.navigate('SignIn');
        } else if (res.status == 'SUCCESS') {
          setIsLoading(true);
          navigation.navigate('Verify');
        }
      }
    } catch (e) {
      setError(e);
      console.warn(e);
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
            <View style={[styles.header]}>
              <Text
                style={[styles.headerTextLogin]}
                onPress={() => navigation.navigate('SignIn')}>
                Login
              </Text>
              <Text
                style={[styles.headerText]}
                onPress={() => navigation.navigate('Login')}>
                Register
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
                <InputPhoneNumber
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
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
              <InputPassword
                values={values}
                errors={errors}
                touched={touched}
                handleBlur={handleBlur}
                handleChange={handleChange}
              />
            </View>
           
            <View>
              <Text style={styles.phoneMessage}>
                You May receive SMS updates from Instagram and can opt out at
                any time.
              </Text>
            </View>
            <Button
              isValid={isValid}
              handleSubmit={handleSubmit}
              values={values}
              text="Next"
            />
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
  },
  header: {
    flexDirection: 'row',
    padding: 14,
    bottom: 10,
  },
  headerText: {
    padding: 20,
    color: 'black',
    borderBottomColor: '#c4c4c4',
    borderBottomWidth: 3,
    borderRadius: 8,
    fontWeight: 'bold',
    fontSize: 16,
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
  phoneTextInputContainer: {
    justifyContent: 'center',
    width: '65%',
    padding: 5,
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
    marginVertical: 15,
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
  },

  number: {
    flexDirection: 'row',
    left: 22,
  },
  userImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 10,
  },
  button: {
    justifyContent: 'center',
    borderRadius: 20,
    width: 280,
    height: 45,
    backgroundColor: '#4287f5',
    left: 19,
  },

  phoneInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    marginHorizontal: '10%',
    height: 51,
  },
  verticleLine: {
    height: '75%',
    width: 1.5,
    backgroundColor: '#ccc',
    alignSelf: 'center',
    marginVertical: 2,
    left: 40
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    left: 49
  },
});

export default Register;
