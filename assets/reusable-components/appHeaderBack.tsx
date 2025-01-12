import * as React from 'react';
import {View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Icon, withTheme } from 'react-native-paper';
import { useRouter, Link } from 'expo-router';
import { Dropdown } from 'react-native-paper-dropdown';

import { setLocation } from '@/assets/data/global';
import { HeaderText } from './headerText';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const OPTIONS = [
  { label: 'Dallas', value: 'Dallas' },
  { label: 'Atlanta', value: 'Atlanta' },
  { label: 'Charlotte', value: 'Charlotte' },
];

function AppHeader (props) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{marginLeft: 20, marginTop: 18}} onPress={() => router.back()}>
        <Icon
            source="arrow-left"
            color={props.theme.colors.outline}
            size={45}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 75,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3
  }
});

export default withTheme(AppHeader);