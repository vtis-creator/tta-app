import * as React from 'react';
import { StyleSheet, ScrollView, View, Image } from 'react-native';
import { HeaderTextUnderline } from '@/assets/reusable-components/headerText';
import ScrollScreenBack from '@/assets/reusable-components/scrollScreenBack';
import { BodyText } from '@/assets/reusable-components/bodyText';
import { useRouter } from 'expo-router';
import { Button, useTheme } from 'react-native-paper';

export default function scholarship () {
  const { colors } = useTheme();
  const router = useRouter();
  return (
    <ScrollScreenBack>
          <HeaderTextUnderline>Scholarship</HeaderTextUnderline>
          <ScrollView>
            <View>
              <Image
                source={{uri: 'https://mytelanganaus.org/img/top_offers/scholarship.png'}}
                style={{width: 150, height: 150, marginLeft: '30%', marginTop: 10}}/>
            </View>
            <BodyText style={{marginTop: 10, marginLeft: 15}}>We see many deserving students who are intelligent but not able to continue their higher studies because of their financial background. We will identify those students from each area and provide scholarships to continue their education. We are giving scholarships to these students to make them intelligent and productive citizens of the country. Each scholarship would be approx. $250 per student per year. A recipient of this scholarship will be assigned to a donor for monitoring their progress by the donor.</BodyText>

            <Button onPress={() => router.push('/donate')} mode="contained" textColor={colors.onPrimary} style={{marginTop: 20}}>Donate</Button>

          </ScrollView>
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