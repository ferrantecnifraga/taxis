import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Image, Alert } from "react-native";
import { Card, Divider, Button } from "react-native-elements";

import AsyncStorage from "@react-native-community/async-storage";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";
import * as Calendar from "expo-calendar";
import * as Localization from "expo-localization";
import moment from "moment";

import { useNavigation } from "@react-navigation/native";

const atenderViajeDetalles = ({ route, navigation }) => {
  const [estado, setEstado] = useState("Aceptar");
  const [estado2, setEstado2] = useState("Rechazar");

  const { idVP, fechaInicio, direccionHospital, servicio } = route.params;

  return (
    <ScrollView>
      <Card>
        <View>
          <Text
            style={{
              fontSize: 25,
              marginVertical: 20,
              marginHorizontal: 30,
              textAlign: "center",
            }}
          >
            Numero de viaje: {idVP}
          </Text>

          <Text style={styles.textLabel}>Fecha de Inicio:</Text>
          <Text style={styles.respuesta}>{fechaInicio}</Text>
          <Divider style={styles.divider} />
          <Text style={styles.textLabel}>Centro de asistencia:</Text>
          <Text style={styles.respuesta}>{direccionHospital}</Text>
          <Divider style={styles.divider} />
          <Text style={styles.textLabel}>Servicio:</Text>
          <Text style={styles.respuesta}>{servicio}</Text>
          <Divider style={styles.divider} />
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Button
              title="Rechazar"
              type="outline"
              titleStyle={{ color: "#009387" }}
              buttonStyle={{
                alignSelf: "center",
                marginTop: 30,
                marginLeft: 10,
                borderColor: "#009387",
              }}
              onPress={() => atenderElViaje(idVP, "Rechazar", { navigation })} //Pasale navigation anda mas
            />
            <Button
              title="Aceptar"
              buttonStyle={{
                alignSelf: "center",
                marginTop: 30,
                marginRight: 10,
                backgroundColor: "#009387",
              }}
              onPress={() =>
                atenderElViaje(
                  idVP,
                  "Confirmar",
                  { navigation },
                  fechaInicio,
                  direccionHospital,
                  servicio
                )
              } //Pasale todo los ´parametros de la linea 56
            />
          </View>
        </View>
      </Card>
    </ScrollView>
  );
};

//Fetch a la API atender viaje
const atenderElViaje = async (
  idVP,
  respuesta,
  { navigation },
  fechaInicio,
  direccionHospital,
  servicio
) => {
  let email2 = await AsyncStorage.getItem("email");
  let password2 = await AsyncStorage.getItem("password");
  let idTaxista2 = await AsyncStorage.getItem("idTaxista");
  let calendario = await AsyncStorage.getItem("idCalendario");

  try {
    let response = await fetch(
      "https://taxis-lleida.herokuapp.com/api/taxistas/atenderViaje",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email2,
          password: password2,
          idTaxista: idTaxista2,
          idVP: idVP,
          respuesta: respuesta,
        }),
      }
    );

    let response2 = await response.json();

    if (response2.tipo == "Confirmado") {
      navigation.navigate("viajeAtendido", {
        viajes: response2.viajes,
      });
    } else if (response2.tipo == "Rechazado") {
      navigation.navigate("viajeRechazado");
    }
  } catch (error) {
    console.warn(error);
    Alert.alert(
      "Atender viaje",
      error,
      [
        {
          text: "Ok",
          onPress: () => console.warn("OK"),
        },
      ],
      { cancelable: true }
    );
  }
};

export default atenderViajeDetalles;

const styles = StyleSheet.create({
  textLabel: {
    fontSize: 17,
    marginLeft: 15,
    marginTop: 15,
    color: "#bdbdbd",
  },
  respuesta: {
    fontSize: 20,
    textAlign: "right",
  },
  divider: {
    height: 2,
    marginVertical: 5,
  },
});
