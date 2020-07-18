import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Table, TableWraper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


const ProximosViajes = ({navigation}) => { 

    const tableHead = ['Paciente ', 'Servicio', 'Fecha de Viaje', 'Estatus'];
    const tableData = [
      ['Pedro Botch', 'Viaje', '17/08', 'Sin terminar'],
      ['Joel Exde', 'Viaje', '10/08', 'Sin terminar'],
    ];

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
    margin: 4,
    width: 500
  },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { marginLeft: 5 },
  row: {  height: 30, backgroundColor:'#fff' }
})
