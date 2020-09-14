import React from "react";
import { View, Text, ScrollView, StyleSheet,Image } from "react-native";
import { Card, Divider, Button } from "react-native-elements";

const   atenderViajeDetalles = ({route, navigation}) => {

const { idVP, fechaInicio, direccionHospital, servicio } = route.params;


  return (
    

    <ScrollView>
        <Card>
            <View>
                <Text style={{fontSize: 25,marginVertical: 20, marginHorizontal: 30, textAlign: 'center'}}  >Numero de viaje: {idVP}</Text>
        
                <Text style={styles.textLabel} >Fecha de Inicio:</Text>          
                <Text style={styles.respuesta} >{fechaInicio}</Text> 
                <Divider style={styles.divider}/>
                <Text style={styles.textLabel} >Direccion del Hospital:</Text>          
                <Text style={styles.respuesta} >{direccionHospital}</Text> 
                <Divider style={styles.divider}/>
                <Text style={styles.textLabel} >Servicio:</Text>          
                <Text style={styles.respuesta} >{servicio}</Text> 
                <Divider style={styles.divider}/>
                <View style={{flex: 1, flexDirection: 'row' , justifyContent: 'space-between'}}>
                <Button
                    title="Rechazar viaje"
                    type="outline"
                    titleStyle={{color:'#009387'}}
                    buttonStyle={{alignSelf: 'center', marginTop: 30, marginLeft: 10, borderColor:'#009387' }}
                    onPress={() => navigation.navigate( 'viajeRechazado')}
                />
                <Button
                    title="Aceptar viaje"
                    buttonStyle={{alignSelf: 'center', marginTop: 30,  marginRight: 10 ,backgroundColor: '#009387'}}
                    onPress={() => navigation.navigate( 'viajeAtendido' )}
                />
                </View>
        
            </View>
      </Card>
    </ScrollView>
  );
};

export default atenderViajeDetalles;

const styles = StyleSheet.create({
    textLabel: {
        fontSize:17,
        marginLeft: 15,
        marginTop: 15,
        color: '#bdbdbd'
    },
    respuesta:{
      fontSize:20,
      textAlign: "right"
    },
    divider:{
        height:2,
        marginVertical:5
    }
  });