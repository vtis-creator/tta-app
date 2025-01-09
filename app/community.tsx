import * as React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { HeaderTextUnderline } from '@/assets/reusable-components/headerText';
import ScrollScreenBack from '@/assets/reusable-components/scrollScreenBack';
import { BodyText, BodyTextReadMore } from '@/assets/reusable-components/bodyText';

const width = Dimensions.get('window').width;

export default function communityMessage() {
  return (
    <ScrollScreenBack>
          <HeaderTextUnderline>Community Services</HeaderTextUnderline>
          <ScrollView>
            <BodyText style={{marginTop: 10, marginLeft: 15}}>Telangana American Telugu Association has been in forefront to serve the community in need. TTA Community Services Committee is created under the leadership of TTA Advisory Council, Executive Committee with the main objective to deliver services to the community. TTA has a dedicated team setup for Community Services equipped with enthusiastic volunteers across USA to serve Telugu Community.</BodyText>
    
            <BodyText style={{marginLeft: 15}}>Community Services works within core principles of the organization and aim to provide assistance to Telugu Community in the areas of Emergency Services, Immigration Services, Legal, Consular Services by facilitating the reach with respective authorities</BodyText>
    
            <BodyText style={{marginLeft: 15}}>Helpline is reachable 24/7 during Emergency situations such as accidents, sudden deaths and TTA will offer assistance in consultation with local authorities, consular offices strictly adhering to local law and jurisdictions and within our limits as a non-profit organization.</BodyText>
    
            <BodyText style={{marginLeft: 15}}>key Areas of Assistance provided by Community Services</BodyText>
    
            <BodyTextReadMore style={{marginLeft: 15}}>Emergency Helpline:</BodyTextReadMore>
            <BodyText style={{marginTop: -30, marginLeft: 15}}>24/7 helpline number to reach for assistance</BodyText>

            <BodyTextReadMore style={{marginLeft: 15}}>Community Services:</BodyTextReadMore>
            <BodyText style={{marginTop: -30, marginLeft: 15}}>Helping Telugu community within USA and in India during Emergency situation, Natural Disasters/Pandemic</BodyText>
    
            <BodyTextReadMore style={{marginLeft: 15}}>Immigration & Visa, Legal Assistance Services:</BodyTextReadMore>
            <BodyText style={{marginTop: -30, marginLeft: 15}}>Provide FREE initial consultation for any community member with TTA panel of Attorneys for Legal, Immigration, Emergency assistance</BodyText>

            <BodyTextReadMore style={{marginLeft: 15}}>TTA Immigration Help:</BodyTextReadMore>
            <BodyText style={{marginTop: -30, marginLeft: 15}}>Telangana American Telugu Association(TTA) partnered with Somireddy Law Group(SLG) to provide Immigration and Legal advice to TTA member community.</BodyText>

            <BodyTextReadMore style={{marginLeft: 15}}>Students Assistance:</BodyTextReadMore>
            <BodyText style={{marginTop: -30, marginLeft: 15}}>Help Telugu students studying in various universities in USA for any Emergency Situation, Career guidance, Trainings</BodyText>

            <BodyTextReadMore style={{marginLeft: 15}}>Indian Consular Services:</BodyTextReadMore>
            <BodyText style={{marginTop: -30, marginLeft: 15}}>Coordinate help with Indian Embassies in USA for any Emergency help for the community. Setup Webinars with Consul General offices for Community members to bring awareness of any policy changes</BodyText>
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