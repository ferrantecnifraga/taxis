import React, {useState, useEffect} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

const NotificacionesScreen = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchMyAPI = async () => {
      let email2 =  await AsyncStorage.getItem('email')
      let password2 = await AsyncStorage.getItem('password')
      let idTaxista = await AsyncStorage.getItem('idTaxista')
      
        let response = await fetch('https://taxis-lleida.herokuapp.com/api/taxistas/notificaciones', {
          method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email : email2 ,
                password : password2,
                idTaxista: idTaxista
            })
          })
  
        let response2 = await response.json()
        console.warn(response2.notificaciones)
        
          setData(response2.notificaciones)
                 
         
         
          
       }
  
      fetchMyAPI()
     }, [])



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
      data.map((e, i) => {
        return(
        <ListItem
          key={i}
          leftAvatar={{  source: require("../assets/logolleida2.png") }}
          title={e.encabezado}
          titleStyle= {{marginLeft: 15}}
          subtitleStyle= {{marginLeft: 15}}
          subtitle={e.descripcion}
          bottomDivider
        />
        )
    }
        )
    }
  </View>
  )
};

export default NotificacionesScreen;