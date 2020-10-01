import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native'
import { Card, Divider, Button } from "react-native-elements";
import * as Calendar from 'expo-calendar';
import AsyncStorage from "@react-native-community/async-storage";

const configurarCalendario = ({navigation}) => {

    const [titulo, setTitulo] = useState("Crear mi calendario de viajes")

    useEffect(() => {
        (async () => {
            
          const { status } = await Calendar.requestCalendarPermissionsAsync();
          
          if (status === 'granted') {
            const calendars = await Calendar.getCalendarsAsync();
            // console.warn('Here are all your calendars:');
            console.warn({ calendars });
            let calendario = await AsyncStorage.getItem('idCalendario')
            if (calendario != null) {
              setTitulo("Ya está configurado, verás tus viajes en tu calendario personal")  
            }else{
              setTitulo("Crear mi calendario de viajes")
            }
          }else{
            navigation.navigate('errorCalendario')
          }
        })();
      }, []);

      async function createCalendar() {
        setTitulo("Creando...")
        const defaultCalendarSource =
          Platform.OS === 'ios'
            ? await getDefaultCalendarSource()
            : { isLocalAccount: true, name: "ASSOCIACIÓ PROVINCIAL D'AUTO TAXIS - LLEIDA"};
        const newCalendarID = await Calendar.createCalendarAsync({
          title: "ASSOCIACIÓ PROVINCIAL D'AUTO TAXIS - LLEIDA",
          color: 'blue',
          entityType: Calendar.EntityTypes.EVENT,
          sourceId: defaultCalendarSource.id,
          source: defaultCalendarSource,
          name: 'internalCalendarName',
          ownerAccount: 'personal',
          accessLevel: Calendar.CalendarAccessLevel.OWNER,
        });
        console.warn(`Your new calendar ID is: ${newCalendarID}`);
        if(newCalendarID != undefined){
            let id = await AsyncStorage.setItem('idCalendario', newCalendarID)
            setTitulo("Ya está configurado, verás tus viajes en tu calendario personal. ID del calendario: "+id)
            navigation.navigate('exitosoCalendario')
        }else{
            navigation.navigate('errorCalendario')
        }
      }
  
      async function getDefaultCalendarSource() {
    const calendars = await Calendar.getCalendarsAsync();
    const defaultCalendars = calendars.filter(each => each.source.name === 'Default');
    return defaultCalendars[0].source;
  }





    return(
        <View>
            <Card style={styles.card} >
                <Text style={styles.titulo} >Calendario de la asociación de Taxis Lleida</Text>
                <Button
                    title={titulo}
                    buttonStyle={{width: '70%', alignSelf: 'center', marginTop: 30, backgroundColor: '#009387'}}
                    // onPress={() => navigation.navigate('exitosoCalendario')}
                    //En caso de querer enviar al error poner lo siguiente:
                    //onPress={() => navigation.navigate('errorCalendario')}
                    onPress={createCalendar}

                />
                
            </Card>
        </View>
    )

}

export default configurarCalendario;

const styles = StyleSheet.create({
    card: {
      alignContent: 'center'
    },
    titulo: {
     textAlign: 'center',
     fontSize: 20
    }
  });