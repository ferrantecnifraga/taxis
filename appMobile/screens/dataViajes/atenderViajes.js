import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View, Text,  } from "react-native";
import { Table, TableWraper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import AsyncStorage from "@react-native-community/async-storage";
import { Modal, Portal, Button } from 'react-native-paper';
import ViajesAtenderTable from "./tablasViajes/ViajesAtenderTable";

const atenderViajes = ({navigation}) => {

  //Headers de tabla(categorias):
  const tableHead = ['Paciente 1', 'Paciente 2', 'Servicio', 'Fecha de Viaje', 'Estatus', ];
  //Mi Data donde deberia de ir toda nuestra info
  const tableData = [
    ['Paciente 1', 'Paciente 2', 'Servicio', 'Fecha de Viaje', 'Estatus'] ];


    return (
      <View >
        <ViajesAtenderTable/>
      </View>
    )
  }
  
  export default atenderViajes;
