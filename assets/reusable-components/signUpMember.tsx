import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { Button, List, useTheme } from 'react-native-paper';
import { Formik, Field } from 'formik';
import { useSelector } from 'react-redux';
import _ from 'lodash';

import CustomInput from '@/assets/reusable-components/customInput';

const Options = [
  { label: 'Student', price: 25, color: '#800000' },
  { label: 'Life', price: 50, color: 'green' },
  { label: 'Bronze', price: 500, color: '#cd7f32' },
  { label: 'Silver', price: 1250, color: 'silver' },
  { label: 'Gold', price: 2500, color: '#ffbf00' },
  { label: 'Platinum', price: 5000, color: '#E5E4E2' },
  { label: 'Diamond', price: 12500, color: '#b9f2ff' },
];

const findIndex = (sub) => _.findIndex(Options, { label: sub });

const SignUpMember = () => {
  const loginInfo = useSelector((state) => state.login.loginDetails);
  const { colors } = useTheme();
  const [membership, setMembership] = React.useState(loginInfo.subscription || 'Student');
  const [membershipPrice, setMembershipPrice] = React.useState(findIndex(membership) || 0);
  const [expanded, setExpanded] = React.useState(false);

  const handlePress = (value, index) => {
    setExpanded(false);
    setMembership(value);
    setMembershipPrice(index);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <Text style={styles.header}>Create Your Membership</Text>
      <List.Accordion
        title={membership}
        left={(props) => <List.Icon {...props} icon="card-account-details" color={colors.primary} />}
        expanded={expanded}
        onPress={() => setExpanded(!expanded)}
        style={styles.accordion}>
        {Options.map((option, i) => (
          <List.Item
            key={i}
            title={`${option.label} - $${option.price}`}
            onPress={() => handlePress(option.label, i)}
            titleStyle={[
              styles.listItemText,
              membership === option.label && styles.listItemTextSelected,
            ]}
            left={(props) => (
              <List.Icon
                {...props}
                icon="checkbox-blank-circle"
                color={option.color}
                style={styles.listIcon}
              />
            )}
            style={[
              styles.listItem,
              membership === option.label && styles.listItemSelected,
            ]}
          />
        ))}
      </List.Accordion>

      <Formik
        initialValues={{
          firstName: loginInfo.firstName || '',
          lastName: loginInfo.lastName || '',
          email: loginInfo.email || '',
          phoneNumber: loginInfo.phone || '',
          city: loginInfo.city || '',
          state: loginInfo.state || '',
          zip: loginInfo.zip || '',
          referred: loginInfo.referred || '',
          charity: 0,
        }}
        onSubmit={(values) => console.log('Form Submitted', values)}>
        {({ handleSubmit, isValid }) => (
          <View style={styles.formContainer}>
            <Field
              component={CustomInput}
              name="firstName"
              placeholder="First Name"
              style={styles.input}
            />
            <Field
              component={CustomInput}
              name="lastName"
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
              name="phoneNumber"
              placeholder="Phone Number"
              keyboardType="numeric"
              style={styles.input}
            />
            <Field
              component={CustomInput}
              name="city"
              placeholder="City"
              style={styles.input}
            />
            <Field
              component={CustomInput}
              name="state"
              placeholder="State"
              style={styles.input}
            />
            <Field
              component={CustomInput}
              name="zip"
              placeholder="ZIP Code"
              keyboardType="numeric"
              style={styles.input}
            />
            <Field
              component={CustomInput}
              name="referred"
              placeholder="Referred By"
              style={styles.input}
            />

            <Text style={styles.sectionTitle}>Subscription Summary</Text>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Membership Plan:</Text>
              <Text style={styles.summaryValue}>{membership}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Membership Amount:</Text>
              <Text style={styles.summaryValue}>${Options[membershipPrice].price}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Total:</Text>
              <Text style={styles.summaryValue}>
                ${Options[membershipPrice].price + 25}
              </Text>
            </View>

            <Button
              mode="contained"
              onPress={handleSubmit}
              disabled={!isValid}
              style={styles.submitButton}
              labelStyle={styles.submitButtonText}>
              Save & Proceed to Payment
            </Button>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
    padding: 15,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 20,
  },
  accordion: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 15,
    elevation: 2,
  },
  listItem: {
    backgroundColor: 'white',
    marginVertical: 5,
    borderRadius: 8,
    padding: 10,
  },
  listItemSelected: {
    backgroundColor: '#e6f7ff',
  },
  listItemText: {
    fontSize: 16,
    color: '#333',
  },
  listItemTextSelected: {
    color: '#800000',
    fontWeight: 'bold',
  },
  listIcon: {
    transform: [{ scale: 0.8 }],
  },
  formContainer: {
    marginTop: 20,
  },
  input: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginVertical: 15,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  summaryLabel: {
    fontSize: 16,
    color: '#555',
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#800000',
  },
  submitButton: {
    marginTop: 20,
    marginBottom: 20,
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

export default SignUpMember;
