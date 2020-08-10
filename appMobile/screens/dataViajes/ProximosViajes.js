import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View, Text, Alert } from "react-native";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import AsyncStorage from "@react-native-community/async-storage";


import ViajesProgramadosTable from './tablasViajes/ViajesProgramadosTable'

const ProximosViajes = ({navigation}) => {

  // //Guardo Data de fetch
  // const [nombreT, setNombreT] = useState("")
  // const [primerApellidoT, setPrimerApellidoT] = useState("")    
  // const [segundoApellidoT, setSegundoApellidoT] = useState("")   
  // const [servicioT, setServicioT] = useState("")
  // const [estatusT, setEstatusT] = useState("")
  // const [nombrePacienteT, setNombrePacienteT] = useState("")
  // const [fechaInicioT, setFechaInicioT] = useState("")
  // const [proximosViajes, setProximosViajes] = useState([])
  // //Hago fetch
  // useEffect(() => {
  //   const fetchMyAPI = async () => {
  //     let idTaxista2 =  await AsyncStorage.getItem('idTaxista')
  //     let email2 = await AsyncStorage.getItem('email')
  //     let password2 = await AsyncStorage.getItem('password')
  //     console.warn(idTaxista2)
  //      let response = await fetch('https://taxis-lleida.herokuapp.com/api/taxistas/proximosViajes', {
  //      method: 'POST',
  //        headers: {
  //          'Accept': 'application/json',
  //          'Content-Type': 'application/json'
  //        },
  //        body: JSON.stringify({
  //          idTaxista : idTaxista2,
  //          email : email2, 
  //          password : password2
  //        })
  //      } )

  //     let response2 = await response.json()
      
  //     //const {nombre, primerApellido, segundoApellido, 
  //       //servicio, estatus, nombrePaciente, fechaInicio} = response2.proximosViajes
  //     //console.log(response2)
  //      //setNombreT(nombre)
  //     //  setPrimerApellidoT(primerApellido)
  //     //  setSegundoApellidoT(segundoApellido)
  //     //  setServicioT(servicio)
  //     //  setEstatusT(estatus)
  //     //  setNombrePacienteT(nombrePaciente)
  //     //  setFechaInicioT(fechaInicio)
  //     console.log(response2.proximosViajes.data)
  //      setProximosViajes(response2.proximosViajes.data)
  //      console.warn(response2.proximosViajes.data)

  //   }

  //  fetchMyAPI()
  // }, [])
  
  
  // //Headers de tabla(categorias):
  // const tableHead = ['Costo Parcial', 'Nombre', 'Primer Apellido', 'Segundo Apellido', 'Servicio', 'Estatus',
  // 'Paciente 1', 'Paciente 2', 'Fecha Inicio', 'Vehiculo', 'Origen', 'Pasando por', 'Destino', 'Cliente']
  // //Mi Data donde deberia de ir toda nuestra info
  // // const tableData = proximosViajes.map(record=>([record.pacientePrimero, record.pacienteSegundo, record.servicio, record.fechaInicio, record.estatus]));

  
  


    return (
      
    <ViajesProgramadosTable />
      
    )
  }



export default ProximosViajes;

const styles = StyleSheet.create({
  celda:{
    width: 150,
    padding: 5,
    textAlign: 'center'
  },
  container: { 
    flex: 1, 
    padding: 16, 
    paddingTop: 30, 
    backgroundColor: '#fff' 
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