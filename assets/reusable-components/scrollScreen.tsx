import * as React from 'react';
import {View, StyleSheet, Dimensions } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { withTheme } from 'react-native-paper';
import AppHeader from './appHeader';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

function ScrollScreen (props) {
  
  return (
    <View style={{flex: 1, backgroundColor: props.theme.colors.background}}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container} edges={['top', 'left', 'right', 'bottom']} forceInset={{ top: 'always', horizontal: 'never' }}>
        <AppHeader show={props.show}/>
          <View style={[{flex:1, padding: 20, backgroundColor: '#f2f2f2'}]}>
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

export default withTheme(ScrollScreen);