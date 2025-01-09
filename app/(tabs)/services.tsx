import * as React from 'react';
import { View, Dimensions, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { HeaderText } from '@/assets/reusable-components/headerText';
import ScrollScreen from '@/assets/reusable-components/scrollScreen';
import _ from 'lodash';

import servicesData from '@/assets/data/services.json';
import { BodyText, BodyTextService } from '@/assets/reusable-components/bodyText';
import { router } from 'expo-router';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Services = servicesData;

export default function AboutScreen() {
  
  return (
    <ScrollScreen>
      <ScrollView>
        <View style={{flex: 1}}>
          <HeaderText style={{marginTop: 20, marginBottom: 20}}>Services</HeaderText>
          <View>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              {
                Array.isArray(Services) && Services.map((service, i) => {
                  return (
                    <TouchableOpacity
                      key={i}
                      onPress={() => router.push(`/${service.url}`)}
                      style={[styles.button]}>
                      <Image
                      source={{uri: _.get(service, 'image', '')}}
                        style={{width: 70, height: 70, marginLeft: '25%', marginBottom: 10}}/>
                      <BodyTextService style={{width: '100%'}}>{_.get(service, 'name', '')}</BodyTextService>
                    </TouchableOpacity>
                  )
                })
              }
            </View>
          </View>
        </View>
      </ScrollView>  
    </ScrollScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width
  },
  text: {
    color: '#fff',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'repeat',
  },
  shadowProp: {
    shadowColor: 'black',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  button: {
    borderRadius: 15,
    alignSelf: 'flex-start',
    marginRight: '3%',
    marginBottom: 15,
    width: '30%',
    height: 150,
    backgroundColor: 'white',
    justifyContent: 'center'
  },
});