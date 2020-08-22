import React, {useState, useEffect} from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';
import { ListItem } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

const NotificacionesScreen = ({navigation}) => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

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
          setLoading(false)       
         
         
          
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

    loading ?

    <View style={[styles.loading]}>
    <ActivityIndicator size="large" color="#00ff00" />
    </View>
    :

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
          onPress={() => {navigation.navigate('NotificacionDetalle', {
            encabezado: e.encabezado, 
            descripcion: e.descripcion 
          })}}
          
        />
        )
    }
        )
    }
  </View>
  )
};

export default NotificacionesScreen;

const styles = StyleSheet.create({
  
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }

})