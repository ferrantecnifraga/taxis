import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  Avatar,
  Title
  
} from 'react-native-paper';

import { Card, Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from "@react-native-community/async-storage";

const PerfilScreen = () => {

const [nombreT, setNombreT] = useState("")
const [primerApellidoT, setPrimerApellidoT] = useState("")    
const [segundoApellidoT, setSegundoApellidoT] = useState("")   
const [numSocioT, setNumSocioT] = useState("")
const [acuerdoMarcoT, setAcuerdoMarcoT] = useState("")
const [telfT, setTelfT] = useState("")
const [plazasT, setPlazasT] = useState("")
const [estatusT, setEstatusT] = useState("")



  
    useEffect(() => {
      const fetchMyAPI = async () => {
        let email2 =  await AsyncStorage.getItem('email')
        let userToken = await AsyncStorage.getItem('userToken')
        let response = await fetch('https://taxis-lleida.herokuapp.com/api/taxistas/profile', {
        method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer '+(userToken),
           
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              email : email2 
          })
        } )
        
        let response2 = await response.json()
        
        //PRUEBAS: (BORRAR)
        let idTaxistaxd = await AsyncStorage.getItem('idTaxista')
        let emailxd = await AsyncStorage.getItem('userToken')
        let tokenxd = await AsyncStorage.getItem('email')
        
        const {nombre, primerApellido, segundoApellido, 
          numSocio, acuerdoMarco, telf, plazas, estatus} = response2.taxista[0]
        
          //PRUEBAS EN CONSOLA PARA VER SI GUARDO EN EL ASYNCSTORAGE MI idTaxista
        console.log(response2)
        console.log(idTaxistaxd)
        console.log(emailxd)
        console.log(tokenxd)

         setNombreT(nombre)
         setPrimerApellidoT(primerApellido)
         setSegundoApellidoT(segundoApellido)
         setNumSocioT(numSocio)
         setAcuerdoMarcoT(acuerdoMarco)
         setTelfT(telf)
         setPlazasT(plazas)
         setEstatusT(estatus)
        
      }

     fetchMyAPI()
    }, [])






  return (
    <ScrollView>

      <Card style={styles.userInfoSection}>
        
          <Avatar.Icon
            style={{alignSelf: 'center', backgroundColor: "#009387"}}
            icon='taxi'
            size={100}
          />
      
      <View style={styles.userInfoSection}>
        <View style= {styles.row} >
          <Text style={styles.infoText}>Nombre: </Text>
          <Text style={styles.dataText}>{nombreT}</Text>
        </View>
        <Divider style={{height: 2}} />
        <View style= {styles.row}>
          <Text style={styles.infoText}>Primer Apellido: </Text>
          <Text style={styles.dataText}>{primerApellidoT}</Text>          
        </View>
        <Divider style={{height: 2}}  />
        <View style= {styles.row}>
          <Text style={styles.infoText}>Segundo Apellido: </Text>
          <Text style={styles.dataText}>{segundoApellidoT}</Text>
        </View>
        <Divider style={{height: 2}}  />
        <View style= {styles.row}>
          <Text style={styles.infoText}>Num Socio: </Text>
          <Text style={styles.dataText}>{numSocioT}</Text>
        </View>
        <Divider style={{height: 2}}  />
        <View style= {styles.row}>
          <Text style={styles.infoText}>Acuerdo Marco:</Text>
          <Text style={styles.dataText}>{acuerdoMarcoT}</Text>
        </View>
        <Divider style={{height: 2}}  />
        <View style= {styles.row}>
          <Text style={styles.infoText}>Telf:</Text>
          <Text style={styles.dataText}>{telfT}</Text>
        </View>
        <Divider style={{height: 2}}  />
        <View style= {styles.row}>
          <Text style={styles.infoText}>Plazas:</Text>
          <Text style={styles.dataText}>{plazasT}</Text>
        </View>
        <Divider/>
        <View style= {styles.row}>
          <Text style={styles.infoText}>Estatus:</Text>
          <Text style={styles.dataText}>{estatusT}</Text>
        </View>
        <Divider style={{height: 2}}  />
      </View>
      </Card>
    </ScrollView>
  );
};

export default PerfilScreen;

const styles = StyleSheet.create({
  
  userInfoSection: {
    paddingHorizontal: 25,
    marginBottom: 25,
    marginTop:10
  },
  row: {
    flexDirection: 'row',
    marginTop: 25,
  },
  
  infoText: {
    color:"#777777",
    textAlign: 'left',
    fontSize: 15,
    flex:1

  },
  dataText: {
    color:"#212121", 
    textAlign: 'right',
    marginRight: 5, 
    fontSize: 20,
    
  },

});