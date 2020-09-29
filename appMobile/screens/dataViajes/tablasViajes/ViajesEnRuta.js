import React, { useState, useEffect } from 'react';
import { RefreshControl, StyleSheet, TouchableOpacity, Text, View, Alert,ScrollView,ActivityIndicator  } from "react-native";
import { ListItem } from 'react-native-elements';

import {Card, Divider} from 'react-native-elements'
import { DataTable, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { set } from 'react-native-reanimated';
import moment, {add} from "moment";
import { useNavigation } from '@react-navigation/native';

const ViajesEnRuta = () => { 

  const [viajes, setViajes] = useState({})
  const [current_page2, setCurrent_page2] = useState(1)
  const [total2, setTotal2] = useState(6)
  const [paginacion2, setPaginacion2] = useState("")
  const [loading, setLoading] = useState(true)
  const [estado, setEstado] = useState("Cargando...")
  const [data, setData] = useState([])

    useEffect(() => {
      const fetchMyAPI = async () => {
        
        let email2 = await AsyncStorage.getItem('email')
        let password2 = await AsyncStorage.getItem('password')
        let idTaxista2 = await AsyncStorage.getItem('idTaxista')
        let response = await fetch('https://taxis-lleida.herokuapp.com/api/taxistas/viajesEnRuta', {
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
        
        console.warn(response2.viajes)
        console.log(response2.viajes)
        setViajes(response2.viajes)
        setLoading(false)
        console.log("Viajes:" + viajes)
        
      }

      fetchMyAPI()
    }, [] )

//Refresh
const onRefresh = React.useCallback(async () => {
  setRefreshing(true);
  let email2 = await AsyncStorage.getItem('email')
      let password2 = await AsyncStorage.getItem('password')
      let idCliente2 = await AsyncStorage.getItem('idCliente')
    try {
      let response = await fetch('https://taxis-lleida.herokuapp.com/api/taxistas/viajesEnRuta', {
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
      let responseJson = await response.json();
      console.warn(responseJson.viajes);
      setViajes(responseJson.viajes)
      setRefreshing(false)
    } catch (error) {
      console.error(error);
    }
  
}, [refreshing]);


// refresh
  

const navigation = useNavigation();

return ( 

  loading ?

  <View style={[styles.loading]}>
  <ActivityIndicator size="large" color="#009387" style={{marginTop: 280}} />
  </View>
  :

<ScrollView refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }>
  {
    viajes.map((e, i) => {
      return(
      <ListItem
        key={i}
        leftAvatar={{  source: require("../../../assets/carro.png") }}
        title={"Fecha del viaje: "+moment(e.fechaInicio).format('DD/MM/YYYY HH:mm')}
        titleStyle= {{marginLeft: 15, marginBottom: 10}}
        subtitle= {
          <View>
            <Text style={{color: '#757575', marginLeft: 15,}} >Taxista: {e.nombre} {e.primerApellido} {e.segundoApellido}</Text>
            <Text style={{color: '#757575', marginLeft: 15,}} >Servicio: {e.servicio} </Text>
            <Text style={{color: '#757575', marginLeft: 15,}} >Número de viaje: {e.idVP}</Text>
            <Text style={{color: '#00796b', marginTop: 7, alignSelf: 'flex-end', fontSize: 15}} > Presiona para ir a iniciar o terminar el viaje</Text>

          </View>
        }
        bottomDivider
        onPress={() => {navigation.navigate('DetallesViajesEnRuta', {
          idVP: e.idVP, 
          costoParcial: e.costoParcial,
           nombre: e.nombre, 
           primerApellido: e.primerApellido, 
           segundoApellido: e.segundoApellido, 
           servicio: e.servicio, 
           estatus: e.estatus,
          pacientePrimero: e.pacientePrimero, 
          telfPrimerPaciente: e.telfPrimerPaciente, 
          direccionPrimerPaciente: e.direccionPrimerPaciente, 
          puebloPrimerPaciente: e.puebloPrimerPaciente, 
          pacienteSegundo: e.pacienteSegundo, 
          telfSegundoPaciente: e.telfSegundoPaciente, 
          direccionSegundoPaciente: e.direccionSegundoPaciente, 
          puebloSegundoPaciente: e.puebloSegundoPaciente, 
          fechaInicio: moment(e.fechaInicio).format('DD/MM/YYYY HH:mm'), 
          vehiculo: e.vehiculo, 
          origen: e.origen, 
          pasando_por: e.pasando_por, 
          destino: e.destino, 
          direccionHospital: e.direccionHospital, 
          cliente: e.cliente
        })}}
        
      />
      )
  }
      )
  }
</ScrollView>
)

 
}

export default ViajesEnRuta;

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
    width: 200, 
    backgroundColor: '#78B7BB',  
    borderRadius: 5,
    padding:1,
    marginTop: 10,
    alignSelf: 'center',
  },
  btnText: { 
    textAlign: 'center', 
    color: '#fff' 
  },
  infoText: {
    color:"#777777",
    fontSize: 20,
    alignSelf: 'center'  
},
  dataText: {
    color:"#212121", 
    fontSize: 20,
    marginBottom: 10,
    alignSelf: 'center'  
  },
  userInfoSection: {
    paddingHorizontal: 25,
    marginBottom: 25,
    marginTop:10
  },
  titulo: {
    alignSelf: 'center',
    color: "#212121",
    fontSize: 30,
    marginTop: 20
  },
  dividerTit: {
    marginBottom: 30
  }
})