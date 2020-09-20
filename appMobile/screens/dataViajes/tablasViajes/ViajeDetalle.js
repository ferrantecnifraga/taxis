import React from "react";
import { View, Text, ScrollView, StyleSheet,Image } from "react-native";
import { Card, Divider, Button } from "react-native-elements";
import moment, {add} from "moment";
const ViajeDetalle = ({route, navigation}) => {

const {idVP, costoParcial, nombre, primerApellido, segundoApellido, servicio, estatus,
    pacientePrimero, telfPrimerPaciente, direccionPrimerPaciente, puebloPrimerPaciente, pacienteSegundo, telfSegundoPaciente, 
    direccionSegundoPaciente, puebloSegundoPaciente, fechaInicio, vehiculo, origen, pasando_por, destino, direccionHospital, cliente, } = route.params;


  return (
    

    <ScrollView>

      <Card  >
               
      <View>
        <View>
          <Text style={{fontSize: 25,marginTop: 30, marginHorizontal: 30, textAlign: 'center'}}  >Numero de viaje: {idVP}</Text>
        </View>
        <Divider style={{marginBottom: 20, marginTop:10}} />
        <View >
          <Text style={styles.textLabel} >Costo parcial: </Text>
          <Text style={styles.respuesta} >{costoParcial}</Text> 
          <Divider style={styles.divider}/>
          <Text style={styles.textLabel} >Nombre:</Text>
          <Text style={styles.respuesta} >{nombre}</Text>
          <Divider style={styles.divider}/>  
          <Text style={styles.textLabel} >Primer apellido:</Text>
          <Text style={styles.respuesta} >{primerApellido}</Text>   
          <Divider style={styles.divider}/>  
          <Text style={styles.textLabel} >Segundo apellido:</Text>
          <Text style={styles.respuesta} >{segundoApellido}</Text> 
          <Divider style={styles.divider}/>
          <Text style={styles.textLabel} >Servicio:</Text>
          <Text style={styles.respuesta} >{servicio}</Text>
          <Divider style={styles.divider}/>
          <Text style={styles.textLabel} >Estatus:</Text>
          <Text style={styles.respuesta} >{estatus}</Text>
          <Divider style={styles.divider}/>
          <Text style={styles.textLabel} >Primer paciente:</Text>
          <Text style={styles.respuesta} >{pacientePrimero}</Text>  
          <Divider style={styles.divider}/>      
          <Text style={styles.textLabel} >Telefono del primer paciente:</Text>
          <Text style={styles.respuesta} >{telfPrimerPaciente} </Text>
          <Divider style={styles.divider}/>
          <Text style={styles.textLabel} >Direccion del primer paciente:</Text>
          <Text style={styles.respuesta} >{direccionPrimerPaciente}</Text>    
          <Divider style={styles.divider}/>    
          <Text style={styles.textLabel} >Pueblo del primer paciente:</Text>
          <Text style={styles.respuesta} >{puebloPrimerPaciente}</Text> 
          <Divider style={styles.divider}/>
          <Text style={styles.textLabel} >Segundo paciente:</Text>          
          <Text style={styles.respuesta} >{pacienteSegundo}</Text>
          <Divider style={styles.divider}/>
          <Text style={styles.textLabel} >Telefono del segundo paciente:</Text>          
          <Text style={styles.respuesta} >{telfSegundoPaciente}</Text>
          <Divider style={styles.divider}/>
          <Text style={styles.textLabel} >Direccion del segundo paciente:</Text>          
          <Text style={styles.respuesta} >{direccionSegundoPaciente}</Text>
          <Divider style={styles.divider}/>
          <Text style={styles.textLabel} >Pueblo del segundo paciente:</Text>          
          <Text style={styles.respuesta} >{puebloSegundoPaciente}</Text>
          <Divider style={styles.divider}/>
          <Text style={styles.textLabel} >Fecha de inicio:</Text>          
          <Text style={styles.respuesta} >{moment(fechaInicio).format('DD/MM/YYYY hh:mm')}</Text> 
          <Divider style={styles.divider}/>
          <Text style={styles.textLabel} >Vehiculo:</Text>          
          <Text style={styles.respuesta} >{vehiculo}</Text> 
          <Divider style={styles.divider}/>
          <Text style={styles.textLabel} >Origen:</Text>          
          <Text style={styles.respuesta} >{origen}</Text> 
          <Divider style={styles.divider}/>
          <Text style={styles.textLabel} >Pasando por:</Text>          
          <Text style={styles.respuesta} >{pasando_por}</Text> 
          <Divider style={styles.divider}/>
          <Text style={styles.textLabel} >Destino:</Text>          
          <Text style={styles.respuesta} >{destino}</Text> 
          <Divider style={styles.divider}/>
          <Text style={styles.textLabel} >Direccion del Hospital:</Text>          
          <Text style={styles.respuesta} >{direccionHospital}</Text> 
          <Divider style={styles.divider}/>
          <Text style={styles.textLabel} >Cliente:</Text>          
          <Text style={styles.respuesta} >{cliente}</Text> 
        </View>
      </View>
      </Card>
    </ScrollView>
  );
};

export default ViajeDetalle;

const styles = StyleSheet.create({
  
  textLabel: {
      fontSize:17,
      marginLeft: 15,
      marginTop: 15
  },
  respuesta:{
    fontSize:20,
    textAlign: "right"
  },
  divider:{
      height:2
  }
});