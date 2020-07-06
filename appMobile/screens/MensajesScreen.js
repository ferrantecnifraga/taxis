import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Card, ListItem } from 'react-native-elements';

const MensajesScreen = ({navigation}) => {

  const list = [
    {
       name: 'Bryan Occonner',
       avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
       subtitle: 'Quisiera cancelar mi viaje'
    },
    {
        name: 'Will Squarepants',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'quiero hacer un cambio en la agenda'
    },
   ]

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
          chevron
          onPress={() => {navigation.navigate('Notificaciones')}}
        />
      ))
    }
  </View>
  )
}



export default MensajesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});