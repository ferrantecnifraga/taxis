import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { DrawerContent } from './screens/DrawerContent';

import {HomeStackScreen} from './stacks/MainStack';
import {AyudaStackScreen} from './stacks/MainStack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import RootStack from './src/RootStack'

const App = () => {
  return (
    <NavigationContainer>

      <RootStack />
      {/* <Drawer.Navigator drawerContent={props => <DrawerContent {...props} /> } >
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Ayuda" component={AyudaStackScreen} />

      </Drawer.Navigator> */}
    </NavigationContainer>
  );
}
 export default App;