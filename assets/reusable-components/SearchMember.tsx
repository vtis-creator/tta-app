import * as React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { Formik, Field } from 'formik';
import CustomInput from '@/assets/reusable-components/customInput';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

import * as yup from 'yup';
import { BodyText } from './bodyText';
import { HeaderText } from './headerText';

const ButtonLabels = ['Student', 'Life', 'Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond'];

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
})

function SearchMember () {
  return (
    <View style={{marginBottom: 10}}>
      <Formik
          validationSchema={loginValidationSchema}
          initialValues={{
              fName: '',
              lName: '',
              email:'',
              phone:''
          }}
          onSubmit={values => console.log(values)}
      >
      {({
          handleSubmit, isValid
      }) => (
        <View>
          <Field
            component={CustomInput}
            name="fName"
            placeholder="First Name"
          />
          <Field
            component={CustomInput}
            name="lName"
            placeholder="Last Name"
          />
          <Field
            component={CustomInput}
            name="email"
            placeholder="Email"
          />
          <Field
            component={CustomInput}
            name="phone"
            placeholder="Phone Number"
          />

          <Button
            onPress={() =>handleSubmit}
            disabled={!isValid}
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
    shadowProp: {
      shadowColor: 'black',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    separator: {
      marginVertical: 8,
      width: '25%'
    },
    button: {
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderRadius: 4,
      backgroundColor: 'oldlace',
      alignSelf: 'flex-start',
      marginHorizontal: '1%',
      marginBottom: 15,
      minWidth: '48%',
      textAlign: 'center',
    },
    selected: {
      color: 'white',
      borderWidth: 0,
    },
    buttonLabel: {
      textAlign: 'center'
    },
    selectedLabel: {
      color: 'white',
    },
  });

export default SearchMember;