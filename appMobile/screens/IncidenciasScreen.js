import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

const IncidenciasScreen = () => {
  const list = [
    {
       name: 'Incidencia 17/05/2020',
       subtitle: 'Acabo de chocar'
    },
    {
        name: 'Incidencia 11/08/2020',
        subtitle: 'El cliente no se presento y no hay rep...'
    },
   ];
   
  

  return ( 
  <View>
    {
      list.map((l, i) => (
        <ListItem
          key={i}
          title={l.name}
          subtitle={l.subtitle}
          bottomDivider
        />
      ))
    }
  </View>
  )
};
export default IncidenciasScreen;