import React, { useState, useEffect } from 'react';
import { StyleSheet,TouchableOpacity, Text, View, Alert,ScrollView,ActivityIndicator  } from "react-native";
import {Card, Divider} from 'react-native-elements'
import { DataTable, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

const ViajesEnRuta = () => { 

  const [data, setData] = useState([])
  const [current_page2, setCurrent_page2] = useState(1)
  const [total2, setTotal2] = useState(6)
  const [paginacion2, setPaginacion2] = useState("")
  const [loading, setLoading] = useState(true)

  
  

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
        console.log(response2.viajes.data)
        console.warn(response2.viajes.data)
        
        setData(response2.viajes.data)
        setLoading(false)
        const {current_page, last_page, total} = response2

        setCurrent_page2(current_page)
        setTotal2(total)

        let paginacion = `${current_page2} de ${total2}`

        setPaginacion2(paginacion)
        
      }

      fetchMyAPI()
    }, [] )


    const boton = (idVP, fecha, estatus) => {
    //  if( estatus == "Confirmado" ) {

       return(
         <TouchableOpacity onPress={() => iniciarViaje(idVP, fecha) }>
           <View style={styles.btn}>
            <Text style={styles.btnText}>{estatus}</Text>
           </View>
         </TouchableOpacity>
       ) 
    //  }        
      }

      const iniciarViaje = (idVP, fecha) => {
        let today = new Date();
        console.warn(today)
        return (          
          Alert.alert(
            "Estatus del viaje!",
            "Acabas de iniciar viaje con el numero: " + idVP,
            [
              { text: "OK", onPress: () => setEstadoBoton("Terminar Viaje") }
            ],
            { cancelable: true }
          )
        )
      }
    
      //cancelar viaje
      // const cancelarViaje = (idVP) => {
    
      // }
  

// const tableHead = ['Costo Parcial', 'Nombre', 'Primer Apellido', 'Segundo Apellido', 'Servicio', 'Estatus',
// 'Paciente 1', 'Paciente 2', 'Fecha Inicio', 'Vehiculo', 'Origen', 'Pasando por', 'Destino', 'Cliente', 'Acciones']


return (
  loading ? 
  <View style={{flex:1,justifyContent:'center', alignItems:'center', marginTop: 280}}>
    <ActivityIndicator size="large" color='#009387' />
  </View>
  : 

  <ScrollView>
        
        {
            data.map((e, i) => (
              <Card style={styles.userInfoSection}>

                <Text style={styles.infoText}>ID de Viaje</Text>
                <Text style={styles.dataText}>{e.idVP}</Text>
                <Divider/>
                <Text style={styles.infoText}>Costo Parcial</Text>
                <Text style={styles.dataText}>{e.costoParcial}</Text>
                <Divider/>
                <Text style={styles.infoText}>Nombre</Text>
                <Text style={styles.dataText}>{e.nombre}</Text>
                <Divider/>
                <Text style={styles.infoText}>Primer Apellido</Text>
                <Text style={styles.dataText}>{e.primerApellido}</Text>
                <Divider/>
                <Text style={styles.infoText}>Segundo Apellido</Text>
                <Text style={styles.dataText}>{e.segundoApellido}</Text>
                <Divider/>
                <Text style={styles.infoText}>Servicio</Text>
                <Text style={styles.dataText}>{e.servicio}</Text>
                <Divider/>
                <Text style={styles.infoText}>Estatus</Text>
                <Text style={styles.dataText}>{e.estatus}</Text>
                <Divider/>
                <Text style={styles.infoText}>Nombre del primer Paciente</Text>
                <Text style={styles.dataText}>{e.pacientePrimero}</Text>
                <Divider/>
                <Text style={styles.infoText}>Nombre del segundo Paciente</Text>
                <Text style={styles.dataText}>{e.pacienteSegundo}</Text>
                <Divider/>
                <Text style={styles.infoText}>Fecha de inicio</Text>
                <Text style={styles.dataText}>{e.fechaInicio}</Text>
                <Divider/>
                <Text style={styles.infoText}>Vehiculo</Text>
                <Text style={styles.dataText}>{e.vehiculo}</Text>
                <Divider/>
                <Text style={styles.infoText}>Origen</Text>
                <Text style={styles.dataText}>{e.origen}</Text>
                <Divider/>
                <Text style={styles.infoText}>Pasando por</Text>
                <Text style={styles.dataText}>{e.pasando_por}</Text>
                <Divider/>
                <Text style={styles.infoText}>Destino</Text>
                <Text style={styles.dataText}>{e.destino}</Text>
                <Divider/>
                <Text style={styles.infoText}>Cliente</Text>
                <Text style={styles.dataText}>{e.cliente}</Text>
                <Divider/>
                <Button style={styles.btn} mode="contained"  onPress={() => iniciarViaje(idVP, fecha) }>
                  Comenzar Viaje
                </Button>
              </Card>
              
            ))
          }
        
      </ScrollView>
)
};

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
    marginLeft: 20,
    marginBottom: 10,
    alignSelf: 'center'  
  },
  userInfoSection: {
    paddingHorizontal: 25,
    marginBottom: 25,
    marginTop:10
  },

})