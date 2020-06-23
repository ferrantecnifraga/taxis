import React from 'react'
import { Platform, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack'

import Icon from 'react-native-vector-icons/Ionicons'

import HomeScreen from '../screens/HomeScreen';
import PerfilScreen from '../screens/PerfilScreen';
import ViajesScreen from '../screens/ViajesScreen';
import EstadisticasScreen from '../screens/EstadisticasScreen';
import FacturacionScreen from '../screens/FacturacionScreen';
import AyudaScreen from '../screens/AyudaScreen';
import ConfigScreen from '../screens/ConfigScreen';


const HomeStack = createStackNavigator();
const PerfilStack = createStackNavigator();
const ViajesStack = createStackNavigator();
const EstadisticasStack = createStackNavigator();
const FacturacionStack = createStackNavigator();
const AyudaStack = createStackNavigator();
const ConfigStack = createStackNavigator();

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
      title:'Inicio',
      headerLeft: () => ( 
        <View>
          <Icon.Button name="ios-menu" size= {25}
          backgroundColor="#009387" onPress={() => 
          navigation.openDrawer()}></Icon.Button>
        </View>
      ),
      headerRight: () => (
        <View style={styles.iconContainer}>
          <Icon color='#fff' size= {25} backgroundColor="#009387" name={Platform.OS === "ios" ? "ios-notifications" : "md-search"} />
          <Icon color='#fff' size= {25} backgroundColor="#009387" name={Platform.OS === "ios" ? "ios-mail" : "md-mail"} />
        </View>
      ),
      
    }} />

  </HomeStack.Navigator> 
);

export const PerfilStackScreen = ({navigation}) => ( 
  <PerfilStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <PerfilStack.Screen name="Perfil" component={PerfilScreen} options={{
      title:'Mi perfil',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size= {25}
        backgroundColor="#009387" onPress={() => 
        navigation.openDrawer()}></Icon.Button>
      )
    }} />
  </PerfilStack.Navigator> 
);

export const ViajesStackScreen = ({navigation}) => ( 
  <ViajesStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <ViajesStack.Screen name="Viajes" component={ViajesScreen} options={{
      title:'Mis viajes',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size= {25}
        backgroundColor="#009387" onPress={() => 
        navigation.openDrawer()}></Icon.Button>
      )
    }} />
  </ViajesStack.Navigator> 
);

export const EstadisticasStackScreen = ({navigation}) => ( 
  <EstadisticasStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <EstadisticasStack.Screen name="Estadisticas" component={EstadisticasScreen} options={{
      title:'Estadisticas',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size= {25}
        backgroundColor="#009387" onPress={() => 
        navigation.openDrawer()}></Icon.Button>
      )
    }} />
  </EstadisticasStack.Navigator> 
);

export const FacturacionStackScreen = ({navigation}) => ( 
  <FacturacionStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <FacturacionStack.Screen name="Facturacion" component={FacturacionScreen} options={{
      title:'Facturacion',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size= {25}
        backgroundColor="#009387" onPress={() => 
        navigation.openDrawer()}></Icon.Button>
      )
    }} />
  </FacturacionStack.Navigator> 
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

export const ConfigStackScreen = ({navigation}) => ( 
  <ConfigStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <ConfigStack.Screen name="Config" component={ConfigScreen} options={{
      title:'Configuración',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size= {25}
        backgroundColor="#009387" onPress={() => 
        navigation.openDrawer()}></Icon.Button>
      )
    }} />
  </ConfigStack.Navigator> 
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    paddingLeft: 10,
    
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 120
  }
});