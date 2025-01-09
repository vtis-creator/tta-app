import * as React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const width = Dimensions.get('window').width;


export const BackgroundImageSwitch = () => {

  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/logo.png')}
        style={styles.image}
      />
        <LinearGradient colors={['transparent', 'transparent', '#FAF9F6', '#fff']} style={[styles.background]} />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width, 
    height: 250,
    position: 'absolute', 
    marginTop: 15
  },
  background: {
    position: 'absolute',
    height: 300,
    width: '100%'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});