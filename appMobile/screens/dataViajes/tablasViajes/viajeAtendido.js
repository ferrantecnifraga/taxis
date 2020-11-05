import React from "react";
import { View, Text, ScrollView, StyleSheet, Image, Alert } from "react-native";
import { Card,  Button, Icon } from "react-native-elements";
import * as Animatable from 'react-native-animatable';
import * as Calendar from 'expo-calendar';
import * as Localization from 'expo-localization';
import moment from "moment";

import AsyncStorage from '@react-native-community/async-storage';

const viajeAtendido = ({navigation, route}) => {

    const {viajes} = route.params;

    const agregarViajes = async(viajes) => {

        let arrayDetalles = []
        let arrayIDS = []
        
        let calendario = await AsyncStorage.getItem('idCalendario')
        console.warn("ID calendario: "+calendario)
        viajes.map( e => {
            let fecha = moment(e.fechaInicio).toDate();
            let details = {
                title: "Viaje asignado: " + "Diálisis",
                    startDate: fecha,
                    endDate: fecha,
                    timeZone: Localization.timezone,
                    endTimeZone: Localization.timezone,
                    location: e.direccionHospital
            }
            arrayDetalles.push(details)
        })
        
        arrayDetalles.map(e => {
            console.warn(e)
        })

        arrayDetalles.forEach( async(e) => {
            let crear = await Calendar.createEventAsync(calendario, e)
            arrayIDS.push(crear)
        });
           
        //    
        arrayIDS.map(e => console.log(e))
  

        if (arrayIDS.length > 0) {
            Alert.alert(
                "Atender viaje",
                "Agregamos los viajes a tu calendario. ¡Gracias! ",
                [
                  {
                    text: "Ok",
                    onPress: () => console.warn("OK"),
                    
                  }
          
                ],
                { cancelable: true }
              )
            navigation.navigate('Home', {screen: 'Home'} ) 
        }else{
            Alert.alert(
                "Atender viaje",
                "Hubo un error al guardar los viajes. Lo sentimos. ",
                [
                  {
                    text: "Ok",
                    onPress: () => console.warn("OK"),
                    
                  }
          
                ],
                { cancelable: true }
              )
              navigation.navigate('Home', {screen: 'Home'} ) 
        }

        // 

    }



  return (
      <View>
          <Card containerStyle={styles.cardContainer} >
            <Animatable.View
            animation="bounceIn"
            duration={1500}>
                <Icon
                name='check-circle'
                type='material-community'
                color='#4caf50'
                size={70}
                iconStyle={styles.icon}
                />
            </Animatable.View>
              <Text style={styles.titleMsg} >
                ¡Gracias!
              </Text>
              <Text style={styles.textMsg}>
                  Confirmaste el servicio, en viajes programados puedes checar estatus y detalles.
              </Text>
              <Button
                
                title="Agregar viajes a mi calendario"
                buttonStyle={{width: '70%', alignSelf: 'center', backgroundColor: '#009387', marginBottom: 20}}
                onPress={() => agregarViajes(viajes)}
                />
          </Card>
      </View>
  );
};

export default viajeAtendido;

const styles = StyleSheet.create({
    titleMsg: {
        alignSelf: 'center',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 60,
        color: '#424242'
    },
    textMsg: {
        alignSelf: 'center',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 50,
        color: '#424242'
    },
    icon:{
        marginTop: 60
    },
    cardContainer: {
        marginVertical: '10%',
    }
});