import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button, List, useTheme } from 'react-native-paper';
import { Formik, Field } from 'formik';
import { useSelector } from 'react-redux';
import _ from 'lodash';

import CustomInput from '@/assets/reusable-components/customInput';

import { BodyText, BodyTextReadMore } from './bodyText';
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

const Options = [
  { label: 'Student', price: 25, color: '#1b96de' },
  { label: 'Life', price: 50, color: 'green' },
  { label: 'Bronze', price: 500, color: '#cd7f32' },
  { label: 'Silver', price: 1250, color: 'silver' },
  { label: 'Gold', price: 2500, color: '#ffbf00' },
  { label: 'Platinum', price: 5000, color: '#E5E4E2' },
  { label: 'Diamond', price: 12500, color: '#b9f2ff' },
];

const findIndex = (sub) => {
  const index = _.findIndex(Options, {label: sub})
  return index;
}

function SignUpMember () {
  const loginInfo = useSelector((state) => state.login.loginDetails);
  const {
    subscription,
    firstName,
    lastName,
    email,
    phone,
    country,
    state,
    city,
    zip,
    reffered,
    sFirstName,
    sLastName,
    cFullName,
    cDOB
  } = loginInfo;
  const { colors } = useTheme();
  const [membership, setMembership] = React.useState(subscription !== '' ? subscription : 'Student');
  const [membershipPrice, setMembershipPrice] = React.useState(subscription !== '' ? findIndex(subscription): 0);
  const [expanded, setExpanded] = React.useState(false);

  const handlePress = (value, index) => {
    setExpanded(!expanded);
    setMembership(value);
    setMembershipPrice(index);
  }

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <HeaderText style={{marginTop: 20, marginBottom: 20}}>Let's Create Your Membership</HeaderText>
      <List.Accordion
        title={membership}
        left={props => <List.Icon {...props} icon="card-account-details" color={colors.primary} style={{marginLeft: 10}}/>}
        expanded={expanded}
        onPress={() => setExpanded(!expanded)}
        style={{backgroundColor: 'white'}}>
          {Options.map((value, i) => {
            return (
              <List.Item
                key={i}
                title={value.label + ' - ' + value.price}
                onPress={() => handlePress(value.label, i)}
                titleStyle={[membership === value.label && styles.selected]}
                left={props => <List.Icon {...props} icon="checkbox-blank-circle" color={value.color} style={{marginLeft: 10, transform: [{scale: .7}]}}/>}
              />
            )
          })}
      </List.Accordion>
      
      <View style={[styles.container]}>
          <Formik
              initialValues={{
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                  phoneNumber: phone,
                  country: country,
                  state: state,
                  city:city,
                  zip: zip,
                  reffered: reffered,
                  sFirstName: sFirstName,
                  sLastName: sLastName,
                  cFullName: cFullName,
                  cDOB: cDOB,
                  charity: 0
              }}
              onSubmit={values => console.log(values)}
          >
          {({
              handleSubmit, isValid
          }) => (
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              <Field
                component={CustomInput}
                name="firstName"
                label="First Name"
                required
                style={styles.inputText}
              />
              <Field
                component={CustomInput}
                name="lastName"
                label="Last Name"
                style={styles.inputText}
              />
              <Field
                component={CustomInput}
                name="email"
                label="Email"
                style={styles.inputText}
              />
              <Field
              component={CustomInput}
              name="phoneNumber"
              label="Phone Number"
              placeholder="1234567890"
              keyboardType="numeric"
              style={styles.inputText}
              />
              <Field
              component={CustomInput}
              name="city"
              placeholder="City"
              style={styles.inputText}
              />
              <Field
                component={CustomInput}
                name="state"
                placeholder="State"
                style={styles.inputText}
              />
              <Field
                component={CustomInput}
                name="zip"
                placeholder="Zip"
                style={styles.inputText}
              />
              <Field
                component={CustomInput}
                name="reffered"
                placeholder="Reffered By"
                style={styles.inputText}
              />

              <BodyTextReadMore style={{marginTop: 20, marginLeft: 5, width: '100%'}}>Family Details</BodyTextReadMore>
              <Field
                component={CustomInput}
                name="sFirstName"
                label="Spouse First Name"
                required
                style={styles.inputText}
              />
              <Field
                component={CustomInput}
                name="sLastName"
                label="Spouse Last Name"
                style={styles.inputText}
              />

              <BodyTextReadMore style={{marginTop: 20, marginLeft: 5, width: '100%'}}>Children Details</BodyTextReadMore>
              <Field
                component={CustomInput}
                name="cFullName"
                label="Child's Full Name"
                required
                style={styles.childInputText}
              />
              <Field
                component={CustomInput}
                name="cDOB"
                label="DOB"
                style={styles.childInputDate}
              />
              <View style={{width: '50%', marginTop: 20, flexDirection: 'row', flexWrap: 'wrap'}}>
                <BodyText style={{width: '65%', alignSelf: 'flex-start'}}>Subscription Plan:</BodyText>
                <BodyTextReadMore style={{width: '35%', alignSelf: 'flex-end'}}>{membership !== 'Select Membership' ? membership : 'Student'}</BodyTextReadMore>
              </View>
              <View style={{width: '50%', marginTop: 20, flexDirection: 'row', flexWrap: 'wrap'}}>
                <BodyText style={{width: '65%', alignSelf: 'flex-start'}}>Membership Amount:</BodyText>
                <BodyTextReadMore style={{width: '35%', alignSelf: 'flex-end'}}>{Options[membershipPrice].price}</BodyTextReadMore>
              </View>
              <View style={{width: '50%', marginTop: 20, flexDirection: 'row', flexWrap: 'wrap'}}>
                <BodyText style={{width: '65%', alignSelf: 'flex-start'}}>Charitable Activies:</BodyText>
                <BodyTextReadMore style={{width: '35%', alignSelf: 'flex-end'}}>
                  <Field
                    component={CustomInput}
                    name="charity"
                    placeholder="50"
                  />
                </BodyTextReadMore>
              </View>
              <View style={{width: '50%', marginTop: 20, flexDirection: 'row', flexWrap: 'wrap'}}>
                <BodyText style={{width: '65%', alignSelf: 'flex-start'}}>total:</BodyText>
                <BodyTextReadMore style={{width: '35%', alignSelf: 'flex-end'}}>{Options[membershipPrice].price + 25}</BodyTextReadMore>
              </View>

              <Button
              onPress={() =>handleSubmit}
              disabled={!isValid}
              mode='contained'
              style={{marginTop: 20, marginLeft: 10, width: '95%', borderColor: colors.primary}}
              >
              Save & Proceed to Payment
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
    inputText: {
      backgroundColor: 'white',
      width: '45%',
      marginHorizontal: 10
    },
    childInputText: {
      backgroundColor: 'white',
      width: '55%',
      marginHorizontal: 10
    },
    childInputDate: {
      backgroundColor: 'white',
      width: '35%',
      marginHorizontal: 10
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
      backgroundColor: 'grey',
      marginHorizontal: '1%',
      marginBottom: 15,
      minWidth: '30%',
      textAlign: 'center',
    },
    selected: {
      color: '#b03600'
    },
    buttonLabel: {
      width: '30%',
      textAlign: 'center'
    },
    selectedLabel: {
      color: 'white',
    },
  });

export default SignUpMember;