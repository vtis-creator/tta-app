import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import LoginMember from '@/assets/reusable-components/LoginMember';
import ScrollScreenBack from '@/assets/reusable-components/scrollScreenBack';
import { HeaderTextUnderline } from '@/assets/reusable-components/headerText';
import { BodyText } from '@/assets/reusable-components/bodyText';
import { Button } from 'react-native-paper';

export default function Membership() {
  const router = useRouter();

  return (
    <ScrollScreenBack style={styles.container}>
      <HeaderTextUnderline style={styles.headerText}>Welcome Back!</HeaderTextUnderline>
      <BodyText style={styles.bodyText}>Log in to TTA Portal</BodyText>
      <LoginMember />

      <View style={styles.signupContainer}>
        <BodyText style={styles.signupText}>Do not have a membership?</BodyText>
        <TouchableOpacity onPress={() => router.push('/membership')}>
          <Button mode="text" style={styles.signupButton}>Sign Up</Button>
        </TouchableOpacity>
      </View>
    </ScrollScreenBack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5', // Soft background color for the screen
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#333', // Darker color for header text for better contrast
  },
  bodyText: {
    fontSize: 16,
    color: '#666', // Lighter color for body text
    textAlign: 'center',
    marginBottom: 30,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  signupText: {
    fontSize: 16,
    color: '#333',
  },
  signupButton: {
    marginLeft: 10,
    paddingVertical: 5,
    fontSize: 16,
    color: '#007BFF', // Blue color for the button text for consistency
  },
});
