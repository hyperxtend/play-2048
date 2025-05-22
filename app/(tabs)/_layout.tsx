import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import Entypo from '@expo/vector-icons/Entypo';

// Modern complementary color scheme
const TAN = '#E9D8A6';        // Soft tan
const BROWN = '#7C5E3C';      // Rich brown
const TEAL = '#4ECDC4';       // Modern teal accent
const OFF_WHITE = '#F7F7F7';  // Soft off-white for background

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: TEAL,
        tabBarInactiveTintColor: BROWN,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            backgroundColor: OFF_WHITE,
            borderTopWidth: 2,
            borderColor: OFF_WHITE
          },
          default: {
            backgroundColor: OFF_WHITE,
            borderTopWidth: 2,
            borderColor: OFF_WHITE
          },
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Play',
          tabBarIcon: ({ color }) => <Entypo name="game-controller" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Stats',
          tabBarIcon: ({ color }) => <Entypo name="trophy" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
