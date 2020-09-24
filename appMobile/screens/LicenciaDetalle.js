import React from "react";
import { View, Text, ScrollView, StyleSheet,Image } from "react-native";
import { Card, Divider, Button } from "react-native-elements";

const  LicenciaDetalle = ({route, navigation}) => {

const { nombre, primerApellido, segundoApellido, vehiculo, matricula, pueblo, region, regionSanitaria } = route.params;

  return (
    

    <ScrollView>

      <Card  >
          <Image
            source={  require("../assets/carro.png")}
            style={{width: 100, height: 100, alignSelf: 'center', marginTop: 30 }}
          />
      
      <View>
        <View>
          <Text style={{fontSize: 19,marginTop: 30, marginHorizontal: 30, textAlign: 'center'}}  >{nombre} {primerApellido} {segundoApellido}</Text>
        </View>
        <Divider style={{marginBottom: 20, marginTop:10}} />
          <Text style={{fontSize: 15, marginHorizontal: 15, textAlign: 'center', marginBottom: 5, color: '#757575' }}  >Vehiculo: {vehiculo}</Text>   
          <Text style={{fontSize: 15, marginHorizontal: 15, textAlign: 'center',color: '#757575' }}  >Matricula:</Text>          
          <Text style={{fontSize: 15, marginHorizontal: 15, textAlign: 'center',marginBottom: 10 }}  >{matricula}</Text>      
          <Text style={{fontSize: 15, marginHorizontal: 15, textAlign: 'center',color: '#757575' }}  >Pueblo:</Text>              
          <Text style={{fontSize: 15, marginHorizontal: 15, textAlign: 'center', marginBottom: 10}}  >{pueblo}</Text>         
          <Text style={{fontSize: 15, marginHorizontal: 15, textAlign: 'center', color: '#757575'}}  >Región:</Text> 
          <Text style={{fontSize: 15, marginHorizontal: 15, textAlign: 'center', marginBottom: 10 }}  >{region}</Text>
          <Text style={{fontSize: 15, marginHorizontal: 15, textAlign: 'center', color: '#757575'}}  >Región Sanitaria:</Text>          
          <Text style={{fontSize: 15, marginHorizontal: 15, textAlign: 'center' }}  >{regionSanitaria}</Text>          
        
      </View>
      </Card>
    </ScrollView>
  );
};

export default LicenciaDetalle;

const styles = StyleSheet.create({
  
  text: {
   alignSelf: 'center',
   width: 100,
   height: 100 
  }
});