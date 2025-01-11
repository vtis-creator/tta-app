import { Text as BText, View, StyleSheet } from "react-native";
import _ from 'lodash';
import { useTheme } from "react-native-paper";

interface TextProps {
  children: React.ReactNode;
}

export const BodyText = (props) => {
  const { colors } = useTheme();
  return (
    <View style={[props.style]}>
      <BText style={[styles.roboto, {color: colors.onBackground}]}>{props.children}</BText>
    </View>
)};
export const BodyTextReadMore = (props) => {
  const { colors } = useTheme();
  return (
    <View style={[props.style]}>
        <BText style={[styles.roboto, {color: colors.primary, fontWeight: 'bold'}]}>{props.children}</BText>
    </View>
)};

export const BodyTextError = (props) => {
  const { colors } = useTheme();
  return (
    <View style={[props.style]}>
        <BText style={[ styles.error, styles.roboto, {color: colors.error}]}>{props.children}</BText>
    </View>
)};

export const BodyTextCard = (props) => {
  const { colors } = useTheme();
  return (
    <View style={{flexDirection:"row", margin: 10,  padding: 10}}>
      <BText style={[styles.roboto, styles.frontText, {color: colors.primary}]}>{props.cat}:</BText>
      <BText style={[styles.roboto, {flex:1, justifyContent: 'flex-end', color: colors.onBackground}]}>{props.text}</BText>
    </View>
  )
}

export const BodyTextCardWithHilight = (props) => {
  const { colors } = useTheme();
  return (
    <View style={{flexDirection:"row", margin: 10,  padding: 10, borderBottomWidth: 1, borderBottomColor: 'grey'}}>
      <BText style={[styles.roboto, styles.frontText, {color: colors.primary}]}>{props.cat}:</BText>
      <BText style={[styles.roboto, {flex:1, justifyContent: 'flex-end', color: colors.onBackground}]}>{props.text}</BText>
    </View>
  )
}

export const BodyTextService = (props) => {
  const { colors } = useTheme();
  return (
    <View style={[props.style]}>
      <BText style={[styles.roboto, {color: colors.onBackground, textAlign: 'center'}]}>{props.children}</BText>
    </View>
)};

export const BodyTextCheckbox = (props) => {
  const { colors } = useTheme();
  return (
    <View style={[props.style]}>
      <BText style={[styles.roboto, {color: colors.onBackground, textAlign: 'left', fontSize: 12}]}>{props.children}</BText>
    </View>
)};

const styles = StyleSheet.create({
  frontText: {
    flex:1,
    justifyContent: 'flex-start',
  },
  error: {
    paddingLeft: 15
  },
  roboto: {
    fontFamily: 'Roboto-Thin',
    fontSize: 16,
    lineHeight: 22,
    marginLeft: 10
  }
});