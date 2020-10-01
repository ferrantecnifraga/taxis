import React from "react";
import { View, Text, ScrollView, StyleSheet,Image } from "react-native";
import { Card, Divider, Button } from "react-native-elements";

const  LicenciaDetalle = ({route, navigation}) => {

const { nombre, primerApellido, segundoApellido, vehiculo, matricula, pueblo, tipo, plazas } = route.params;

const changeIcon = (plazas, tipo) => {
  console.warn("Plazas: "+"plazas y"+ " Tipo: "+tipo)
 if (plazas <= 5 && tipo == "TURISME"){
   return require('../assets/turisme-normal.png')
 }else if(plazas <= 5 && tipo == "ADAPTAT"){
   return require('../assets/adaptado-normal.png')
 }else if(plazas > 5 && tipo == "TURISME"){
   return require('../assets/turisme-combi.png')
 }else if(plazas > 5 && tipo == "ADAPTAT"){
   return require('../assets/adaptado-combi.png')
 }
   
}   

  return (
    

    <ScrollView>

      <Card  >
          <Image
            source={changeIcon(plazas, tipo)}
            style={{width: 100, height: 100, alignSelf: 'center', marginTop: 30 }}
          />
      
      <View>
        <View>
          <Text style={{fontSize: 19,marginTop: 30, marginHorizontal: 30, textAlign: 'center'}}  >{nombre} {primerApellido} {segundoApellido}</Text>
        </View>
        <Divider style={{marginBottom: 20, marginTop:10}} />
        <Text style={{fontSize: 15, marginHorizontal: 15, textAlign: 'center',color: '#757575' }}  >Vehículo:</Text>          
          <Text style={{fontSize: 15, marginHorizontal: 15, textAlign: 'center',marginBottom: 10 }}  >{vehiculo}</Text>   
          <Text style={{fontSize: 15, marginHorizontal: 15, textAlign: 'center',color: '#757575' }}  >Matricula:</Text>          
          <Text style={{fontSize: 15, marginHorizontal: 15, textAlign: 'center',marginBottom: 10 }}  >{matricula}</Text>      
          <Text style={{fontSize: 15, marginHorizontal: 15, textAlign: 'center',color: '#757575' }}  >Pueblo:</Text>              
          <Text style={{fontSize: 15, marginHorizontal: 15, textAlign: 'center', marginBottom: 10}}  >{pueblo}</Text>         
          <Text style={{fontSize: 15, marginHorizontal: 15, textAlign: 'center', color: '#757575'}}  >Tipo:</Text> 
          <Text style={{fontSize: 15, marginHorizontal: 15, textAlign: 'center', marginBottom: 10 }}  >{tipo}</Text>
          <Text style={{fontSize: 15, marginHorizontal: 15, textAlign: 'center', color: '#757575'}}  >Plazas:</Text>          
          <Text style={{fontSize: 15, marginHorizontal: 15, textAlign: 'center' }}  >{plazas}</Text>          
        
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