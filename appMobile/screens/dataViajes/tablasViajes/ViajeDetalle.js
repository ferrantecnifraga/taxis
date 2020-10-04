import React, {useState} from "react";
import { View, Text, ScrollView, StyleSheet,Image, TouchableOpacity, Linking, Alert } from "react-native";
import { Card, Divider, Button } from "react-native-elements";
import AsyncStorage from '@react-native-community/async-storage';
import moment, {add} from "moment";

const ViajeDetalle = ({route, navigation}) => {

  const [estado, setEstado] = useState("Cancelar viaje")

const {idVP, costoParcial, nombre, primerApellido, segundoApellido, servicio, estatus,
    pacientePrimero, telfPrimerPaciente, direccionPrimerPaciente, puebloPrimerPaciente, pacienteSegundo, telfSegundoPaciente, 
    direccionSegundoPaciente, puebloSegundoPaciente, fechaInicio, vehiculo, origen, pasando_por, destino, direccionHospital, cliente } = route.params;
    
    
    const llamar = (number) => {
      let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
      else {phoneNumber = `telprompt:${number}`; }
    Linking.openURL(phoneNumber);
    }

    const cancelarViaje = async(idVP) => {

      if (estado == "Cancelado") {
        Alert.alert(
          "Cancelar viaje",
          "Ya cancelaste este viaje",
          [
            {
              text: "Ok",
              onPress: () => console.log("rechazado")
            }
  
          ],
          { cancelable: true }
        )
        
      }else{
        let email2 = await AsyncStorage.getItem('email')
        let password2 = await AsyncStorage.getItem('password')
        let idTaxista2 = await AsyncStorage.getItem('idTaxista')

      try {
        let response = await fetch('https://taxis-lleida.herokuapp.com/api/taxistas/cancelarViaje', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email2,
            password: password2,
            idTaxista: idTaxista2,
            idVP: idVP
          })
        })

        let response2 = await response.json()
    

        if(String(response2.message) == "Success!") {

          Alert.alert(
            "Cancelar viaje",
            response2.estatus,
            [
              {
                text: "Ok",
                onPress: () => setEstado("Cancelado")
              }
    
            ],
            { cancelable: true }
          )
          
        }

      
      
      } catch (error) {
        Alert.alert(
          "Cancelar viaje",
          error,
          [
            {
              text: "Ok",
              onPress: () => console.warn("OK"),
              
            }
  
          ],
          { cancelable: true }
        )
      }

      }

      
      
  }



  //

  //

const alertCancelar = (idVP) =>{
  console.warn(idVP)
  Alert.alert(
    "Cancelar viaje",
    "¿Seguro de cancelar el viaje?",
    [
      {
        text: "Si, cancelar",
        onPress: () => cancelarViaje(idVP)
        ,
        
      },
      {
        text: "No, olvidalo",
        onPress: () => console.warn("OK")
        ,
        
      }


    ],
    { cancelable: true }
  )
}

  //

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
          <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
            onPress={()=>{llamar( parseInt(telfPrimerPaciente) )}}
          >
          <View style={styles.btn}>
            <Text style={{fontSize: 20, color: '#0288d1'}}>{telfPrimerPaciente}</Text>
          </View>
          </TouchableOpacity>
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
          <TouchableOpacity
           style={{alignSelf: 'flex-end'}}
         onPress={()=>{llamar( parseInt(telfSegundoPaciente) )}}
        >
          <View style={styles.btn}>
            <Text style={{fontSize: 20, color: '#0288d1'}}>{telfSegundoPaciente}</Text>
          </View>
        </TouchableOpacity>
          <Divider style={styles.divider}/>
          <Text style={styles.textLabel} >Direccion del segundo paciente:</Text>          
          <Text style={styles.respuesta} >{direccionSegundoPaciente}</Text>
          <Divider style={styles.divider}/>
          <Text style={styles.textLabel} >Pueblo del segundo paciente:</Text>          
          <Text style={styles.respuesta} >{puebloSegundoPaciente}</Text>
          <Divider style={styles.divider}/>
          <Text style={styles.textLabel} >Fecha de inicio:</Text>          
          <Text style={styles.respuesta} >{moment(fechaInicio).format('DD/MM/YYYY HH:mm')}</Text> 
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
          <Divider style={styles.divider}/>
          <TouchableOpacity
          style={styles.btn2}
          onPress={() => alertCancelar(idVP)}
          underlayColor='#fff'>
          <Text style={styles.botonsito}>{estado}</Text>
 </TouchableOpacity>
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
  botonsito: {
    fontSize:20,
    textAlign: "right",
    alignSelf: 'center',
  },
  respuesta:{
    fontSize:20,
    textAlign: "right"
  },
  divider:{
      height:2
  },
  btn: { 
    width: 200, 
    backgroundColor: '#78B7BB',  
    borderRadius: 5,
    padding:1,
    marginTop: 15,
    alignSelf: 'center',
  },
  btn2: { 
    marginRight:40,
    marginLeft:40,
   marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#6ec6ff',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
});