import * as React from 'react';
import { View, StyleSheet, Linking, ScrollView } from 'react-native';
import { Button, Checkbox } from 'react-native-paper';
import { Formik, Field } from 'formik';
import CustomInput from '@/assets/reusable-components/customInput';

import * as yup from 'yup';
import { BodyTextCheckbox } from './bodyText';
import { HeaderText } from './headerText';

const loginValidationSchema = yup.object().shape({
  fName: yup.string().required('First Name is required'),
  lName: yup.string().required('Last Name is required'),
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email Address is Required'),
  phone: yup
    .string()
    .required('Phone Number is Required')
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits'),
  amount: yup
    .number()
    .required('Amount is required')
    .positive('Amount must be greater than 0')
    .min(1, 'Minimum donation is $1'),
  description: yup.string().required('Description is required'),
});

function DonateView() {
  const [checked, setChecked] = React.useState(false);

  const handlePayPalRedirect = () => {
    // Dummy PayPal URL for testing
    const dummyPayPalURL = 'https://www.paypal.com/donate?hosted_button_id=XYZ123';
    Linking.openURL(dummyPayPalURL).catch((err) => console.error("Failed to open PayPal link", err));
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{
            fName: '',
            lName: '',
            email: '',
            phone: '',
            amount: '',
            description: '',
          }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleSubmit, isValid }) => (
            <View style={styles.formContainer}>
              <Field
                component={CustomInput}
                name="fName"
                label="First Name"
                mode="outlined"
                style={styles.input}
              />
              <Field
                component={CustomInput}
                name="lName"
                label="Last Name"
                mode="outlined"
                style={styles.input}
              />
              <Field
                component={CustomInput}
                name="email"
                label="Email"
                mode="outlined"
                style={styles.input}
              />
              <Field
                component={CustomInput}
                name="phone"
                label="Phone Number"
                placeholder="1234567890"
                mode="outlined"
                style={styles.input}
              />
              <Field
                component={CustomInput}
                name="amount"
                label="Amount"
                placeholder="50"
                mode="outlined"
                style={styles.input}
                keyboardType="numeric"
              />
              <Field
                component={CustomInput}
                name="description"
                label="Description"
                multiline={true}
                numberOfLines={4}
                mode="outlined"
                style={styles.input}
              />

              <View style={styles.checkboxContainer}>
                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => setChecked(!checked)}
                />
                <BodyTextCheckbox style={styles.checkboxText}>
                  Telangana American Telugu Association Section 501(c)(3) Non-Profit organization. All donations are deemed tax-deductible absent any limitations on deductible applicable to a particular taxpayer.
                </BodyTextCheckbox>
              </View>

              <Button
                onPress={handlePayPalRedirect} // Dummy PayPal button integration
                mode="contained"
                style={styles.donateButton}
                disabled={!isValid} // Button is disabled if the form is invalid
              >
                Donate
              </Button>
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  formContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    borderWidth: .2,
    borderColor: 'black'
  },
  input: {
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  checkboxText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 12,
    color: '#555',
  },
  donateButton: {
    marginTop: 20,
    backgroundColor: '#f1c40f',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
});

export default DonateView;
