import React from "react";
import { View, Text, ScrollView, StyleSheet,Image } from "react-native";
import { Card, Divider, Button } from "react-native-elements";

const   LicenciaDetalle = ({route, navigation}) => {

const { encabezado, descripcion, tipo, fecha } = route.params;

  return (
    

    <ScrollView>

      <Card  >
          <Image
            source={  require("../assets/logolleida2.png")}
            style={{width: 100, height: 100, alignSelf: 'center', marginTop: 30 }}
          />
      
      <View>
        <View>
          <Text style={{fontSize: 19,marginTop: 30, marginHorizontal: 30, textAlign: 'center'}}  >{encabezado}</Text>
        </View>
        <Divider style={{marginBottom: 20, marginTop:10}} />
        <View>
          <Text style={{fontSize: 15, marginHorizontal: 15, marginBottom: 5, color: '#757575' }}  >Recibida: {fecha}</Text>   
        </View>
        <View >
          <Text style={{fontSize: 15, marginHorizontal: 15 }}  >{descripcion}</Text>          
        </View>
      </View>
      </Card>
    </ScrollView>
  );
};

export default LicenciaDetalle;

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