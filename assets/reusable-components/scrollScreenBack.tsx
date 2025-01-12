import * as React from 'react';
import {View, StyleSheet, Dimensions } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { withTheme } from 'react-native-paper';
import AppHeaderBack from './appHeaderBack';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

function ScrollScreenBack (props) {

  return (
    <View style={{flex: 1, backgroundColor: props.theme.colors.background}}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container} edges={['top', 'left', 'right', 'bottom']}>
        <AppHeaderBack />
          <View style={[{flex:1, padding: 20, marginTop: 2, backgroundColor: '#fff'}]}>
            {props.children}
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
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

export default withTheme(ScrollScreenBack);