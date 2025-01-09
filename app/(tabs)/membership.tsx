import * as React from 'react';
import { StyleSheet } from 'react-native';

import ScrollScreen from '@/assets/reusable-components/scrollScreen';
import SignUpMember from '@/assets/reusable-components/signUpMember';

import { TabsProvider, Tabs, TabScreen } from 'react-native-paper-tabs';
import SearchMember from '@/assets/reusable-components/SearchMember';

export default function Membership() {

  return (
    <ScrollScreen>
      <TabsProvider defaultIndex={0}>
          <Tabs>
          <TabScreen label="Sign Up">
            <SignUpMember />
          </TabScreen>
          <TabScreen label="Search">
            <SearchMember />
          </TabScreen>
        </Tabs>
        </TabsProvider>
    </ScrollScreen>
  );
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