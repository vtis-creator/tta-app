import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { Formik, Field } from 'formik';
import { useRouter } from 'expo-router';
import { useDispatch } from 'react-redux';

import CustomInput from '@/assets/reusable-components/customInput';
import { setLoginInfo } from '../reducers/loginSlice';

import * as yup from 'yup';

// const loginValidationSchema = yup.object().shape({
//   email: yup
//     .string()
//     .email("Please enter valid email")
//     .required('Email Address is Required'),
//   password: yup
//     .string()
//     .min(8, ({ min }) => `Password must be at least ${min} characters`)
//     .required('Password is required'),
// })

function LoginMember () {
  const router = useRouter();
  const dispatch = useDispatch()

  const login = () => {
    console.log('hit')
    dispatch(setLoginInfo())
    router.push('/');
  }
  return (
    <View style={{marginBottom: 10}}>
      <Formik
          initialValues={{
              username: '',
              password: '',
          }}
          onSubmit={(values) => login()}
      >
      {({
          handleSubmit
      }) => (
        <View>
          <Field
            component={CustomInput}
            name="username"
            placeholder="Username"
          />
          <Field
            component={CustomInput}
            name="password"
            placeholder="Password"
            secureTextEntry
          />

          <Button
            onPress={handleSubmit}
          >
          Sign In
          </Button>
        </View>
      )}
      </Formik>
    </View>
)};

const styles = StyleSheet.create({
    container: {
      marginTop: 30
    },
    error: {
      color: 'red'
    },
    inputContainer: {
      flex:1,
      padding: 5,
      marginBottom: 10
    },
    text: {
      color: '#fff',
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'repeat',
    },
    inputs: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 10,
      borderWidth: 1,
      borderColor: 'grey'
    },
  });

export default LoginMember;