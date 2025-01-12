import * as React from 'react';
import {View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Icon, useTheme, withTheme } from 'react-native-paper';
import { useNavigation, Link, useRouter } from 'expo-router';
import { Dropdown } from 'react-native-paper-dropdown';
import { useSelector, useDispatch } from 'react-redux';
import { selectCity, set } from '@/assets/reducers/citySlice';
 
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const OPTIONS = [
  { label: 'Dallas', value: 'Dallas' },
  { label: 'Atlanta', value: 'Atlanta' },
  { label: 'Charlotte', value: 'Charlotte' },
];

function AppHeader (props) {
  const navigation = useNavigation();
  const router = useRouter();
  const { colors } = useTheme();
  const city = useSelector((state) => state.city.value)
  const dispatch = useDispatch()

  React.useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  // use global value to autoset the dropdown acrross the pages

  return (
    <View style={[styles.container, {position: 'relative', height: 75}]}>
        <TouchableOpacity onPress={() => router.push('/')}>
          <Image source={require('@/assets/images/logo.png')} style={[props.show || props.show === undefined ? styles.showImage : styles.hideImage, {marginTop: 5, marginLeft: 15}]}/>
        </TouchableOpacity>
        <View style={[props.show || props.show === undefined ? styles.default : styles.hide, {width: 130, top: 10, right: 125}]}>
          <Dropdown
            mode="outlined"
            label="City"
            placeholder="Select City"
            options={OPTIONS}
            value={city}
            onSelect={(e) => dispatch(set(e))}
            menuContentStyle={{backgroundColor: 'white'}}
          />
        </View>
        <Link href="/login" style={[props.show || props.show === undefined ? styles.default : styles.hide, {width: 75, right: 25, top: 27}]}>
        <Icon
            source="account-outline"
            color={props.theme.colors.outline}
            size={35}
        />
        </Link>
        <View style={[props.show || props.show === undefined ? styles.default : styles.hide, {width: 35, right: 15, top: 29}]}>
        <Icon
            source="bell-outline"
            color={props.theme.colors.outline}
            size={25}
        />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  default: {
    position: 'absolute'
  },
  hide: {
    height: 0,
  },
  hideImage: {
    width: 0,
    height: 0
  },
  showImage: {
    width: 65,
    height: 65
  },
  container: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  }
});

export default withTheme(AppHeader);