import * as React from 'react';
import { Stack } from 'expo-router';
import {
  MD3LightTheme,
  PaperProvider,
} from 'react-native-paper';
import store from '@/assets/data/store';

import { Provider } from 'react-redux';

import LightTheme from '@/assets/LightTheme.json';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {

  const paperTheme = { ...MD3LightTheme, colors: LightTheme.colors };

  return (
    <Provider store={store}>
      <GestureHandlerRootView>
        <PaperProvider theme={paperTheme}>
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="+not-found" options={{ headerShown: false }}/>
              <Stack.Screen name="login" options={{ headerShown: false }}/>
              <Stack.Screen name="donate" options={{ headerShown: false }}/>
              <Stack.Screen name="aboutUs" options={{ headerShown: false }}/>
              <Stack.Screen name="president" options={{ headerShown: false }}/>
              <Stack.Screen name="community" options={{ headerShown: false }}/>
              <Stack.Screen name="campus" options={{ headerShown: false }}/>
              <Stack.Screen name="orphans" options={{ headerShown: false }}/>
              <Stack.Screen name="health" options={{ headerShown: false }}/>
              <Stack.Screen name="school" options={{ headerShown: false }}/>
              <Stack.Screen name="seminars" options={{ headerShown: false }}/>
              <Stack.Screen name="scholarship" options={{ headerShown: false }}/>
              <Stack.Screen name="orginization" options={{ headerShown: false }}/>
            </Stack>
        </PaperProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}
