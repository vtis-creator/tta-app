import * as React from 'react';
import { StyleSheet, ScrollView, View, Image } from 'react-native';
import { HeaderTextUnderline } from '@/assets/reusable-components/headerText';
import ScrollScreenBack from '@/assets/reusable-components/scrollScreenBack';
import { BodyText, BodyTextReadMore } from '@/assets/reusable-components/bodyText';
import { useRouter } from 'expo-router';
import { Button, useTheme } from 'react-native-paper';

export default function orphans () {
  const { colors } = useTheme();
  const router = useRouter();
  return (
    <ScrollScreenBack>
          <HeaderTextUnderline>Orphans</HeaderTextUnderline>
          <View>
            <Image
              source={{uri: 'https://mytelanganaus.org/img/top_offers/orphan.png'}}
              style={{width: 150, height: 150, marginLeft: '30%', marginTop: 10}}/>
          </View>
          <ScrollView>
            
            <BodyText style={{marginTop: 20}}>There are so many Orphanages which are being run very efficiently but not able to provide everything they want to, due to insufficient funds. We would like to support as many orphanages as possible. There are orphanages which takes care of disabled children, HIV AIDS kids, Elderly parents, and mentally disabled people. with Please donate generously and celebrate your special days with these orphanages for as little as $50.</BodyText>
    
            <BodyText style={{marginTop: 20}}>As part of this program we are planning to provide below for Orphanages:</BodyText>
    
            <BodyTextReadMore style={{marginTop: 5}}>{`\u2022`} Construction of Shelters if needed</BodyTextReadMore>

            <BodyTextReadMore style={{marginTop: 5}}>{`\u2022`} Providing monthly groceries</BodyTextReadMore>

            <BodyTextReadMore style={{marginTop: 5}}>{`\u2022`} Donate essentials like clothes and school uniforms</BodyTextReadMore>

            <BodyTextReadMore style={{marginTop: 5}}>{`\u2022`} Donate toys for children</BodyTextReadMore>

            <BodyTextReadMore style={{marginTop: 5}}>{`\u2022`} Provide medicines</BodyTextReadMore>
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