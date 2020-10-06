import React, { useState, useEffect } from 'react';
import {Linking,Platform, StyleSheet,TouchableOpacity, Text, View, Alert, ActivityIndicator, ScrollView } from "react-native";

import { DataTable, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import * as Calendar from 'expo-calendar';
import * as Localization from 'expo-localization';
import moment, {add} from "moment";

import { useNavigation } from '@react-navigation/native';

const ViajesAtenderTable = ({navigation}) => { 

  const [data, setData] = useState([])
  const [current_page2, setCurrent_page2] = useState(1)
  const [total2, setTotal2] = useState(6)
  const [paginacion2, setPaginacion2] = useState("")
  const [loading, setLoading] = useState(true);
  

    useEffect(() => {
      const fetchMyAPI = async () => {
        
        let email2 = await AsyncStorage.getItem('email')
        let password2 = await AsyncStorage.getItem('password')
        let idTaxista2 = await AsyncStorage.getItem('idTaxista')
        
        let response = await fetch('https://taxis-lleida.herokuapp.com/api/taxistas/viajesPorAtender', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email2,
            password: password2,
            idTaxista: idTaxista2
          })
        })

        let response2 = await response.json()

        
        setData(response2.viajesPorAtender)
        setLoading(false)
        
        if(response2.viajesPorAtender.length == 0){
          Alert.alert(
            "Atender viaje",
            "No hay viajes por atender",
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

      fetchMyAPI()
    }, [] )


    //Fetch a la API atender viaje
    const atenderElViaje = async(idVP, respuesta, {navigation}, fechaInicio, direccionHospital, servicio) => {
      let email2 = await AsyncStorage.getItem('email')
        let password2 = await AsyncStorage.getItem('password')
        let idTaxista2 = await AsyncStorage.getItem('idTaxista')
        let calendario = await AsyncStorage.getItem('idCalendario')

      try {
        let response = await fetch('https://taxis-lleida.herokuapp.com/api/taxistas/atenderViaje', {
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
            respuesta: respuesta
          })
        })

        let response2 = await response.json()
    

        if(String(response2.tipo) == "Confirmado") {

          //Viaje calendario
            let fecha = moment(fechaInicio).toDate();
            console.warn("Fecha: "+fecha)
            let details = {
              title: "Viaje asignado: " +servicio,
              startDate: fecha,
              endDate: fecha,
              timeZone: Localization.timezone,
              endTimeZone: Localization.timezone,
              location: direccionHospital,
              notes: "Servicio: "+servicio ///origen pacientes, nombres, destino
            }
            try {
              const crear = await Calendar.createEventAsync(calendario, details)
            
            console.warn("ID del evento: "+crear)
            var calendar = "Se agrego tu viaje al calendario"
            Alert.alert(
              "Atender viaje",
              "Confirmaste el viaje, se agrego el viaje a tu calendario."
              [
                {
                  text: "Ok",
                  onPress: () => console.log("Confirmado")
                }
      
              ],
              { cancelable: true }
            )
            } catch (error) {
              Alert.alert(
                "Atender viaje",
                error,
                [
                  {
                    text: "Ok",
                    onPress: () => console.log("Confirmado")
                  }
        
                ],
                { cancelable: true }
              )
            }
              
            
            //Viaje calendario
          
        } else if(String(response2.tipo) == "Rechazado") {

          Alert.alert(
            "Atender viaje",
            response2.estatus,
            [
              {
                text: "Ok",
                onPress: () => console.log("rechazado")
              }
    
            ],
            { cancelable: true }
          )
        } else if(String(response2.tipo) == 'Atendido') {
          Alert.alert(
            "Atender viaje",
            response2.estatus,
            [
              {
                text: "Ok",
                onPress: () => console.log("ya atendido")
              }
    
            ],
            { cancelable: true }
          )
        }

      
      
      } catch (error) {
        Alert.alert(
          "Atender viaje",
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



  //AlertaAtender menu
const alertAtender = (idVP, {navigation}, fechaInicio, direccionHospital, servicio) =>{
  return(
    Alert.alert(
      "Atender Viaje",
      "Recuerda que al rechazar, se te tomará en cuenta como si lo hubieras realizado",
      [
        {
          text: "Si, confirmar viaje",
          onPress: () => atenderElViaje(idVP, "Confirmar", {navigation}, fechaInicio, direccionHospital, servicio),
          
        },
        {
          text: "No, rechazar viaje",
          onPress: () => atenderElViaje(idVP, "Rechazar",{navigation}),
          
        },
        {
        text: "Cancelar acción",
          onPress: () => console.log("Abortando..."),
        }

      ],
      { cancelable: true }
    )
    )
}


  //HandleAtender

    const alertCancel = (idVP) => createAlert("Atender Viaje", "¿Quieres atender el viaje?", idVP)

  


  const element2 = (idVP, fechaInicio, direccionHospital, servicio) => {
    const navigation = useNavigation();
    return(
      <TouchableOpacity onPress={() => {navigation.navigate('atenderViajeDetalles', {
        idVP, fechaInicio, direccionHospital,servicio
      })}}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Atender viaje</Text>
        </View>
      </TouchableOpacity>
    )
  }


  const llamar = (number) => {
    let phoneNumber = '';
  if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
    else {phoneNumber = `telprompt:${number}`; }
  Linking.openURL(phoneNumber);
  }

  const telefono = (number) => {
    return(
      <TouchableOpacity
         style={styles.btn}
       onPress={()=>{llamar( parseInt(number) )}}
      >
        <View style={styles.btn}>
    <Text style={styles.btnText}>{number}</Text>
      </View>
      </TouchableOpacity>
    )
  }

  //cancelar viaje
  // const cancelarViaje = (idVP) => {

  // }
    

const tableHead = ['Numero del viaje', 'Estatus', 'Nombre', 'Primer Apellido', 'Segundo Apellido', 'Matricula', 'Pueblo Taxista', 'Vehículo', 'Servicio', 'Costo Parcial €',
'Paciente 1',  'Telefono Paciente 1', 'Dirección Paciente 1', 'Pueblo Primer Paciente', 'Paciente 2', 'Telfono Paciente 2', 'Dirección Paciente 2', 'Pueblo Segundo Paciente', 'Fecha Inicio', 'Origen', 
'Pasando por', 'Destino', 'Dirección de Hospital', 'Cliente', 'Acciones']


return (

  loading ? 
  <View style={{flex:1,justifyContent:'center', alignItems:'center', marginTop: 280}}>
    <ActivityIndicator size="large" color='#009387' />
  </View>
  
  : 

  <View style={styles.container}>
  <ScrollView horizontal={true} style={styles.containerScroll} >
        <Table borderStyle={{borderColor: 'transparent'}} >
          <Row data={tableHead} style={styles.head} textStyle={styles.celda} />
          {
            data.map((e, i) => (
              <TableWrapper key={i} style={styles.row} >
                    <Cell key={i+1} data={e.idVP} textStyle={styles.text} style={styles.celda} />
                    <Cell key={i+7} data={e.estatus} textStyle={styles.text} style={styles.celda}/>
                    
                    <Cell key={i+3} data={e.nombre} textStyle={styles.text} style={styles.celda} />
                    <Cell key={i+4} data={e.primerApellido} textStyle={styles.text} style={styles.celda} />
                    <Cell key={i+5} data={e.segundoApellido} textStyle={styles.text} style={styles.celda} />
                    <Cell key={i+5} data={e.numMatricula} textStyle={styles.text} style={styles.celda} />
                    <Cell key={i+5} data={e.puebloTaxista} textStyle={styles.text} style={styles.celda} />
                    <Cell key={i+15} data={e.vehiculo} textStyle={styles.text} style={styles.celda}/>

                    <Cell key={i+6} data={e.servicio} textStyle={styles.text} style={styles.celda}/>
                    <Cell key={i+2} data={e.costoParcial} textStyle={styles.text} style={styles.celda} />
                    <Cell key={i+8} data={e.pacientePrimero} textStyle={styles.text} style={styles.celda}/>
                    <Cell key={i+9} data={telefono(e.telfPrimerPaciente)} textStyle={styles.text} style={styles.celda}/>
                    <Cell key={i+10} data={e.direccionPrimerPaciente} textStyle={styles.text} style={styles.celda}/>
                    <Cell key={i+10} data={e.puebloPrimerPaciente} textStyle={styles.text} style={styles.celda}/>
                    <Cell key={i+11} data={e.pacienteSegundo} textStyle={styles.text} style={styles.celda}/>
                    <Cell key={i+12} data={telefono(e.telfSegundoPaciente)} textStyle={styles.text} style={styles.celda}/>
                    <Cell key={i+13} data={e.direccionSegundoPaciente} textStyle={styles.text} style={styles.celda}/>
                    <Cell key={i+13} data={e.puebloSegundoPaciente} textStyle={styles.text} style={styles.celda}/>
                    <Cell key={i+14} data={moment(e.fechaInicio).format('DD/MM/YYYY HH:mm')} textStyle={styles.text} style={styles.celda}/>
                    
                    <Cell key={i+16} data={e.origen} textStyle={styles.text} style={styles.celda}/>

                    <Cell key={i+17} data={e.pasando_por} textStyle={styles.text} style={styles.celda}/>
                    <Cell key={i+18} data={e.destino} textStyle={styles.text} style={styles.celda}/>
                    <Cell key={i+19} data={e.direccionHospital} textStyle={styles.text} style={styles.celda}/>
                    <Cell key={i+20} data={e.cliente} textStyle={styles.text} style={styles.celda}/>
                    
                    <Cell key={i+21} data={element2(e.idVP, e.fechaInicio, e.direccionHospital, e.servicio)}  />

                  
              </TableWrapper>
            ))
          }
        </Table>
      </ScrollView>
      </View>
)
};

export default ViajesAtenderTable;

const styles = StyleSheet.create({
  celda:{
    width: 150,
    padding: 5,
    textAlign: 'center'
  },
  container: {
    flex:1
  },
  containerScroll: { 
    marginHorizontal: 10,
    paddingVertical: 30,
  },
  head: { 
    height: 40, 
    backgroundColor: '#bdbdbd',
  },
  text: { 
    margin: 6, 
    textAlign: 'center',
  },
  row: { 
    flexDirection: 'row', 
    backgroundColor: '#eeeeee',
  },
  btn: { 
    width: 100, 
    height: 25, 
    backgroundColor: '#78B7BB',  
    borderRadius: 5,
    padding:1,
    alignSelf: 'center',
  },
  btnText: { 
    textAlign: 'center', 
    color: '#fff' 
  }

})