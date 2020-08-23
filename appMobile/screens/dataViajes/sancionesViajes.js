import React, { Component, useState, useEffect } from 'react';
import { StyleSheet,TouchableOpacity, Text, View, Alert, ActivityIndicator, ScrollView } from "react-native";

import { DataTable, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


const sancionesViajes = ({navigation}) => {

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
        let response = await fetch('https://taxis-lleida.herokuapp.com/api/taxistas/sanciones', {
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
        console.warn("Sanciones: "+response2.sanciones.data)
        
        setData(response2.sanciones.data)
        setLoading(false)
        const {current_page, last_page, total} = response2

setCurrent_page2(current_page)
setTotal2(total)

        let paginacion = `${current_page2} de ${total2}`

        setPaginacion2(paginacion)
        
      }

      fetchMyAPI()
    }, [] )

  //Headers de tabla(categorias):
  const tableHead = ['Numero de sanción', 'Tipo', 'Descripción', 'Estatus' ];
  //Mi Data donde deberia de ir toda nuestra info



    return (

      loading ? 
      <View style={styles.loading}>
        <ActivityIndicator size="large" color='#009387' />
      </View>
      
      : 

      <ScrollView style={styles.container} horizontal={true}>
      <Table borderStyle={{borderColor: 'transparent'}} >
          <Row data={tableHead} style={styles.head} textStyle={styles.celda} />
          {
            data.map((e, i) => (
              <TableWrapper key={i} style={styles.row} >
                    <Cell key={i+1} data={e.idSancionTaxista} textStyle={styles.text} style={styles.celda} />
                    <Cell key={i+2} data={e.tipo} textStyle={styles.text} style={styles.celda} />
                    <Cell key={i+3} data={e.descripcion} textStyle={styles.text} style={styles.celda} />
                    <Cell key={i+4} data={e.estatus} textStyle={styles.text} style={styles.celda} />

                  
              </TableWrapper>
            ))
          }
        </Table>
    </ScrollView>
    )
  }



export default sancionesViajes;
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
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }

})