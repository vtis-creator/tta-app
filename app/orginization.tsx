import * as React from 'react';
import { StyleSheet, Dimensions, ScrollView, View, Image } from 'react-native';
import { HeaderText, HeaderTextModal, HeaderTextUnderline } from '@/assets/reusable-components/headerText';
import { BodyText, BodyTextReadMore } from '@/assets/reusable-components/bodyText';
import ScrollScreenBack from '@/assets/reusable-components/scrollScreenBack';

import OrgChart from '@/assets/data/orginization.json';
import { head } from 'lodash';

const orgList = OrgChart.Orgizational;

const width = Dimensions.get('window').width;

export default function organization() {
  return (
    <ScrollScreenBack>
      <HeaderTextUnderline>Orginizational Chart</HeaderTextUnderline>
      <ScrollView>
        <View>
        {
          orgList.map((org, i) => (
            <View>
              <HeaderText key={i}>{org.type}</HeaderText>
              <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {
                  org.members.map((member, i) => {
                    return (
                      <View key={i} style={{width: 175, backgroundColor: 'white', borderRadius: 15, padding: 10, marginHorizontal: 10, marginVertical: 15}}>
                        <Image
                          source={{uri: member.image}}
                          style={{width: 75, height: 75, marginLeft: '25%', marginTop: 10}}/>
                          <BodyText style={{marginTop: 10}}>{member.name}</BodyText>
                          {member.position === "" ? null : <BodyTextReadMore>{member.position}</BodyTextReadMore>}
                          <BodyText>{member.location}</BodyText>
                      </View>
                    )
                  })
                }
              </View>
            </View>
          ))
        }
          
        </View>
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