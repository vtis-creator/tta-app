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
    <View style={{height: 75, backgroundColor: props.theme.colors.background, position: 'relative'}}>
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
    flex: 1,
    width: width,
    height: height,
    elevation: 0
  }
});

export default withTheme(AppHeader);