import * as React from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import ScrollScreen from '@/assets/reusable-components/scrollScreen';
import ImageView from "react-native-image-viewing";
import { HeaderText } from '@/assets/reusable-components/headerText';

const images = [
  {
    uri: "https://mytelanganaus.org/storage/app/gallery/Bathukamma-2024-9_Events_-2024_11032024_1730628600.jpg",
  },
  {
    uri: "https://mytelanganaus.org/storage/app/gallery/Bathukamma-2024-8_Events_-2024_11032024_1730628583.jpg",
  },
  {
    uri: "https://mytelanganaus.org/storage/app/gallery/Bathukamma-2024-7_Events_-2024_11032024_1730628562.jpg",
  },
  {
    uri: "https://mytelanganaus.org/storage/app/gallery/Bathukamma-2024-6_Events_-2024_11032024_1730628538.jpg",
  },
  {
    uri: "https://mytelanganaus.org/storage/app/gallery/Bathukamma-2024-5_Events_-2024_11032024_1730628526.jpg",
  },
  {
    uri: "https://mytelanganaus.org/storage/app/gallery/Bathukamma-2024-4_Events_-2024_11032024_1730628503.jpg",
  },
  {
    uri: "https://mytelanganaus.org/storage/app/gallery/Bathukamma-2024-3_Events_-2024_11032024_1730628491.jpg",
  },
  {
    uri: "https://mytelanganaus.org/storage/app/gallery/Bathukamma-2024-2_Events_-2024_11032024_1730628478.jpg",
  },
  {
    uri: "https://mytelanganaus.org/storage/app/gallery/Bathukamma-2024-1_Events_-2024_11032024_1730628459.jpg",
  },
  {
    uri: "https://mytelanganaus.org/storage/app/gallery/Tampa-BOD-2024-5_Board_Meeting_11032024_1730627671.jpg",
  },
  {
    uri: "https://mytelanganaus.org/storage/app/gallery/Tampa-BOD-2024-4_Board_Meeting_11032024_1730627657.jpg",
  },
  {
    uri: "https://mytelanganaus.org/storage/app/gallery/Tampa-BOD-2024-3_Board_Meeting_11032024_1730627630.jpg",
  },
];

export default function Membership() {
  const [currentImageIndex, setImageIndex] = React.useState(0);
  const [visible, setIsVisible] = React.useState(false);
  const [seeHeader, setSeeHeader] = React.useState(true);

  const setImageView = (index) => {
    setImageIndex(index);
    setIsVisible(true);
    setSeeHeader(false);
  }

  const hideImageView = () => {
    setIsVisible(false);
    setSeeHeader(true);
  }

  return (
    <ScrollScreen show={seeHeader}>
        <HeaderText>Media</HeaderText>
        <ScrollView>
          <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
            {images.map((value, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => setImageView(i)}
                style={{padding: 10}}
              >
                <Image source={{uri: value.uri}} style={{width: 120, height: 120}}/>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
          <ImageView
            images={images}
            imageIndex={currentImageIndex}
            visible={visible}
            onRequestClose={() => hideImageView()}
            presentationStyle="overFullScreen"
          />
    </ScrollScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  containerStyle: {
    padding: 20,
    margin: 20
  }
});