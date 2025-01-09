import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { HeaderText } from '@/assets/reusable-components/headerText';
import DonateView from '@/assets/reusable-components/donateView';
import ScrollScreenBack from '@/assets/reusable-components/scrollScreenBack';
import { BodyText } from '@/assets/reusable-components/bodyText';

const width = Dimensions.get('window').width;

export default function Donate() {
  return (
    <ScrollScreenBack>
      <HeaderText>Donate</HeaderText>
      <BodyText style={{marginTop: 10, marginLeft: 15}}>Making a donation is the ultimate sign of solidarity.</BodyText>
      <DonateView />
    </ScrollScreenBack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: '#fff',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'repeat',
  },

});