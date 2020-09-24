import React, {useState, useEffect} from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import moment, {add} from "moment";


const LicenciasScreen = ({navigation}) => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMyAPI = async () => {
      let email2 =  await AsyncStorage.getItem('email')
      let password2 = await AsyncStorage.getItem('password')
      let idTaxista = await AsyncStorage.getItem('idTaxista')
      
        let response = await fetch('https://taxis-lleida.herokuapp.com/api/taxistas/licencias', {
          method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email : email2 ,
                password : password2,
                idTaxista: idTaxista
            })
          })
  
        let response2 = await response.json()
        console.warn(response2.licencias)
        
          setData(response2.licencias)
          setLoading(false)       
         
         
          
       }
  
      fetchMyAPI()
     }, [])



 

   
 
 

  return ( 

    loading ?

    <View style={[styles.loading]}>
    <ActivityIndicator size="large" color="#00ff00" />
    </View>
    :

  <ScrollView>
    {
      data.map((e, i) => {
        return(
        <ListItem
          key={i}
          leftAvatar={{  source: require("../assets/carro.png") }}
          title={e.nombre +" "+e.primerApellido +" "+ e.segundoApellido}
          titleStyle= {{marginLeft: 15, marginBottom: 10}}
          subtitle= {
            <View>
              <Text style={{color: '#757575', marginLeft: 15,}} >Matricula: {e.numMatricula}</Text>
          <Text style={{color: '#757575', marginLeft: 15, marginTop: 10}} >Vehículo: {e.vehiculo}</Text>
              {/* <Text style={{color: '#00796b', marginTop: 15, alignSelf: 'flex-end', fontSize: 15}} > {e.zona} </Text> */}
            </View>
          }
          bottomDivider
          onPress={() => {navigation.navigate('LicenciaDetalle', {
            nombre: e.nombre, 
            primerApellido: e.primerApellido,
            segundoApellido: e.segundoApellido,
            vehiculo: e.vehiculo,
            matricula: e.numMatricula,
            pueblo: e.zona,
            region: e.region,
            regionSanitaria: e.regionSanitaria
          })}}
          
        />
        )
    }
        )
    }
  </ScrollView>
  )
};

export default LicenciasScreen;

const styles = StyleSheet.create({
  
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