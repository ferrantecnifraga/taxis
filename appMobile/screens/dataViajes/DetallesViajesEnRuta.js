import React, {useState, useEffect} from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Linking, Alert } from "react-native";
import { Card, Divider, Button } from "react-native-elements";
import AsyncStorage from '@react-native-community/async-storage';
import moment, {add} from "moment";

const DetallesViajesEnRuta = ({route, navigation}) => {

  const [estadoViaje, setEstadoViaje] = useState("Cargando...")

  const {idVP, estatus, fechaInicio, nombre, primerApellido, segundoApellido, servicio,
    pacientePrimero, telfPrimerPaciente, direccionPrimerPaciente, puebloPrimerPaciente, pacienteSegundo, telfSegundoPaciente, 
    direccionSegundoPaciente, puebloSegundoPaciente, vehiculo, origen, pasando_por, destino, direccionHospital, cliente} = route.params;

    useEffect(() => {
      const fetchMyAPI = async () => {
        
        if (estatus == "Confirmado") {
          setEstadoViaje("Iniciar viaje")
        }else if(estatus == "En ruta")
          setEstadoViaje("Terminar viaje")
      }

      fetchMyAPI()
    }, [] )

    const llamar = (number) => {
      let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
      else {phoneNumber = `telprompt:${number}`; }
    Linking.openURL(phoneNumber);
    }

    //Actualizar viaje

    //Fetch a la API atender viaje
    const actualizarElViaje = async(idVP) => {
      let email2 = await AsyncStorage.getItem('email')
        let password2 = await AsyncStorage.getItem('password')
        let idTaxista2 = await AsyncStorage.getItem('idTaxista')


      try {
        let response = await fetch('https://taxis-lleida.herokuapp.com/api/taxistas/actualizarViaje', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email2,
            password: password2,
            idTaxista: idTaxista2,
            idVP: idVP,
            estatus: estadoViaje
          })
        })

        let response2 = await response.json()
        console.warn(response2)


        Alert.alert(
          "Viajes en ruta",
          String(response2.estatus),
          [
            {
              text: "Ok",
              onPress: () => actualizarEstado(),
              
            }
  
          ],
          { cancelable: true }
        )
      } catch (error) {
        Alert.alert(
          "Viajes en ruta",
          String(error),
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

   // actualizar viaje

    //Actualizar estado
    const actualizarEstado = () => {
      if(estadoViaje == "Iniciar viaje"){
        setEstadoViaje("Terminar viaje")
      }else if(estadoViaje == "Terminar viaje"){
        setEstadoViaje("Terminado")
      }
    }

    

//    Iniciar viaje
    const iniciarViaje = (idVP) =>{
  
      console.log("Jaloo")
      console.warn(estadoViaje)
      if(estadoViaje == "Iniciar viaje"){
        return(
          Alert.alert(
            "Estatus del viaje",
            "¿Segur@ de iniciar el viaje? Si inicias el viaje antes de la fecha, se te multara. ",
            [
              {
                text: "Si, iniciar viaje",
                onPress: () => actualizarElViaje(idVP),
                
              },
              {
                text: "No",
                onPress: () => console.warn("Abortando"),
                
              }
      
            ],
            { cancelable: true }
          )
          )
      }else if(estadoViaje == "Terminar viaje"){
        return(
          Alert.alert(
            "Estatus del viaje",
            "¿Segur@ de terminar el viaje?",
            [
              {
                text: "Si, terminar viaje",
                onPress: () => actualizarElViaje(idVP),
                
              },
              {
                text: "No",
                onPress: () => console.warn("Abortando"),
                
              }
      
            ],
            { cancelable: true }
          )
          )
      }
        
    }
    

  return (
    <ScrollView>

      <Card  >
               
      <View>
        <View>
          <Text style={{fontSize: 25,marginTop: 30, marginHorizontal: 30, textAlign: 'center'}}  >Numero de viaje: {idVP}</Text>
        </View>
        <Divider style={{marginBottom: 20, marginTop:10}} />
        <View >
        
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
          <Text style={styles.respuesta} >{fechaInicio}</Text> 
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
        <Button style={styles.btn} mode="contained"  onPress={() => iniciarViaje(idVP) } title={estadoViaje}>
              
            </Button>
      </View>
      </Card>
    </ScrollView>
  );
};

export default DetallesViajesEnRuta;

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
  },
  btn: { 
    width: 200, 
    backgroundColor: '#78B7BB',  
    borderRadius: 5,
    padding:1,
    marginTop: 10,
    alignSelf: 'center',
  },
});