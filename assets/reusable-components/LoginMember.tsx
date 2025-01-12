import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { Formik, Field } from 'formik';
import { useRouter } from 'expo-router';
import { useDispatch } from 'react-redux';
import CustomInput from '@/assets/reusable-components/customInput';
import { setLoginInfo } from '../reducers/loginSlice';
import * as yup from 'yup';

// Validation Schema
const loginValidationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

function LoginMember() {
  const router = useRouter();
  const dispatch = useDispatch();

  const login = () => {
    dispatch(setLoginInfo());
    router.push('/');
  };

  return (
    <View >
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={loginValidationSchema}
        onSubmit={login}
      >
        {({ handleSubmit, errors, touched, isValid }) => (
          <View style={styles.formContainer}>
            {/* Username Field */}
            <Field
              component={CustomInput}
              name="username"
              placeholder="Username"
              style={styles.input}
            />

            {/* Password Field */}
            <Field
              component={CustomInput}
              name="password"
              placeholder="Password"
              secureTextEntry
              style={styles.input}
            />

            {/* Sign In Button */}
            <Button
              mode="contained"
              onPress={handleSubmit}
              disabled={!isValid}
              style={[styles.button, !isValid && styles.buttonDisabled]}
            >
              Sign In
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#F7F7F7',
  },
  formContainer: {
    marginTop: 5,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderColor: '#D1D5DB',
    borderWidth: 1,
  },
  button: {
    marginTop: 20,
    paddingVertical: 12,
    backgroundColor: '#800000',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 5,
  },
  buttonDisabled: {
    backgroundColor: '#c0c0c0'
  }
});

export default LoginMember;
