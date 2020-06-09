import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Icon from 'react-native-vector-icons/Ionicons'

import HomeScreen from '../screens/HomeScreen';
import AyudaScreen from '../screens/AyudaScreen';

const HomeStack = createStackNavigator();
const AyudaStack = createStackNavigator();

export const HomeStackScreen = ({navigation}) => ( 
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
      title:'Overview',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size= {25}
        backgroundColor="#009387" onPress={() => 
        navigation.openDrawer()}></Icon.Button>
      )
    }} />
  </HomeStack.Navigator> 
);


export const AyudaStackScreen = ({navigation}) => ( 
  <AyudaStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <AyudaStack.Screen name="Ayuda" component={AyudaScreen} 
    options={{
      headerLeft: () => (
        <Icon.Button name="ios-menu" size= {25}
        backgroundColor="#009387" onPress={() => 
        navigation.openDrawer()}></Icon.Button>
      )
    }} />
  </AyudaStack.Navigator> 
);

