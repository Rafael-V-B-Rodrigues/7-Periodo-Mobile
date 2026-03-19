import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScrollViewScreen from '../screens/scroll/ScrollViewScreen';
import FlatListScreen from '../screens/scroll/FlatListScreen';
import SectionListScreen from '../screens/scroll/SectionListScreen';

const Tab = createBottomTabNavigator();

export default function ScrollTabsNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen 
        name="ScrollView" 
        component={ScrollViewScreen} 
        options={{ tabBarLabel: 'ScrollView' }} 
      />
      <Tab.Screen 
        name="FlatList" 
        component={FlatListScreen} 
        options={{ tabBarLabel: 'FlatList' }} 
      />
      <Tab.Screen 
        name="SectionList" 
        component={SectionListScreen} 
        options={{ tabBarLabel: 'SectionList' }} 
      />
    </Tab.Navigator>
  );
}