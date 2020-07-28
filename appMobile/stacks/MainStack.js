import React from 'react'
import { Platform, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {  Badge, withBadge } from 'react-native-elements'

import Icon from 'react-native-vector-icons/Ionicons'

//Stack del Drawer
import HomeScreen from '../screens/HomeScreen';
import NotificacionesScreen from '../screens/NotificacionesScreen';
import PerfilScreen from '../screens/PerfilScreen';
import ViajesScreen from '../screens/ViajesScreen';
import EstadisticasScreen from '../screens/EstadisticasScreen';
import IncidenciasScreen from '../screens/IncidenciasScreen';
import FacturacionScreen from '../screens/FacturacionScreen';
import AyudaScreen from '../screens/AyudaScreen';
import SoporteScreen from '../screens/SoporteScreen';

//Stack de viajes
import ProximosViajes from '../screens/dataViajes/ProximosViajes'
import atenderViajes from '../screens/dataViajes/atenderViajes'
import historialViajes from '../screens/dataViajes/historialViajes'
import rechazadosViajes from '../screens/dataViajes/rechazadosViajes'
import costosPorcentajes from '../screens/dataViajes/costosPorcentajes'
import sectoresServicios from '../screens/dataViajes/sectoresServicios'

//Stack de estadisticas
import viajesPasados from '../screens/dataEstadisticas/viajesPasados'
import proxViajesEst from '../screens/dataEstadisticas/proxViajesEst'
import sancionesEst from '../screens/dataEstadisticas/sancionesEst'
import totalGanado from '../screens/dataEstadisticas/totalGanado'

//Stack de FACTURAS
import totalFacturas from '../screens/dataFacturas/totalFacturas'
import verFacturas from '../screens/dataFacturas/verFacturas'
import ultimasFacturas from '../screens/dataFacturas/ultimasFacturas'
import agregarFacturas from '../screens/dataFacturas/agregarFacturas'

//Stack del drawer
const HomeStack = createStackNavigator();
const NotificacionesStack = createStackNavigator();
const PerfilStack = createStackNavigator();
const ViajesStack = createStackNavigator();
const EstadisticasStack = createStackNavigator();
const IncidenciasStack = createStackNavigator();
const FacturacionStack = createStackNavigator();
const AyudaStack = createStackNavigator();
const SoporteStack = createStackNavigator();


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
          name={Platform.OS === "ios" ? "ios-mail" : "md-notifications"} 
          onPress={() => {navigation.navigate('Notificaciones')}}/>
        </View>
      )      
    }} />
  </HomeStack.Navigator> 
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

//Mi stack para navegar entre screens de viajes
export const ViajesStackScreen = ({navigation}) => (
  <ViajesStack.Navigator screenOptions={screenOpt}>
    <ViajesStack.Screen name="Viajes" component={ViajesScreen} options={{ 
      title:'Mis viajes', 
      headerLeft: () => (
        <Icon.Button name="ios-menu" size= {30}
        backgroundColor="#009387" 
        onPress={() => navigation.openDrawer()}/>
      )
    }}/>
    <ViajesStack.Screen name="ProximosViajes" component={ProximosViajes} 
    options={{
      title:'Proximos viajes',
      headerLeft: () => (
        <Icon.Button name="md-arrow-back" size= {30}
        backgroundColor="#009387"
        onPress={() => navigation.navigate('Viajes', {screen: 'Viajes'})}/>
      )
    }}/>
    <ViajesStack.Screen name="atenderViajes" component={atenderViajes} 
    options={{
      title:'Viajes por atender',
      headerLeft: () => (
        <Icon.Button name="md-arrow-back" size= {30}
        backgroundColor="#009387"
        onPress={() => navigation.navigate('Viajes', {screen: 'Viajes'})}/>
      )
    }}/>
    <ViajesStack.Screen name="historialViajes" component={historialViajes} 
    options={{
      title:'Historial de viajes',
      headerLeft: () => (
        <Icon.Button name="md-arrow-back" size= {30}
        backgroundColor="#009387"
        onPress={() => navigation.navigate('Viajes', {screen: 'Viajes'})}/>
      )
    }}/>
    <ViajesStack.Screen name="rechazadosViajes" component={rechazadosViajes} 
    options={{
      title:'Viajes rechazados',
      headerLeft: () => (
        <Icon.Button name="md-arrow-back" size= {30}
        backgroundColor="#009387"
        onPress={() => navigation.navigate('Viajes', {screen: 'Viajes'})}/>
      )
    }}/>
    <ViajesStack.Screen name="costosPorcentajes" component={costosPorcentajes} 
    options={{
      title:'Costos y Porcentajes',
      headerLeft: () => (
        <Icon.Button name="md-arrow-back" size= {30}
        backgroundColor="#009387"
        onPress={() => navigation.navigate('Viajes', {screen: 'Viajes'})}/>
      )
    }}/>
    <ViajesStack.Screen name="sectoresServicios" component={sectoresServicios} 
    options={{
      title:'Sectores y Servicios',
      headerLeft: () => (
        <Icon.Button name="md-arrow-back" size= {30}
        backgroundColor="#009387"
        onPress={() => navigation.navigate('Viajes', {screen: 'Viajes'})}/>
      )
    }}/>
    
  </ViajesStack.Navigator>
);

