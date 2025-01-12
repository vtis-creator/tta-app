import * as React from 'react';
import { View, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity, Linking ,Text} from 'react-native';
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
import Banner from '@/assets/reusable-components/banner';

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
        <View style={{backgroundColor: 'white', position: 'relative'}}>
          <Carousel
            loop
            width={width - 30}
            height={width / 2}
            autoPlay={true}
            data={[...cImages]}
            scrollAnimationDuration={5000}
            renderItem={({ index }) => (
              <View
                style={styles.carouselContainer}
              >
                <Image source={{uri: cImages[index]}} style={styles.carouselImage}/>
              </View>
            )}
          />

          <View style={styles.contentContainer}>
            <HeaderText style={styles.sectionTitle}>About Us</HeaderText>
            <BodyText style={styles.bodyText}>Telangana American Telugu Association is the first Telangana organization in North America and a non-profit socio-cultural, charitable organization built to promote, preserve and perpetuate the Telangana community in the US and Canada.</BodyText>
            <Button onPress={() => router.push('/aboutUs')} mode="text" textColor={colors.primary}>Read More</Button>
          </View>

          <Banner
            title="Become a Member Today!"
            subtitle="Unlock exclusive benefits and join our vibrant community."
            buttonLabel="Join Now"
            imageUri={require('../../assets/images/member.jpg')}
            onPress={() => router.push('/membership')}
          />

          <HeaderText style={styles.sectionTitle}>Quick Links</HeaderText>
          <View style={styles.quickLinksContainer}>
            <Button onPress={() => router.push('/donate')} mode="contained" textColor={colors.onPrimary} style={styles.quickLinkButton}>Donate</Button>
            <Button onPress={() => Linking.openURL('mailto:info@telanganaus.org')} mode="contained" textColor={colors.onPrimary} style={styles.quickLinkButton}>Contact Us</Button>
            <Button onPress={() => router.push('/orginization')} mode="contained" textColor={colors.onPrimary} style={styles.quickLinkButton}>Orginization</Button>
            <Button onPress={() => Linking.openURL('tel:+18668827382')} mode="contained" textColor={colors.onPrimary} style={styles.quickLinkButton}>Call Us</Button>
          </View>

          <View style={styles.contentContainer}>
            <HeaderText style={styles.sectionTitle}>President's Message</HeaderText>
            <BodyText style={styles.bodyText}>Dear friends, With great privilege and honor, I assume the role of President of the Telangana American Telugu Association for the next two years. My sincere thanks to our Founder Dr.Pailla Malla Reddy garu...</BodyText>
            <Button onPress={() => router.push('/president')} mode="text" textColor={colors.primary}>Read More</Button>
          </View>

          <View style={styles.contentContainer}>
            <HeaderText style={styles.sectionTitle}>Community Service</HeaderText>
            <BodyText style={styles.bodyText}>Telangana American Telugu Association has been at the forefront of serving the community in need. TTA Community Services Committee...</BodyText>
            <Button onPress={() => router.push('/community')} mode="text" textColor={colors.primary}>Read More</Button>
          </View>

          <View style={styles.contentContainer}>
            <HeaderText style={styles.sectionTitle}>Social Media</HeaderText>
            <WebView
              source={{html: '<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fwww.telanganaus.org%2F%3Fref%3Dembed_page&tabs=timeline&width=700&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=135722016595677" width="700" height="400" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>'}}
              style={styles.socialMediaIframe}
            />
          </View>

          {/* Privacy Policy, Copyright, and Credits Section */}
          <View style={styles.footerContainer}>
            <BodyText style={styles.footerText}>
              <TouchableOpacity onPress={() => Linking.openURL('https://mytelanganaus.org/privacy_policy')}>
                <Text style={styles.linkText}>Privacy Policy</Text>
              </TouchableOpacity>
            </BodyText>
            <BodyText style={styles.footerText}>© 2025 Telangana American Telugu Association. All Rights Reserved.</BodyText>
            <BodyText style={styles.footerText}>Developed by VT Innovation Squad</BodyText>
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
  modalCloseButton: {
    position: 'absolute',
    top: 10,
    left: 20,
    justifyContent: 'center'
  },
  carouselContainer: {
    justifyContent: 'center',
    borderRadius: 15,
    overflow: 'hidden',
    width: '98%',
  },
  carouselImage: {
    width: '100%',
    height: width / 2,
    resizeMode: 'stretch',
  },
  contentContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  sectionTitle: {
    marginTop: 30,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
  },
  quickLinksContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    justifyContent: 'space-between'
  },
  quickLinkButton: {
    marginBottom: 10,
    marginTop: 10,
    width: '48%',
  },
  socialMediaIframe: {
    marginTop: 20,
    width: 700,  // Reverted to original width
    height: 400, // Reverted to original height
  },
  footerContainer: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  footerText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  linkText: {
    fontSize: 14,
    color: '#0066cc', // Blue color for links
    textDecorationLine: 'underline',
  },
});
