import React, { Component, useState, useEffect } from 'react';
import { StyleSheet,TouchableOpacity, ScrollView, Text, View, Alert, ActivityIndicator } from "react-native";

import { DataTable, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


 
const IncidenciasScreen = () => {

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
        let response = await fetch('https://taxis-lleida.herokuapp.com/api/taxistas/incidencias', {
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

        // console.log(idCliente2)
        console.log(response2.incidentes.data)
        console.warn(response2.incidentes.data)
        
        setData(response2.incidentes.data)
        setLoading(false)
        const {current_page, last_page, total} = response2

setCurrent_page2(current_page)
setTotal2(total)

        let paginacion = `${current_page2} de ${total2}`

        setPaginacion2(paginacion)
        
      }

      fetchMyAPI()
    }, [] )



    const tableHead = ['Numero de incidencia', 'Nombre', 'Primer Apellido', 'Segundo Apellido', 'Estatus', 'Tipo', 'Descripcion', 'Lugar', 'Numero de Viaje', 'Mensaje', 'Usuario que atendio']


    const detalles = (id, fecha) => {
      return(
        Alert.alert(
          "Información de la incidencia",
          "Tu incidencia numero "+id+ ", fue reportada el "+fecha,
          [
        
            { text: "Ok", onPress: () => console.warn("OK Pressed: " +id) }
          ],
          { cancelable: true }
        )
        )
    }

    const boton = (id, fecha) => {
      return(
        <TouchableOpacity onPress={() => detalles(id, fecha)}>
        <View style={styles.btn}>
      <Text style={styles.btnText}>Detalles incidencia</Text>
        </View>
      </TouchableOpacity>
      )
    }


    return (

      loading ? 
  <View style={{flex:1,justifyContent:'center', alignItems:'center', marginTop: 280}}>
    <ActivityIndicator size="large" color='#009387' />
  </View>
  : 

     <ScrollView style={styles.container} horizontal={true} >
      <Table borderStyle={{borderColor: 'transparent'}} >
          <Row data={tableHead} style={styles.head} textStyle={styles.celda} />
          {
            data.map((e, i) => (
              <TableWrapper key={i} style={styles.row} >
                    <Cell key={i+16} data={e.id} textStyle={styles.text} style={styles.celda} />
                    <Cell key={i+2} data={e.nombre} textStyle={styles.text} style={styles.celda} />
                    <Cell key={i+3} data={e.primerApellido} textStyle={styles.text} style={styles.celda} />
                    <Cell key={i+4} data={e.segundoApellido} textStyle={styles.text} style={styles.celda} />
                    <Cell key={i+5} data={e.estatus} textStyle={styles.text} style={styles.celda}/>
                    <Cell key={i+6} data={e.tipo} textStyle={styles.text} style={styles.celda}/>
                    <Cell key={i+7} data={e.descripcion} textStyle={styles.text} style={styles.celda}/>
                    <Cell key={i+8} data={e.lugar} textStyle={styles.text} style={styles.celda}/>
                    <Cell key={i+9} data={e.idViaje} textStyle={styles.text} style={styles.celda}/>
                    <Cell key={i+10} data={e.mensaje} textStyle={styles.text} style={styles.celda}/>
                    <Cell key={i+11} data={e.usuarioAtendio} textStyle={styles.text} style={styles.celda}/>

                  
              </TableWrapper>
            ))
          }
        </Table>
    </ScrollView>
    
    )
  
}

export default IncidenciasScreen
 
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