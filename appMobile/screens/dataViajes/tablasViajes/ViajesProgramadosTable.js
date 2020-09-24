import React, { Component, useState, useEffect } from 'react';
import { StyleSheet,TouchableOpacity, ScrollView, Text, View, Alert, ActivityIndicator } from "react-native";

import { DataTable, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { useNavigation } from '@react-navigation/native';
import moment, {add} from "moment";

 
const ViajesProgramadosTable = ({navigation}) => {

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
        let response = await fetch('https://taxis-lleida.herokuapp.com/api/taxistas/proximosViajes', {
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
        console.log(response2.proximosViajes.data)
        console.warn(response2.proximosViajes.data)
        
        setData(response2.proximosViajes.data)
        setLoading(false)
        const {current_page, last_page, total} = response2

setCurrent_page2(current_page)
setTotal2(total)

        let paginacion = `${current_page2} de ${total2}`

        setPaginacion2(paginacion)
        
      }

      fetchMyAPI()
    }, [] )



    const tableHead = ['Número','Detalles rápidos', 'Costo Parcial €', 'Nombre', 'Primer Apellido', 'Segundo Apellido', 'Num Licencia', 'Pueblo Taxista', 'Servicio', 'Estatus',
    'Paciente 1', 'Telefono Paciente 1', 'Dirección Paciente 1', 'Pueblo Primer Paciente', 'Paciente 2', 'Telefono Paciente 2', 'Dirección Paciente 2', 'Pueblo Segundo Paciente', 'Fecha Inicio', 'Vehículo', 'Origen', 
    'Pasando por', 'Destino', 'Dirección de Hospital', 'Cliente', 'Detalles del viaje']

    const detalles = (idVP, fecha) => {
      return(
        Alert.alert(
          "Información del viaje",
          "El viaje número "+idVP+ ", es a las "+moment(fecha).format('DD/MM/YYYY hh:mm')+". A partir de esa hora, puedes iniciar tu viaje en Iniciar viaje",
          [
        
            { text: "Ok", onPress: () => console.warn("OK Pressed: " +idVP) }
          ],
          { cancelable: true }
        )
        )
    }

    const boton = (idVP, fecha) => {
      return(
        <TouchableOpacity onPress={() => detalles(idVP, fecha)}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Estatus viaje</Text>
          </View>
        </TouchableOpacity>
      )
    }

    const detallesButton = (idVP, costoParcial, nombre, primerApellido, segundoApellido, servicio, estatus,
      pacientePrimero, telfPrimerPaciente, direccionPrimerPaciente, puebloPrimerPaciente, pacienteSegundo, telfSegundoPaciente, 
      direccionSegundoPaciente, puebloSegundoPaciente, fechaInicio, vehiculo, origen, pasando_por, destino, direccionHospital, cliente) => {
        const navigation = useNavigation();
      return(
        <TouchableOpacity 
        onPress={() => {navigation.navigate('ViajeDetalle', {
          idVP, costoParcial, nombre, primerApellido, segundoApellido, servicio, estatus,
      pacientePrimero, telfPrimerPaciente, direccionPrimerPaciente, puebloPrimerPaciente, pacienteSegundo, telfSegundoPaciente, 
      direccionSegundoPaciente, puebloSegundoPaciente, fechaInicio, vehiculo, origen, pasando_por, destino, direccionHospital, cliente})}}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Detalles viaje</Text>
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
                    <Cell key={i+1} data={e.idVP} textStyle={styles.text} style={styles.celda} />
                    <Cell key={i+21} data={boton(e.idVP, e.fechaInicio)}  />
                    <Cell key={i+2} data={e.costoParcial} textStyle={styles.text} style={styles.celda} />
                    <Cell key={i+3} data={e.nombre} textStyle={styles.text} style={styles.celda} />
                    <Cell key={i+4} data={e.primerApellido} textStyle={styles.text} style={styles.celda} />
                    <Cell key={i+5} data={e.segundoApellido} textStyle={styles.text} style={styles.celda} />
                    <Cell key={i+5} data={e.numLicencia} textStyle={styles.text} style={styles.celda} />
                    <Cell key={i+5} data={e.puebloTaxista} textStyle={styles.text} style={styles.celda} />
                    <Cell key={i+6} data={e.servicio} textStyle={styles.text} style={styles.celda}/>
                    <Cell key={i+7} data={e.estatus} textStyle={styles.text} style={styles.celda}/>

                    <Cell key={i+8} data={e.pacientePrimero} textStyle={styles.text} style={styles.celda}/>
                    <Cell key={i+9} data={e.telfPrimerPaciente} textStyle={styles.text} style={styles.celda}/>
                    <Cell key={i+10} data={e.direccionPrimerPaciente} textStyle={styles.text} style={styles.celda}/>
                    <Cell key={i+10} data={e.puebloPrimerPaciente} textStyle={styles.text} style={styles.celda}/>
                    <Cell key={i+11} data={e.pacienteSegundo} textStyle={styles.text} style={styles.celda}/>
                    <Cell key={i+12} data={e.telfSegundoPaciente} textStyle={styles.text} style={styles.celda}/>
                    <Cell key={i+13} data={e.direccionSegundoPaciente} textStyle={styles.text} style={styles.celda}/>
                    <Cell key={i+10} data={e.puebloSegundoPaciente} textStyle={styles.text} style={styles.celda}/>
                    <Cell key={i+14} data={moment(e.fechaInicio).format('DD/MM/YYYY hh:mm')} textStyle={styles.text} style={styles.celda}/>
                    <Cell key={i+15} data={e.vehiculo} textStyle={styles.text} style={styles.celda}/>
                    <Cell key={i+16} data={e.origen} textStyle={styles.text} style={styles.celda}/>

                    <Cell key={i+17} data={e.pasando_por} textStyle={styles.text} style={styles.celda}/>
                    <Cell key={i+18} data={e.destino} textStyle={styles.text} style={styles.celda}/>
                    <Cell key={i+19} data={e.direccionHospital} textStyle={styles.text} style={styles.celda}/>
                    <Cell key={i+20} data={e.cliente} textStyle={styles.text} style={styles.celda}/>
                    
                    <Cell key={i+22} data={detallesButton(e.idVP, e.costoParcial, e.nombre, e.primerApellido, e.segundoApellido, e.servicio, e.estatus, e.pacientePrimero, e.telfPrimerPaciente,
                      e.direccionPrimerPaciente, e.puebloPrimerPaciente, e.pacienteSegundo, e.telfSegundoPaciente, e.direccionSegundoPaciente, e.puebloSegundoPaciente, e.fechaInicio, e.vehiculo, e.origen,
                      e.pasando_por, e.destino, e.direccionHospital, e.cliente)} />

                  
              </TableWrapper>
            ))
          }
        </Table>
    </ScrollView>
    
    )
  
}

export default ViajesProgramadosTable
 
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