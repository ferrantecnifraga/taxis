import React, { useState, useEffect } from "react";
import * as Localization from 'expo-localization';
import { View, StyleSheet, Text, Button } from "react-native";
import { Table, TableWraper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import AsyncStorage from "@react-native-community/async-storage";
import ViajesEnRuta from "./tablasViajes/ViajesEnRuta";
import * as Calendar from 'expo-calendar';
import moment from "moment";

const iniciarViaje = ({navigation}) => {

  const [calendario, setCalendario] = useState({})

  useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === 'granted') {
        const calendars = await Calendar.getCalendarsAsync();
        console.warn('Here are all your calendars:');
        console.warn({ calendars });
        
      }
    })();
  }, []);



    return (
      <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <Text>Calendar Module Example</Text>
      <Button title="Create a new calendar" onPress={createCalendar} />
      <Button title="Crear eveneto" onPress={crearEvento} />
    <Text>XD</Text>
    </View>
    )

    async function createCalendar() {
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
    }

    async function getDefaultCalendarSource() {
  const calendars = await Calendar.getCalendarsAsync();
  const defaultCalendars = calendars.filter(each => each.source.name === 'Default');
  return defaultCalendars[0].source;
}

    async function crearEvento(){
      const fecha = moment("2020-09-14 20:00:00").toDate();
      const fecha2 = moment("2020-09-14 22:00:00").toDate();
      console.warn("Fecha: "+fecha)
      let details = {
        title: "parranda",
        startDate: fecha,
        endDate: fecha2,
        timeZone: Localization.timezone,
        endTimeZone: Localization.timezone,
        location: "Sevilla"
      }
      try {
        const crear = await Calendar.createEventAsync("3", details)
      console.warn("ID del evento: "+crear)
      } catch (error) {
        console.warn(error)
      }
      
      
    }

  }



export default iniciarViaje;
