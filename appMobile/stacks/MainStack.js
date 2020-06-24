import React from 'react'
import { Platform, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import {  Badge, withBadge } from 'react-native-elements'

import Icon from 'react-native-vector-icons/Ionicons'

import HomeScreen from '../screens/HomeScreen';
import MensajesScreen from '../screens/MensajesScreen';
import NotificacionesScreen from '../screens/NotificacionesScreen';
import PerfilScreen from '../screens/PerfilScreen';
import ViajesScreen from '../screens/ViajesScreen';
import EstadisticasScreen from '../screens/EstadisticasScreen';
import FacturacionScreen from '../screens/FacturacionScreen';
import AyudaScreen from '../screens/AyudaScreen';
import ConfigScreen from '../screens/ConfigScreen';


const HomeStack = createStackNavigator();
const MensajesStack = createStackNavigator();
const NotificacionesStack = createStackNavigator();
const PerfilStack = createStackNavigator();
const ViajesStack = createStackNavigator();
const EstadisticasStack = createStackNavigator();
const FacturacionStack = createStackNavigator();
const AyudaStack = createStackNavigator();
const ConfigStack = createStackNavigator();

//Styles header:
const screenOpt = {
  headerStyle: {
    backgroundColor: '#009387',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
}

//Badge 
const BadgedIcon = withBadge(99)(Icon)

export const HomeStackScreen = ({navigation}) => ( 
  <HomeStack.Navigator name="Home" component={HomeScreen} screenOptions={screenOpt} >
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
      title:'Inicio',
      headerLeft: () => ( 
        <View paddingLeft={1}>
          <Icon.Button style={styles.Icon} name="ios-menu" size= {30} onPress={() => 
          navigation.openDrawer()}/>
        </View>
      ),
      headerRight: () => (
        <View style={styles.iconContainer}>
          <BadgedIcon style={styles.Icon} size= {30} 
          name={Platform.OS === "ios" ? "ios-notifications" : "md-notifications"}
          onPress={() => {navigation.navigate('Notificaciones')}}/>
          <BadgedIcon style={styles.Icon} size= {30}   name={Platform.OS === "ios" ? "ios-mail" : "md-mail"} 
          onPress={() => {navigation.navigate('Mensajes')}}/>
        </View>
      )      
    }} />
  </HomeStack.Navigator> 
);

export const MensajesStackScreen = ({navigation}) => ( 
  <MensajesStack.Navigator screenOptions={screenOpt} >
    <MensajesStack.Screen name="Mensajes" component={MensajesScreen} options={{
      title:'Mis mensajes',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size= {30}
        backgroundColor="#009387" onPress={() => 
        navigation.openDrawer()}/>
      )
    }} />
  </MensajesStack.Navigator> 
);

export const NotificacionesStackScreen = ({navigation}) => ( 
  <NotificacionesStack.Navigator screenOptions={screenOpt} >
    <NotificacionesStack.Screen name="Notificaciones" component={NotificacionesScreen} options={{
      title:'Mis Notificaciones',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size= {30}
        backgroundColor="#009387" onPress={() => 
        navigation.openDrawer()}/>
      )
    }} />
  </NotificacionesStack.Navigator> 
);

export const PerfilStackScreen = ({navigation}) => ( 
  <PerfilStack.Navigator screenOptions={screenOpt} >
    <PerfilStack.Screen name="Perfil" component={PerfilScreen} options={{
      title:'Mi perfil',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size= {30}
        backgroundColor="#009387" onPress={() => 
        navigation.openDrawer()}/>
      )
    }} />
  </PerfilStack.Navigator> 
);

export const ViajesStackScreen = ({navigation}) => ( 
  <ViajesStack.Navigator screenOptions={screenOpt}>
    <ViajesStack.Screen name="Viajes" component={ViajesScreen} options={{
      title:'Mis viajes',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size= {30}
        backgroundColor="#009387" onPress={() => 
        navigation.openDrawer()}/>
      )
    }} />
  </ViajesStack.Navigator> 
);

export const EstadisticasStackScreen = ({navigation}) => ( 
  <EstadisticasStack.Navigator screenOptions={screenOpt}>
    <EstadisticasStack.Screen name="Estadisticas" component={EstadisticasScreen} options={{
      title:'Estadisticas',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size= {30}
        backgroundColor="#009387" onPress={() => 
        navigation.openDrawer()}/>
      )
    }} />
  </EstadisticasStack.Navigator> 
);

export const FacturacionStackScreen = ({navigation}) => ( 
  <FacturacionStack.Navigator screenOptions={screenOpt}>
    <FacturacionStack.Screen name="Facturacion" component={FacturacionScreen} options={{
      title:'Facturación',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size= {30}
        backgroundColor="#009387" onPress={() => 
        navigation.openDrawer()}/>
      )
    }} />
  </FacturacionStack.Navigator> 
);

export const AyudaStackScreen = ({navigation}) => ( 
  <AyudaStack.Navigator screenOptions={screenOpt}>
    <AyudaStack.Screen name="Ayuda" component={AyudaScreen} 
    options={{
      headerLeft: () => (
        <Icon.Button name="ios-menu" size= {30}
        backgroundColor="#009387" onPress={() => 
        navigation.openDrawer()}/>
      )
    }} />
  </AyudaStack.Navigator> 
);

export const ConfigStackScreen = ({navigation}) => ( 
  <ConfigStack.Navigator screenOptions={screenOpt}>
    <ConfigStack.Screen name="Config" component={ConfigScreen} options={{
      title:'Configuración',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size= {30}
        backgroundColor="#009387" onPress={() => 
        navigation.openDrawer()}/>
      )
    }} />
  </ConfigStack.Navigator> 
);

const styles = StyleSheet.create({
  Icon:{
    paddingLeft: 15,
    color: '#fff',
    backgroundColor: "#009387"
  },
  
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 130,
    marginRight: 12
  }
});