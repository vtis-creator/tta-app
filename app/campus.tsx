import * as React from 'react';
import { StyleSheet, ScrollView, View, Image } from 'react-native';
import { HeaderTextUnderline } from '@/assets/reusable-components/headerText';
import ScrollScreenBack from '@/assets/reusable-components/scrollScreenBack';
import { BodyText } from '@/assets/reusable-components/bodyText';
import { useRouter } from 'expo-router';
import { Button, useTheme } from 'react-native-paper';

export default function HealthCampus () {
  const { colors } = useTheme();
  const router = useRouter();
  return (
    <ScrollScreenBack>
          <HeaderTextUnderline>Health Campus</HeaderTextUnderline>
          <View>
            <Image
              source={{uri: 'https://mytelanganaus.org/img/top_offers/healthcare.png'}}
              style={{width: 150, height: 150, marginLeft: '30%', marginTop: 10}}/>
          </View>
          <ScrollView>
            
            <BodyText style={{marginTop: 20}}>These Camps will help to find some diseases in the initial stage itself. As most of them in rural areas does not have good idea on health care so these camps will help them to create an awareness. As part of this program, will conduct health camps like Basic health tests, Diabetes, Eye camps and Cancer camps. An eye camp can be sponsored with an initial donation of $600 which would transform lives of at least 50 people. We can also provide artificial limbs who are in need as part of this program. For about $1500 a cancer camp can be conducted in the sponsor’s chosen village/city. Sponsor will have to arrange for the publicity, place where the camp can be conducted and some accommodation to the visiting team.</BodyText>
          </ScrollView>
          <Button onPress={() => router.push('/donate')} mode="contained" textColor={colors.onPrimary} style={{marginTop: 20}}>Donate</Button>
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