import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeStackScreen from '../screens/HomeScreen';
import PerfilScreen from '../screens/PerfilScreen';
import ConfigScreen from '../screens/ConfigScreen';

const Tab = createBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
  initialRouteName="Home"
  activeTintColor= '#e91e63'
>
  <Tab.Screen
    name="Home"
    component={HomeStackScreen}
    options={{
      tabBarLabel: 'Inicio',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="home" color={color} size={size} />
      ),
    }}
  />
  <Tab.Screen
    name="Notifications"
    component={ConfigScreen}
    options={{
      tabBarLabel: 'Notificaciones',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="bell" color={color} size={size} />
      ),
    }}
  />
  <Tab.Screen
    name="Mensajes"
    component={PerfilScreen}
    options={{
      tabBarLabel: 'Mensajes',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="account" color={color} size={size} />
      ),
    }}
  />
</Tab.Navigator>
);

export default MainTabScreen;