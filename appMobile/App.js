import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { DrawerContent } from './screens/DrawerContent';

import {HomeStackScreen} from './stacks/MainStack';
import {PerfilStackScreen} from './stacks/MainStack';
import {ViajesStackScreen} from './stacks/MainStack';
import {EstadisticasStackScreen} from './stacks/MainStack';
import {FacturacionStackScreen} from './stacks/MainStack';
import {AyudaStackScreen} from './stacks/MainStack';
import {ConfigStackScreen} from './stacks/MainStack';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import RootStack from './src/RootStack'

const App = () => {
  return (
    <NavigationContainer>

      {/* <RootStack /> */}
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} /> } >
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Perfil" component={PerfilStackScreen} />
        <Drawer.Screen name="Viajes" component={ViajesStackScreen} />
        <Drawer.Screen name="Estadisticas" component={EstadisticasStackScreen} />
        <Drawer.Screen name="Facturacion" component={FacturacionStackScreen} />
        <Drawer.Screen name="Ayuda" component={AyudaStackScreen} />
        <Drawer.Screen name="Config" component={ConfigStackScreen} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}
 export default App;