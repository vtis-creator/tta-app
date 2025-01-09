import * as React from 'react';
import { StyleSheet, ScrollView, View, Image } from 'react-native';
import { HeaderTextUnderline } from '@/assets/reusable-components/headerText';
import ScrollScreenBack from '@/assets/reusable-components/scrollScreenBack';
import { BodyText } from '@/assets/reusable-components/bodyText';
import { useRouter } from 'expo-router';
import { Button, useTheme } from 'react-native-paper';

export default function MotivationalSeminars () {
  const { colors } = useTheme();
  const router = useRouter();
  return (
    <ScrollScreenBack>
          <HeaderTextUnderline>Motivational Seminars</HeaderTextUnderline>
          <ScrollView>
            <View>
              <Image
                source={{uri: 'https://mytelanganaus.org/img/top_offers/motivational.png'}}
                style={{width: 150, height: 150, marginLeft: '30%', marginTop: 10}}/>
            </View>
            <BodyText style={{marginTop: 10, marginLeft: 15}}>This program will help the students in different ways. We must make students as useful assets to the country and society. We can do that by providing guidance and motivational seminars when they are young. There are so many suicide attempts by students for small issues also because they are not able to handle small issues.</BodyText>
    
            <BodyText style={{marginLeft: 15}}>In these seminars the following will be covered.</BodyText>
    
            <BodyText style={{marginLeft: 15}}>{`\u2022`} Social responsibilities</BodyText>

            <BodyText style={{marginLeft: 15}}>{`\u2022`} Prevention of suicide attempts</BodyText>

            <BodyText style={{marginLeft: 15}}>{`\u2022`} Future college and academic selection process</BodyText>

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