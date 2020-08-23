import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View, Text, Alert } from "react-native";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import AsyncStorage from "@react-native-community/async-storage";


import ViajesProgramadosTable from './tablasViajes/ViajesProgramadosTable'

const ProximosViajes = ({navigation}) => {



    return (
      <ScrollView>
        
        <ViajesProgramadosTable />

      </ScrollView>
    
      
    )
  }



export default ProximosViajes;

