import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import CustomInput from '@/assets/reusable-components/customInput';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email Address is required'),
  phone: yup
    .string()
    .matches(/^\d{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
});

const SearchMember = () => {
  return (
    <ScrollView style={styles.container}>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{
          fName: '',
          lName: '',
          email: '',
          phone: '',
        }}
        onSubmit={(values) => console.log(values)}>
        {({ handleSubmit, isValid }) => (
          <View style={styles.formContainer}>
            <Field
              component={CustomInput}
              name="fName"
              placeholder="First Name"
              style={styles.input}
            />
            <Field
              component={CustomInput}
              name="lName"
              placeholder="Last Name"
              style={styles.input}
            />
            <Field
              component={CustomInput}
              name="email"
              placeholder="Email"
              keyboardType="email-address"
              style={styles.input}
            />
            <Field
              component={CustomInput}
              name="phone"
              placeholder="Phone Number"
              keyboardType="numeric"
              style={styles.input}
            />

            <Button
              mode="contained"
              onPress={handleSubmit}
              disabled={!isValid}
              style={styles.submitButton}
              labelStyle={styles.submitButtonText}>
              Search
            </Button>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 20,
  },
  formContainer: {
    marginTop: 10,
  },
  input: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 2,
    paddingVertical: 0.5, // Less height
    marginVertical: 5,
    marginBottom: 5,
    fontSize: 14,
    color: '#999', // Grey text
    color: '#333',
  },
  submitButton: {
    marginTop: 20,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: '#800000',
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});

export default SearchMember;
