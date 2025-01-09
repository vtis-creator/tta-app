import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Matrimony() {
  const router = useRouter();

  setTimeout(() => {
    router.push("/")
  }, 500);
  

  return (
    <View />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  containerStyle: {
    padding: 20,
    margin: 20
  }
});