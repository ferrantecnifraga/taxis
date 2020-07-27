import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View, Text, Alert } from "react-native";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import AsyncStorage from "@react-native-community/async-storage";


import ViajesProgramadosTable from './tablasViajes/ViajesProgramadosTable'

const ProximosViajes = ({navigation}) => {

  //Guardo Data de fetch
  const [nombreT, setNombreT] = useState("")
  const [primerApellidoT, setPrimerApellidoT] = useState("")    
  const [segundoApellidoT, setSegundoApellidoT] = useState("")   
  const [servicioT, setServicioT] = useState("")
  const [estatusT, setEstatusT] = useState("")
  const [nombrePacienteT, setNombrePacienteT] = useState("")
  const [fechaInicioT, setFechaInicioT] = useState("")
  const [proximosViajes, setProximosViajes] = useState([])
  //Hago fetch
  useEffect(() => {
    const fetchMyAPI = async () => {
      let idTaxista2 =  await AsyncStorage.getItem('idTaxista')
      let email2 = await AsyncStorage.getItem('email')
      let password2 = await AsyncStorage.getItem('password')
      console.log(idTaxista2)
       let response = await fetch('https://taxis-lleida.herokuapp.com/api/taxistas/proximosViajes', {
       method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({
           idTaxista : idTaxista2,
           email : email2, 
           password : password2
         })
       } )

      let response2 = await response.json()
      
      //const {nombre, primerApellido, segundoApellido, 
        //servicio, estatus, nombrePaciente, fechaInicio} = response2.proximosViajes
      //console.log(response2)
       //setNombreT(nombre)
      //  setPrimerApellidoT(primerApellido)
      //  setSegundoApellidoT(segundoApellido)
      //  setServicioT(servicio)
      //  setEstatusT(estatus)
      //  setNombrePacienteT(nombrePaciente)
      //  setFechaInicioT(fechaInicio)
      console.log(response2.proximosViajes)
       setProximosViajes(response2.proximosViajes)
       console.log(proximosViajes)

    }

   fetchMyAPI()
  }, [])
  
  
  //Headers de tabla(categorias):
  const tableHead = ['Paciente 1', 'Paciente 2', 'Servicio', 'Fecha de Viaje', 'Estatus', ];
  //Mi Data donde deberia de ir toda nuestra info
  const tableData = proximosViajes.map(record=>([record.pacientePrimero, record.pacienteSegundo, record.servicio, record.fechaInicio, record.estatus]));

  //pruebas 


    return (
      
      <ScrollView horizontal={true}>
         
         <ViajesProgramadosTable/>

      </ScrollView>
      
    )
  }



export default ProximosViajes;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  table:{
    margin: 10,
    width: 500
  },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { marginLeft: 5 },
  row: {  height: 50, backgroundColor:'#fff59d' },
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' }
})
