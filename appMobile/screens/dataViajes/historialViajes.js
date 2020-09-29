import React, { useState, useEffect } from "react";
import { View, StyleSheet,ScrollView } from "react-native";
import { Table, TableWraper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import AsyncStorage from "@react-native-community/async-storage";

import ViajesHistorialTable from "./tablasViajes/ViajesHistorialTable";


const historialViajes = ({navigation}) => {
  
    return (
        <ViajesHistorialTable/>
    )
  }



export default historialViajes;

const styles = StyleSheet.create({
  table:{
    margin: 10,
    width: 500
  },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { marginLeft: 5 },
  row: {  height: 50, backgroundColor:'#fff59d' }
})