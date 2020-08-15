import React, { useState, useEffect } from 'react';
import { StyleSheet,TouchableOpacity, Text, View, Alert, ActivityIndicator, ScrollView } from "react-native";

import { DataTable, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


const ViajesAtenderTable = () => { 

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

        
        setData(response2.viajesPorAtender.data)
        setLoading(false)
        const {current_page, last_page, total} = response2

setCurrent_page2(current_page)
setTotal2(total)

        let paginacion = `${current_page2} de ${total2}`

        setPaginacion2(paginacion)
        
      }

      fetchMyAPI()
    }, [] )


    //Fetch a la API atender viaje
    const atenderElViaje = async(idVP, respuesta) => {
      let email2 = await AsyncStorage.getItem('email')
        let password2 = await AsyncStorage.getItem('password')
        let idTaxista2 = await AsyncStorage.getItem('idTaxista')


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

        Alert.alert(
          "Atender viaje",
          response2.estatus,
          [
            {
              text: "Ok",
              onPress: () => console.warn("OK"),
              
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
              onPress: () => console.warn("OK"),
              
            }
  
          ],
          { cancelable: true }
        )
      }

      
  }

//Alert para confirmar

    const createAlert = (title, msg, idVP) => {
      return(
      Alert.alert(
        title,
        msg,
        [
          {
            text: "Si, voy a atenderlo",
            onPress: () => alertAtender(idVP),
            
          },
          {
            text: "No, olvidalo",
            onPress: () => console.warn("Abortando accion"),
            
          }

        ],
        { cancelable: true }
      )
      )
  }

  //AlertaAtender menu
const alertAtender = (idVP) =>{
  return(
    Alert.alert(
      "Atender Viaje",
      "Recuerda que al rechazar, se te tomará en cuenta como si lo hubieras realizado",
      [
        {
          text: "Si, confirmar viaje",
          onPress: () => atenderElViaje(idVP, "Confirmar"),
          
        },
        {
          text: "No, rechazar viaje",
          onPress: () => atenderElViaje(idVP, "Rechazar"),
          
        }

      ],
      { cancelable: true }
    )
    )
}


  //HandleAtender

    const alertCancel = (idVP) => createAlert("Atender Viaje", "¿Quieres atender el viaje?", idVP)

  


  const element2 = (idVP) => {
    return(
      <TouchableOpacity onPress={() => alertCancel(idVP)}>
      <View style={styles.btn}>
    <Text style={styles.btnText}>Atender viaje</Text>
      </View>
    </TouchableOpacity>
    )
  }

  //cancelar viaje
  // const cancelarViaje = (idVP) => {

  // }
    

const tableHead = ['Costo Parcial', 'Nombre', 'Primer Apellido', 'Segundo Apellido', 'Servicio', 'Estatus',
'Paciente 1', 'Paciente 2', 'Fecha Inicio', 'Vehiculo', 'Origen', 'Pasando por', 'Destino', 'Cliente', 'Acciones']


return (

  loading ? 
  <View style={{flex:1,justifyContent:'center', alignItems:'center', marginTop: 280}}>
    <ActivityIndicator size="large" color='#009387' />
  </View>
  
  : 


  <ScrollView horizontal={true} style={styles.container} >
        <Table borderStyle={{borderColor: 'transparent'}} >
          <Row data={tableHead} style={styles.head} textStyle={styles.celda} />
          {
            data.map((e, i) => (
              <TableWrapper key={i} style={styles.row} >
                
                    <Cell key={i+1} data={e.costoParcial} textStyle={styles.text} style={styles.celda} />
                    <Cell key={i+2} data={e.nombre} textStyle={styles.text} style={styles.celda} />
                    <Cell key={i+3} data={e.primerApellido} textStyle={styles.text} style={styles.celda} />
                    <Cell key={i+4} data={e.segundoApellido} textStyle={styles.text} style={styles.celda} />
                    <Cell key={i+5} data={e.servicio} textStyle={styles.text} style={styles.celda}/>
                    <Cell key={i+6} data={e.estatus} textStyle={styles.text} style={styles.celda}/>
                    <Cell key={i+7} data={e.pacientePrimero} textStyle={styles.text} style={styles.celda}/>
                    <Cell key={i+8} data={e.pacienteSegundo} textStyle={styles.text} style={styles.celda}/>
                    <Cell key={i+9} data={e.fechaInicio} textStyle={styles.text} style={styles.celda}/>
                    <Cell key={i+10} data={e.vehiculo} textStyle={styles.text} style={styles.celda}/>
                    <Cell key={i+11} data={e.origen} textStyle={styles.text} style={styles.celda}/>
                    <Cell key={i+12} data={e.pasando_por} textStyle={styles.text} style={styles.celda}/>
                    <Cell key={i+13} data={e.destino} textStyle={styles.text} style={styles.celda}/>
                    <Cell key={i+14} data={e.cliente} textStyle={styles.text} style={styles.celda}/>
                    <Cell key={i+15} data={element2(e.idVP)}  />

                  
              </TableWrapper>
            ))
          }
        </Table>
      </ScrollView>
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