import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { DrawerContent } from './screens/DrawerContent'

import {HomeStackScreen} from './stacks/MainStack'
import  {DetailsStackScreen} from './stacks/MainStack'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} /> } >
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Details" component={DetailsStackScreen} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}
 export default App;