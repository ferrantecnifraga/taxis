import React from "react";
import { View, Text, ScrollView, StyleSheet,Image } from "react-native";
import { Card, Divider, Button } from "react-native-elements";

const   NotificacionDetalle = ({route, navigation}) => {

const { encabezado, descripcion, tipo } = route.params;


const ButtonRender = () =>{
  if(tipo == 'Atender viaje') {
    return (
      <Button
            title="Ir a viajes por atender"
            buttonStyle={{width: '70%', alignSelf: 'center', marginTop: 30, backgroundColor: '#009387'}}
            onPress={() => navigation.navigate('Viajes', {screen: 'atenderViajes'})}
          />
    )
  } else if(tipo == 'Viaje confirmado') {
    return (
      <Button
            title="Ir a viajes programados"
            buttonStyle={{width: '70%', alignSelf: 'center', marginTop: 30, backgroundColor: '#009387'}}
            onPress={() => navigation.navigate('Viajes', {screen: 'ProximosViajes'})}
          />
    )
  } else if(tipo == 'Viaje rechazado') {
    return (
      <Button
            title="Ir a viajes rechazados"
            buttonStyle={{width: '70%', alignSelf: 'center', marginTop: 30, backgroundColor: '#009387'}}
            onPress={() => navigation.navigate('Viajes', {screen: 'rechazadosViajes'})}
          />
    )
  }
}


  return (


    <ScrollView>

      <Card  >
          <Image
            source={  require("../assets/logolleida2.png")}
            style={{width: 100, height: 100, alignSelf: 'center', marginTop: 30 }}
          />
      
      <View>
        <View>
          <Text style={{fontSize: 19,marginTop: 30, marginHorizontal: 30, textAlign: 'center'}}  >{JSON.stringify(encabezado)}</Text>
        </View>
        <Divider style={{marginBottom: 20, marginTop:10}} />
        <View >
          <Text style={{fontSize: 15, marginHorizontal: 15 }}  >{JSON.stringify(descripcion)}</Text>          
        </View>
        <ButtonRender />
      </View>
      </Card>
    </ScrollView>
  );
};

export default NotificacionDetalle;

const styles = StyleSheet.create({
  notificacionCard: {
    alignContent: 'center'
  },
  imagen: {
   alignSelf: 'center',
   width: 100,
   height: 100 
  }
});