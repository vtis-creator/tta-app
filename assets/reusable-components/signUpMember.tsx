import * as React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { Formik, Field } from 'formik';
import CustomInput from '@/assets/reusable-components/customInput';

import * as yup from 'yup';
import { BodyText } from './bodyText';
import { Dropdown } from 'react-native-paper-dropdown';
import { CustomDropdownItem } from './memberSignUpDropdown';
import { HeaderText } from './headerText';

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

const OPTIONS = [
  { label: 'Student', price: 50, value: 'Student' },
  { label: 'Life', price: 50, value: 'female' },
  { label: 'Bronze', price: 50, value: 'other' },
  { label: 'Silver', price: 50, value: 'Student' },
  { label: 'Gold', price: 50, value: 'Student' },
  { label: 'Platinum', price: 50, value: 'female' },
  { label: 'Diamond', price: 50, value: 'other' },
];

function SignUpMember () {
  const [gender, setGender] = React.useState<string>();
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <HeaderText style={{marginTop: 20, marginBottom: 20}}>Let's Create Your Membership</HeaderText>
      {/* <View style={{marginBottom: 10}}>
        <Dropdown
          label="Gender"
          placeholder="Select Gender"
          options={OPTIONS}
          value={gender}
          onSelect={setGender}
          menuContentStyle={{ backgroundColor: 'white' }}
          menuUpIcon={<TextInput.Icon icon="menu-up" color='black' pointerEvents="none" />}
          menuDownIcon={<TextInput.Icon icon="menu-down" color='black' pointerEvents="none" />}
          CustomDropdownItem={CustomDropdownItem}
        />
      </View> */}
      
      <View style={[styles.container]}>
          <Formik
              initialValues={{
                  firstName: '',
                  lastName: '',
                  email: '',
                  phoneNumber: '',
                  country: '',
                  state: '',
                  city:'',
                  zip: '',
                  reffered: '',
                  sFirstName: '',
                  sLastName: '',
                  cFullName: '',
                  DOB: '',    
              }}
              onSubmit={values => console.log(values)}
          >
          {({
              handleSubmit, isValid
          }) => (
            <View>
              <Field
                component={CustomInput}
                name="firstName"
                label="First Name"
              />
              <Field
                component={CustomInput}
                name="lastName"
                label="Last Name"
              />
              <Field
                component={CustomInput}
                name="email"
                label="Email"
              />
              <Field
              component={CustomInput}
              name="phoneNumber"
              label="Phone Number"
              placeholder="1234567890"
              keyboardType="numeric"
              />
              <Field
              component={CustomInput}
              name="city"
              placeholder="City"
              />
              <Field
                component={CustomInput}
                name="state"
                placeholder="State"
              />
              <Field
                component={CustomInput}
                name="zip"
                placeholder="Zip"
              />
              <Field
                component={CustomInput}
                name="reffered"
                placeholder="Reffered By"
              />
              <BodyText style={{margin: 10}}>Family Details</BodyText>

              <Button
              onPress={() =>handleSubmit}
              disabled={!isValid}
              >
              Sign Up
              </Button>
            </View>
          )}
          </Formik>
      </View>
    </ScrollView>
)};

const styles = StyleSheet.create({
    container: {
      marginTop: 20
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

export default SignUpMember;