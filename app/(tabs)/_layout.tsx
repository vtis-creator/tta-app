import { Tabs } from 'expo-router';

import AppHeader from '@/assets/reusable-components/appHeader';

import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
  return (
      <Tabs
      screenOptions={{
          tabBarActiveTintColor: 'white',
          headerStyle: {
            shadowOffset: {width: 20, height: 20},
            shadowColor: 'white',
            shadowOpacity: 1,
            shadowRadius: 20,
          },
          headerShadowVisible: false,
          headerTintColor: '#b03600',
          tabBarStyle: {
            backgroundColor: '#b03600',
            
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color='white' size={24} />
            ),
          }}
        />
        <Tabs.Screen
          name="membership"
          options={{
            title: 'Membership',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? 'card-sharp' : 'card-outline'} color='white' size={24}/>
            ),
          }}
        />
        <Tabs.Screen
          name="matrimony"
          options={{
            title: 'Matrimony',
            href: 'https://matrimony.mytelanganaus.org/',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? 'people-circle' : 'people-outline'} color='white' size={24}/>
            ),
          }}
        />
        <Tabs.Screen
          name="services"
          options={{
            title: 'Services',
            header: () => <AppHeader />,
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? 'business-sharp' : 'business-outline'} color='white' size={24}/>
            ),
          }}
        />
        <Tabs.Screen
          name="events"
          options={{
            title: 'Events',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? 'calendar-clear-sharp' : 'calendar-clear-outline'} color='white' size={24}/>
            ),
          }}
        />
        <Tabs.Screen
          name="media"
          options={{
            title: 'Media',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? 'image-sharp' : 'image-outline'} color='white' size={24}/>
            ),
          }}
        />
      </Tabs>
  );
}
