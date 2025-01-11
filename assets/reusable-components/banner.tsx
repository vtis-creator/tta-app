import React from 'react';
import { View, StyleSheet, Dimensions, Image, Text, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';

const width = Dimensions.get('window').width;

const Banner = ({ title, subtitle, imageUri, buttonLabel, onPress,_color }) => {
  const { colors } = useTheme(); // Access theme colors

  return (
    <View style={[styles.bannerContainer]}>
      {/* Background Banner Image */}
      <Image
        source={imageUri}
        style={[styles.bannerImage]}
        resizeMode="cover"
      />
      {/* Text Content */}
      <View style={styles.textContainer}>
        <Text style={[styles.bannerTitle, { color: "black"}]}>
          {title}
        </Text>


        {/* Call-to-Action Button */}
        <TouchableOpacity
          style={[styles.bannerButton, { backgroundColor: colors.primary }]}
          onPress={onPress}
        >
          <Text style={[styles.buttonText, { color: colors.onPrimary }]}>
            {buttonLabel}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    position: 'relative',
    width: width - 50,
    height: width / 2.5,
    borderRadius: 20,
    overflow: 'hidden',
    marginVertical: 20,
    marginTop: 50,
    alignSelf: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    backgroundColor:"#777777"
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 20,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 20,
    color:'black'
  },
bannerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color:'black'
  },
  bannerSubtitle: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
  },
  bannerButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Banner;

