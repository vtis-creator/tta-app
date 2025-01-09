import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
//const router = useRouter();
// router.back()

import LoginMember from '@/assets/reusable-components/LoginMember';
import ScrollScreenBack from '@/assets/reusable-components/scrollScreenBack';
import { HeaderTextUnderline } from '@/assets/reusable-components/headerText';
import { BodyText } from '@/assets/reusable-components/bodyText';
import { Button } from 'react-native-paper';

export default function Membership() {
  const router = useRouter();

  return (
    <ScrollScreenBack>
      <HeaderTextUnderline>Welcome Back!</HeaderTextUnderline>
      <BodyText>Log in to TTA Portal</BodyText>
      <LoginMember />
      <BodyText>Do not have a membership? <Button mode="text" onPress={() => router.push('/signUp')}> Sign Up</Button></BodyText>
    </ScrollScreenBack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  containerStyle: {
    padding: 20,
    margin: 20
  }
});