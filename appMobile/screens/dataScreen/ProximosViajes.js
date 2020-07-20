import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Table, TableWraper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import AsyncStorage from "@react-native-community/async-storage";


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
      let userToken = await AsyncStorage.getItem('userToken')
      console.log(idTaxista2)
       let response = await fetch('https://taxis-lleida.herokuapp.com/api/taxistas/proximosViajes', {
       method: 'POST',
         headers: {
           'Accept': 'application/json',
          'Authorization': 'Bearer '+(userToken),
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({
           idTaxista : idTaxista2 
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

    return (
      <ScrollView horizontal={true}>
        <Table style={styles.table}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={tableData} style={styles.row} textStyle={styles.text}/> 
        </Table> 
      </ScrollView>
    )
  }



export default ProximosViajes;

const styles = StyleSheet.create({
  table:{
    margin: 10,
    width: 500
  },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { marginLeft: 5 },
  row: {  height: 50, backgroundColor:'#fff59d' }
})
