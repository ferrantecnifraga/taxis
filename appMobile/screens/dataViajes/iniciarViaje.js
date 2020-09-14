import React, { useState, useEffect } from "react";
import * as Localization from 'expo-localization';
import { View, StyleSheet, Text, Button } from "react-native";
import { Table, TableWraper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import AsyncStorage from "@react-native-community/async-storage";
import ViajesEnRuta from "./tablasViajes/ViajesEnRuta";
import * as Calendar from 'expo-calendar';
import moment from "moment";

const iniciarViaje = ({navigation}) => {

  //Headers de tabla(categorias):
  const tableHead = ['Paciente 1', 'Paciente 2', 'Servicio', 'Fecha de Viaje', 'Estatus', ];
  //Mi Data donde deberia de ir toda nuestra info
  const tableData = [
    ['Paciente 1', 'Paciente 2', 'Servicio', 'Fecha de Viaje', 'Estatus'] ];


    return (
      <View>
        <ViajesEnRuta/>
      </View>
    )
  }



export default iniciarViaje;