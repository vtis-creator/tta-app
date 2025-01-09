import * as React from 'react';
import { View, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Card, Icon, Modal, Portal, useTheme } from 'react-native-paper';
import { useRouter } from "expo-router";
import Carousel from 'react-native-reanimated-carousel';
import _ from 'lodash';

import ScrollScreen from '@/assets/reusable-components/scrollScreen';
import { HeaderText } from '@/assets/reusable-components/headerText';
import { BodyText, BodyTextReadMore } from '@/assets/reusable-components/bodyText';
import eventData from '@/assets/data/events.json';
import { ModalDisplayEvent } from '@/assets/reusable-components/modalDisplay';
import WebView from 'react-native-webview';
import { bool } from 'yup';

const width = Dimensions.get('window').width;

const cImages = [
  'https://mytelanganaus.org/storage/app/banners/Banner-2023-1_06032023_1685823615.jpg',
  'https://mytelanganaus.org/storage/app/banners/Tampa_BOD_Meeting_11032024_1730626505.jpg',
  'https://mytelanganaus.org/storage/app/banners/Telangana_Thoranam_07072024_1720311852.jpg'
];

export default function Index() {
  const { colors } = useTheme();
  const [visible, setVisible] = React.useState(false);
  const [iEvent, setIndexEvent] = React.useState(1000);
  const [events, setEvents] = React.useState(eventData);
  const router = useRouter();

  React.useEffect(() => {
    if(iEvent !== 1000) {
      setVisible(true);
    }
    
    setEvents(eventData);
  }, [iEvent, global.location]);

  const hideModal = () => {
    setIndexEvent(1000);
    setVisible(false);
  }

  return (
    <ScrollScreen>
      <ScrollView>
        <View style={{backgroundColor: colors.background, position: 'relative'}}>
          <Portal>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.containerStyle}>
              <ModalDisplayEvent data={events[iEvent]} />
              <TouchableOpacity
                onPress={() => hideModal()}
                style={{position: 'absolute', top: 10, left: 20, justifyContent: 'center'}}
              >
                <Icon
                  source="keyboard-backspace"
                  color={colors.outline}
                  size={30}
                />
              </TouchableOpacity>
            </Modal>
          </Portal>
          <View style={{ flex: 1 }}>
            <Carousel
              loop
              width={width-30}
              height={width / 2}
              autoPlay={true}
              data={[...cImages]}
              scrollAnimationDuration={5000}
              renderItem={({ index }) => (
                <View
                    style={{
                        justifyContent: 'center',
                        borderRadius: 15,
                        overflow: 'hidden',
                        width: '98%'
                    }}
                >
                  <Image source={{uri: cImages[index]}} style={{width: '100%', height: width/2}}/>
                </View>
              )}
            />
          </View>
        </View>
        
        <View style={{position: "relative"}}>
          <HeaderText style={{marginTop: 70}}>About Us</HeaderText>
          <BodyText>Telangana American Telugu Association is the first Telangana organization in North America and a non-profit socio-cultural , charitable organization built to promote, preserve and perpetuate the Telangana community in the US and Canada.Telangana American Telugu Association is the youngest organization in towns across North America.</BodyText>
          <Button style={{position: 'absolute', bottom: 13, right: 10}} onPress={() => router.push('/aboutUs')} mode="text" textColor={colors.primary} >Read More</Button>
        </View>

        <HeaderText style={{marginTop: 10}}>Quick Links</HeaderText>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <Button onPress={() => router.push('/donate')} mode="contained" textColor={colors.onPrimary} style={[styles.flexButtons, {borderColor: colors.secondary, marginLeft: 0}]}>Donate</Button>
          <Button onPress={() => router.push('/membership')} mode="contained" textColor={colors.onPrimary} style={[styles.flexButtons, {borderColor: colors.primary}]}>Sign Up</Button>
          <Button onPress={() => router.push('/contact')} mode="contained" textColor={colors.onPrimary} style={[styles.flexButtons, {borderColor: colors.primary}]}>Contact Us</Button>
        </View>
        
        <View style={{position: "relative"}}>
          <HeaderText style={{marginTop: 70}}>President's Message</HeaderText>
          <BodyText>Dear friends, With great privilege and honor, I assume the role of President of the Telangana American Telugu Association for the next two years. My sincere thanks to our Founder Dr.Pailla Malla Reddy garu, Advisory Council Chair Dr.Vijaypal Reddy and Co-Chair Dr.Mohan Reddy Patalolla and Advisory Council Member Bharath Reddy Madadi for the presidential nomination. I take immense pride in having the opportunity to serve the Telugu people and the Telangana community in North America. </BodyText>
          <Button style={{position: 'absolute', bottom: 13, right: 10}} onPress={() => router.push('/president')} mode="text" textColor={colors.primary}>Read More</Button>
        </View>

        <View>
          <HeaderText style={{marginTop: 70}}>Community Service</HeaderText>
          <BodyText>Telangana American Telugu Association has been in forefront to serve the community in need. TTA Community Services Committee is created under the leadership of TTA Advisory Council, Executive Committee with the main objective to deliver services to the community. TTA has a dedicated team setup for Community Services equipped with enthusiastic volunteers across USA to serve Telugu Community.</BodyText>
          <Button style={{position: 'absolute', bottom: 13, right: 10}} onPress={() => router.push('/community')} mode="text" textColor={colors.primary}>Read More</Button>
        </View>
        <View>
          <View>
            <WebView
              source={{html: '<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fwww.telanganaus.org%2F%3Fref%3Dembed_page&tabs=timeline&width=700&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=135722016595677" width="700" height="400" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>'}}
              style={{marginTop: 20,marginLeft:'8%', width: 700, height:400, backgroundColor: '#f2f2f2'}}
            />
          </View>
        </View>
      </ScrollView>
    </ScrollScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  containerStyle: {
    width: '100%',
    height: '100%'
  },
  flexButtons: {
    marginTop: 20,
    marginLeft: '5%',
    width: '30%', 
    backgroundColor: '#FFA000'
  }
});