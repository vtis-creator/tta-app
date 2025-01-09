import { Text as RNText, View, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";

export const HeaderText = (props) => {
  const { colors } = useTheme();
  return (
    <View style={[props.style]}>
        <RNText style={[styles.heading, styles.quickSandBold, {fontWeight: 'bold', color: colors.primary}]}>{props.children}</RNText>
    </View>
)};

export const HeaderTextUnderline = (props) => {
  const { colors } = useTheme();
  return (
    <View style={[props.style]}>
        <RNText style={[styles.heading, styles.quickSandBold, {fontWeight: 'bold', color: colors.primary}]}>{props.children}</RNText>
        <View style={{ width: '100%', height: 2, backgroundColor: colors.primary, marginTop: 5, marginBottom: 10}}/>
    </View>
)};

export const HeaderTextModal = (props) => {
  const { colors } = useTheme();
  return (
    <View style={[props.style]}>
        <RNText style={[styles.heading, styles.quickSandBold, {color: colors.primary, textAlign: 'center'}]}>{props.children}</RNText>
    </View>
)};

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    marginLeft: 10
  },
  quickSandBold: {
    fontFamily: 'Roboto-Black'
  }
});