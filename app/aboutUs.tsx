import * as React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { HeaderTextUnderline } from '@/assets/reusable-components/headerText';
import ScrollScreenBack from '@/assets/reusable-components/scrollScreenBack';
import { BodyText } from '@/assets/reusable-components/bodyText';

const width = Dimensions.get('window').width;

export default function AboutUs() {
  return (
    <ScrollScreenBack>
      <HeaderTextUnderline>About Us</HeaderTextUnderline>
      <ScrollView>
        <BodyText style={{marginTop: 20}}>Telangana American Telugu Association is the first Telangana organization in North America and a non-profit socio-cultural , charitable organization built to promote, preserve and perpetuate the Telangana community in the US and Canada.Telangana American Telugu Association is the youngest organization in towns across North America. Reflecting the theme, the energy and the positive attitude similar to that of Telangana, the 29th state of India. The organization was formed by a few like-minded people whose leader is Dr. Pailla Malla Reddy a billionaire entrepreneur, a harmonious person but above all a good samaritan who doesn’t let go an opportunity who are in need. Launched in 2015 the organization is a Non-Profit entity. The mission of Telangana American Telugu Association is to promote and perpetuate the culture and social conditions of Telangana and people of Telugu descent in general. Being the first national organization for Telangana in North America, the organization will act as a beacon light to all Telangana organizations across the country for generations to come.</BodyText>

        <BodyText style={{marginTop: 20}}>Telangana American Telugu Association will embark on fulfilling the aspirations of over 40 million Telanganites and those who sacrificed their precious lives for Telangana. This institution will facilitate many socio-cultural projects both in North America and in Telangana. The idea behind such activities is to give back to the motherland of Telangana and inspire many to do the same. Helping revive the rich literary artists, the traditional folk arts, forms and instituting awards each year to the ambassadors of Telangana.</BodyText>

        <BodyText style={{marginTop: 20}}>Telangana American Telugu Association believes the future is in the hands of Youth, as they have the capacity to churn the needs of any nation. In believing so, Telangana American Telugu Association has a space dedicated to the youth called “Yuva Telangana”. As the youth represent a sizeable population listening and attending to their needs is an epitome priority. Providing scholarships to meritorious and underprivileged students in Telangana, addressing long standing issues like fluorosis where affected, conducting health camps. “T-Seva” another wing of Telangana American Telugu Association will ensure concerns of Telanganites who are despair get addressed.</BodyText>

        <BodyText style={{marginTop: 20}}>The biennial “Seva Days” in Telangana will ensure the association will connect to the motherland where many developmental projects will be undertaken to achieve the famous coined term “Bangaru Telangana”.</BodyText>

        <BodyText style={{marginTop: 20}}>Come join us and Become a member of Telangana American Telugu Association and lend your hand. Joining the community will enable preserving and promoting our Telangana culture.</BodyText>
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