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
      <View style={{flexDirection: 'row', marginTop: 50}}>
        <BodyText style={{width: '50%'}}>Do not have a membership? </BodyText>
        <Button mode="text" style={{width: '20%', marginTop: -7, marginLeft: -40}} onPress={() => router.push('/membership')}> Sign Up</Button>
      </View>
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