//Mi stack para navegar entre screens de ESTADISTICAS
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
    <EstadisticasStack.Screen name="viajesPasados" component={viajesPasados} options={{
      title:'Viajes pasados',
      headerLeft: () => (
        <Icon.Button name="md-arrow-back" size= {30}
        backgroundColor="#009387" 
        onPress={() => navigation.navigate('Estadisticas', {screen: 'Estadisticas'})}
        />
      )
    }} />
    <EstadisticasStack.Screen name="proxViajesEst" component={proxViajesEst} options={{
      title:'Próximos viajes',
      headerLeft: () => (
        <Icon.Button name="md-arrow-back" size= {30}
        backgroundColor="#009387" 
        onPress={() => navigation.navigate('Estadisticas', {screen: 'Estadisticas'})}
        />
      )
    }} />
    <EstadisticasStack.Screen name="totalGanado" component={totalGanado} options={{
      title:'Total ganado',
      headerLeft: () => (
        <Icon.Button name="md-arrow-back" size= {30}
        backgroundColor="#009387" 
        onPress={() => navigation.navigate('Estadisticas', {screen: 'Estadisticas'})}
        />
      )
    }} />
    <EstadisticasStack.Screen name="sancionesEst" component={sancionesEst} options={{
      title:'Sanciones',
      headerLeft: () => (
        <Icon.Button name="md-arrow-back" size= {30}
        backgroundColor="#009387" 
        onPress={() => navigation.navigate('Estadisticas', {screen: 'Estadisticas'})}
        />
      )
    }} />
  </EstadisticasStack.Navigator> 
);

export const IncidenciasStackScreen = ({navigation}) => ( 
  <IncidenciasStack.Navigator screenOptions={screenOpt}>
    <IncidenciasStack.Screen name="Incidencias" component={IncidenciasScreen} options={{
      title:'Incidencias',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size= {30}
        backgroundColor="#009387" onPress={() => 
        navigation.openDrawer()}/>
      )
    }} />
  </IncidenciasStack.Navigator> 
);


//Stack de Facturas
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
    <FacturacionStack.Screen name="totalFacturas" component={totalFacturas} options={{
      title:'Total facturado',
      headerLeft: () => (
        <Icon.Button name="md-arrow-back" size= {30}
        backgroundColor="#009387" 
        onPress={() => navigation.navigate('Facturacion', {screen: 'Facturacion'})}
        />
      )
    }} />
    <FacturacionStack.Screen name="verFacturas" component={verFacturas} options={{
      title:'Mis Facturas',
      headerLeft: () => (
        <Icon.Button name="md-arrow-back" size= {30}
        backgroundColor="#009387" 
        onPress={() => navigation.navigate('Facturacion', {screen: 'Facturacion'})}
        />
      )
    }} />
    <FacturacionStack.Screen name="ultimasFacturas" component={ultimasFacturas} options={{
      title:'Últimas facturas',
      headerLeft: () => (
        <Icon.Button name="md-arrow-back" size= {30}
        backgroundColor="#009387" 
        onPress={() => navigation.navigate('Facturacion', {screen: 'Facturacion'})}
        />
      )
    }} />
    <FacturacionStack.Screen name="agregarFacturas" component={agregarFacturas} options={{
      title:'Agregar facturas',
      headerLeft: () => (
        <Icon.Button name="md-arrow-back" size= {30}
        backgroundColor="#009387" 
        onPress={() => navigation.navigate('Facturacion', {screen: 'Facturacion'})}
        />
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

export const SoporteStackScreen = ({navigation}) => ( 
  <SoporteStack.Navigator screenOptions={screenOpt}>
    <SoporteStack.Screen name="Soporte" component={SoporteScreen} 
    options={{
      headerLeft: () => (
        <Icon.Button name="ios-menu" size= {30}
        backgroundColor="#009387" onPress={() => 
        navigation.openDrawer()}/>
      )
    }} />
  </SoporteStack.Navigator> 
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
    width: 60,
    marginRight: 12
  }
});