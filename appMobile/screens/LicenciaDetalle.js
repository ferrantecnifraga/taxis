import React from "react";
import { View, Text, ScrollView, StyleSheet,Image } from "react-native";
import { Card, Divider, Button } from "react-native-elements";

const  LicenciaDetalle = ({route, navigation}) => {

const { nombre, primerApellido, segundoApellido, vehiculo, matricula } = route.params;

  return (
    

    <ScrollView>

      <Card  >
          <Image
            source={  require("../assets/logolleida2.png")}
            style={{width: 100, height: 100, alignSelf: 'center', marginTop: 30 }}
          />
      
      <View>
        <View>
  <Text style={{fontSize: 19,marginTop: 30, marginHorizontal: 30, textAlign: 'center'}}  >{nombre} {primerApellido} {segundoApellido}</Text>
        </View>
        <Divider style={{marginBottom: 20, marginTop:10}} />
        <View>
  <Text style={{fontSize: 15, marginHorizontal: 15, marginBottom: 5, color: '#757575' }}  >{vehiculo}</Text>   
        </View>
        <View >
          <Text style={{fontSize: 15, marginHorizontal: 15 }}  >{matricula}</Text>          
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