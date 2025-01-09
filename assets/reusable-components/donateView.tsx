import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Checkbox } from 'react-native-paper';
import { Formik, Field } from 'formik';
import CustomInput from '@/assets/reusable-components/customInput';

import * as yup from 'yup';
import { BodyTextCheckbox } from './bodyText';
import { HeaderText } from './headerText';

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

function DonateView () {
  const [checked, setChecked] = React.useState(false);
  return (
    <View style={{flex: 1,marginBottom: 10, marginTop: 10, padding: 10, borderRadius: 15, backgroundColor: 'white'}}>
      <Formik
          validationSchema={loginValidationSchema}
          initialValues={{
              fName: '',
              lName: '',
              email: '',
              phoneNumber: '',
              amount: '',
              description:'',
          }}
          onSubmit={values => console.log(values)}
          style={{}}
      >
      {({
          handleSubmit, isValid
      }) => (
        <View>
          <Field
            component={CustomInput}
            name="fName"
            label="First Name"
            mode="flat"
          />
          <Field
            component={CustomInput}
            name="lName"
            label="Last Name"
            mode="flat"
          />
          <Field
            component={CustomInput}
            name="email"
            label="Email"
            mode="flat"
          />
          <Field
            component={CustomInput}
            name="phone"
            label="Phone Number"
            placeholder="1234567890"
            mode="flat"
          />
          <Field
            component={CustomInput}
            name="amount"
            label="Amount"
            placeholder="50"
            mode="flat"
          />
          <Field
            component={CustomInput}
            name="description"
            label="Description"
            multiline={true}
            numberOfLines={10}
            mode="flat"
          />
          <View style={{width: '100%', position: 'relative'}}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
              style={{position: 'absoulte', left: 5}}
            />
            <BodyTextCheckbox style={{width: '89%', position: 'absolute', right: 0, textAlign: 'left'}}>Telangana American Telugu Association Section 501(c) (3) Non-Profit organization, All donations are deemed tax-deductible absent any limitations on deductible applicable to a particular taxpayer. No goods or services were provided in exchange for your contribution.</BodyTextCheckbox>
          </View>
          <Button
            onPress={() =>handleSubmit}
            mode="contained"
            style={{marginTop: 100}}
          >
          Donate
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

export default DonateView;