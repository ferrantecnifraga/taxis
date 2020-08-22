import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, ProgressBarAndroid, ScrollView,
ActivityIndicator, FlatList } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { FAB } from 'react-native-paper'; 

import AsyncStorage from '@react-native-community/async-storage';

const HomeScreen = ({navigation}) => {

  const [viajesMes, setViajesMes] = useState("Cargando...")
  const [totalCobrado, setTotalCobrado] = useState("Cargando...")
  const [viajesEnTotal, setViajesEnTotal] = useState("Cargando...")
  const [sanciones, setSanciones] = useState("Cargando...")

  useEffect(() => {
    const fetchMyAPI = async () => {
      
      let email2 = await AsyncStorage.getItem('email')
      let password2 = await AsyncStorage.getItem('password')
      let idTaxista2 = await AsyncStorage.getItem('idTaxista')
      let response = await fetch('https://taxis-lleida.herokuapp.com/api/taxistas/home', {
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

      
     //Poner data
     setViajesMes(response2.viajesMes)
     setTotalCobrado(response2.totalCobrado)
     setViajesEnTotal(response2.viajesEnTotal)
     setSanciones(response2.sanciones)


    }

    fetchMyAPI()
  }, [] )

    return (

      <View>
      <ScrollView>
        <Card 
            title='Viajes a realizar'
            titleStyle={{
              fontSize: 15,
              textAlign: 'left',
              color: '#1976d2'
            }}
            containerStyle={{
              borderLeftColor: '#1976d2',
              borderLeftWidth: 3,
              height: 130
            }}>
              <View style={{display: "flex",flexDirection: "row"}}>

          <Text style={{fontSize: 25}} >{viajesEnTotal}</Text>
                <View style={{flexGrow: 1}} />
                <Icon name="car" type='material-community' color="#9e9e9e" size= {25} /> 
              
              </View>
          </Card>
          <Card 
            title='Total ganado por mes'
            titleStyle={{
              fontSize: 15,
              textAlign: 'left',
              color: '#66bb6a'
            }}
            containerStyle={{
              borderLeftColor: '#66bb6a',
              borderLeftWidth: 3,
              height: 130
              
            }}>
              <View style={{display: "flex",flexDirection: "row"}}>
      
          <Text style={{fontSize: 25}} >€ {totalCobrado}</Text>
                <View style={{flexGrow: 1}} />
                <Icon name="euro" type='font-awesome' color="#9e9e9e" size= {25} /> 
              
              </View>
          </Card>
          <Card 
            title='Viajes programados por mes'
            titleStyle={{
              fontSize: 15,
              textAlign: 'left',
              color: '#00bcd4'
            }}
            containerStyle={{
              borderLeftColor: '#00bcd4',
              borderLeftWidth: 3,
              height: 130
            }}>
              <View style={{display: "flex",flexDirection: "row"}}>
      
          <Text style={{fontSize: 25}} >{viajesMes}</Text>
              <View style={{flexGrow: 1}} />
                <ProgressBarAndroid
                  styleAttr="Horizontal"
                  indeterminate={false}
                  progress={0.9}
                  color='#00bcd4'
                  style={{
                    width: 150
                  }}
                /> 
                <View style={{flexGrow: 1}} />
                <Icon name="calendar" type='font-awesome' color="#9e9e9e" size= {25} /> 
              
              </View>
          </Card>
          <Card 
            title='Sanciones por mes'
            titleStyle={{
              fontSize: 15,
              textAlign: 'left',
              color: '#e53935'
            }}
            containerStyle={{
              borderLeftColor: '#e53935',
              borderLeftWidth: 3,
              height: 130
            }}>
              <View style={{display: "flex",flexDirection: "row"}}>
      
          <Text style={{fontSize: 25}} >{sanciones}</Text>
                <View style={{flexGrow: 1}} />
                <Icon name="exclamation" type='font-awesome' color="#9e9e9e" size= {25} /> 
              
              </View>
          </Card>
          
          </ScrollView>
          <View>
            <FAB
              style={styles.fab}
              large
              icon="alert-octagon"
              onPress={() => {navigation.navigate('incidenciasFormulario')}}
            />

          </View>

       </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 0,
  },
});