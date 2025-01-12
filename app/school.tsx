import * as React from 'react';
import { StyleSheet, ScrollView, View, Image } from 'react-native';
import { HeaderTextUnderline } from '@/assets/reusable-components/headerText';
import ScrollScreenBack from '@/assets/reusable-components/scrollScreenBack';
import { BodyText, BodyTextReadMore } from '@/assets/reusable-components/bodyText';
import { useRouter } from 'expo-router';
import { Button, useTheme } from 'react-native-paper';

export default function schools() {
    const { colors } = useTheme();
    const router = useRouter();
  return (
    <ScrollScreenBack>
          <HeaderTextUnderline>Schools</HeaderTextUnderline>
          <View>
            <Image
              source={{uri: 'https://mytelanganaus.org/img/top_offers/school.png'}}
              style={{width: 150, height: 150, marginLeft: '30%', marginTop: 10}}/>
          </View>
          <ScrollView>
            <BodyText style={{marginTop: 10}}>The Adopt-a-School program is intended to adopt a school where minimum facilities in the schools are not available in my rural areas of Telangana districts. This program not only impacts on the lives and development of the learners in adopted schools but also on the quality of education and the sustainability of the school for generations to come. We aim to spend three to five years in an adopted school and to foster a caring relationship between the Foundation, the funder, the school and the community to create a sustainable and meaningful impact in the schools and communities in which we work.</BodyText>
    
            <BodyText style={{marginTop: 20}}>On a high level these are the areas identified for improvement in schools.</BodyText>

            <BodyTextReadMore style={{marginTop: 20}}>Primary Schools</BodyTextReadMore>
    
            <BodyText style={{marginTop: 10}}>{`\u2022`} Benches for the students</BodyText>

            <BodyText style={{marginTop: 5}}>{`\u2022`} Digital classrooms</BodyText>

            <BodyText style={{marginTop: 5}}>{`\u2022`} Basic teaching material</BodyText>

            <BodyText style={{marginTop: 5}}>{`\u2022`} Toilets construction and maintenance</BodyText>

            <BodyText style={{marginTop: 5}}>{`\u2022`} Drinking water facility</BodyText>

            <BodyText style={{marginTop: 5}}>{`\u2022`} Backpacks distribution</BodyText>

            <BodyTextReadMore style={{marginTop: 20}}>High Schools</BodyTextReadMore>
    
            <BodyText style={{marginTop: 5}}>{`\u2022`} Libraries</BodyText>

            <BodyText style={{marginTop: 5}}>{`\u2022`} Science labs</BodyText>

            <BodyText style={{marginTop: 5}}>{`\u2022`} Sports kits</BodyText>

            <BodyText style={{marginTop: 5}}>{`\u2022`} Fencing for the schools</BodyText>

            <BodyText style={{marginTop: 5}}>{`\u2022`} Toilets construction and maintenance</BodyText>

            <BodyText style={{marginTop: 5}}>{`\u2022`} Drinking water facility</BodyText>

            <BodyText style={{marginTop: 5}}>{`\u2022`}Providing sanitary napkins</BodyText>

            <BodyText style={{marginTop: 5}}>{`\u2022`} Backpacks distribution</BodyText>

            <BodyText style={{marginTop: 5}}>{`\u2022`} Tutoring at the time of exams</BodyText>

            <BodyText style={{marginTop: 5}}>{`\u2022`} Soft skills training</BodyText>
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