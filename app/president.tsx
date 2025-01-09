import * as React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { HeaderTextUnderline } from '@/assets/reusable-components/headerText';
import Donate from '@/assets/reusable-components/donateView';
import { BodyText } from '@/assets/reusable-components/bodyText';
import ScrollScreenBack from '@/assets/reusable-components/scrollScreenBack';

const width = Dimensions.get('window').width;

export default function presidentMessage() {
  return (
    <ScrollScreenBack>
      <HeaderTextUnderline>President's message</HeaderTextUnderline>
      <ScrollView>
        <BodyText style={{marginTop: 10, marginLeft: 15}}>Dear friends,</BodyText>

        <BodyText style={{marginLeft: 15}}>With great privilege and honor, I assume the role of President of the Telangana American Telugu Association for the next two years.</BodyText>

        <BodyText style={{marginLeft: 15}}>My sincere thanks to our Founder Dr.Pailla Malla Reddy garu, Advisory Council Chair Dr.Vijaypal Reddy and Co-Chair Dr.Mohan Reddy Patalolla and Advisory Council Member Bharath Reddy Madadi for the presidential nomination. I take immense pride in having the opportunity to serve the Telugu people and the Telangana community in North America.</BodyText>

        <BodyText style={{marginLeft: 15}}>We are on the path to becoming the most premier organization. The foundation of our success was built upon our strong leadership, dedication, and strong community. I am fortunate to be surrounded by a group of dynamic leaders and volunteers who always strive to serve our community first.</BodyText>

        <BodyText style={{marginLeft: 15}}>{`\u2022`} Foster the Telangana culture for the next generation through hosting and celebrating Telugu festivals across the country</BodyText>

        <BodyText style={{marginLeft: 15}}>{`\u2022`} Protecting our communities in the most vulnerable times by forming a task force and a 1-800 emergency hotline as a first-line response</BodyText>

        <BodyText style={{marginLeft: 15}}>{`\u2022`} Enhancing community service outreach through offering immigration services, domestic violence legal assistance, and food drives</BodyText>

        <BodyText style={{marginLeft: 15}}>{`\u2022`} Design and implement a career preparation program for Telangana students to break into information technology, business entrepreneurship, and stem fields</BodyText>

        <BodyText style={{marginLeft: 15}}>{`\u2022`} Expand the TTA Seva Days 2023 to improve access to primary health and educational services in Telangana villages</BodyText>

        <BodyText style={{marginLeft: 15}}>In the coming future, with the strength of our ambitious organization, we can make an impact across the globalized Telangana Community. Our organization’s ability to serve our community is a unique gift that we will continue to expand.</BodyText>

        <BodyText style={{marginLeft: 15}}>Thank you</BodyText>

        <BodyText style={{marginLeft: 15}}>Vamshi Reddy Kancharakuntla</BodyText>

        <BodyText style={{marginLeft: 15}}>President,</BodyText>

        <BodyText style={{marginLeft: 15}}>Telangana American Telugu Association.</BodyText>
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