import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';


const NotificacionesScreen = () => {
  const list = [
    {
       name: 'Administradora Leticia',
       avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
       subtitle: 'Tu sanción ha sido revocada'
    },
    {
        name: 'Administrador Squarepants',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Tienes una nueva sancion'
    },
   ];
   
  

  return ( 
  <View>
    {
      list.map((l, i) => (
        <ListItem
          key={i}
          leftAvatar={{  source: { uri: l.avatar_url } }}
          title={l.name}
          titleStyle= {{marginLeft: 15}}
          subtitleStyle= {{marginLeft: 15}}
          subtitle={l.subtitle}
          bottomDivider
        />
      ))
    }
  </View>
  )
};

export default NotificacionesScreen;