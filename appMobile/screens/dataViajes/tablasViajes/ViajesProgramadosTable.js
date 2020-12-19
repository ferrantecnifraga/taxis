import React, { Component, useState, useEffect } from "react";
import {
  RefreshControl,
  Linking,
  Platform,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  View,
  Alert,
  ActivityIndicator,
} from "react-native";

import { DataTable, Button } from "react-native-paper";
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
import { useNavigation } from "@react-navigation/native";
import moment, { add } from "moment";
import { useQuery } from "react-query";
import { BASE_URL } from "../../../src/utils/index";

const fetchViajesProgramados = async () => {
  let email2 = await AsyncStorage.getItem("email");
  let password2 = await AsyncStorage.getItem("password");
  let idTaxista2 = await AsyncStorage.getItem("idTaxista");
  let response = await fetch(`${BASE_URL}/proximosViajes`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email2,
      password: password2,
      idTaxista: idTaxista2,
    }),
  });

  return response.json();
};

const ViajesProgramadosTable = ({ navigation }) => {
  const { isLoading, error, data, status } = useQuery(
    "viajesProgramados",
    fetchViajesProgramados
  );

  const tableHead = ["Número", "Estatus", "Acciones"];

  const estatusViaje = (estatus) => {
    if (estatus == "Esperando confirmación") {
      //Color naranja
      return <Text style={{ color: "#ff9800" }}>{estatus}</Text>;
    } else if (estatus == "Confirmado") {
      //Color verde
      return <Text style={{ color: "#00c853" }}>{estatus}</Text>;
    } else if (estatus == "Esperando asignación") {
      //Color amarillo
      return <Text style={{ color: "#fdd835" }}>{estatus}</Text>;
    } else if (estatus == "En ruta") {
      //Color azul
      return <Text style={{ color: "#01579b" }}>{estatus}</Text>;
    } else if (estatus == "Cancelado") {
      //Color rojo
      return <Text style={{ color: "#dd2c00" }}>{estatus}</Text>;
    } else if (estatus == "Terminado") {
      //Color gris
      return <Text style={{ color: "#616161" }}>{estatus}</Text>;
    }
  };

  const detallesButton = (
    idVP,
    nombre,
    primerApellido,
    segundoApellido,
    servicio,
    estatus,
    pacientePrimero,
    telfPrimerPaciente,
    direccionPrimerPaciente,
    puebloPrimerPaciente,
    pacienteSegundo,
    telfSegundoPaciente,
    direccionSegundoPaciente,
    puebloSegundoPaciente,
    fechaInicio,
    vehiculo,
    direccionHospital,
    cliente,
    horaRecogida,
    lugarRecogida
  ) => {
    const navigation = useNavigation();
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ViajeDetalle", {
            idVP,
            nombre,
            primerApellido,
            segundoApellido,
            servicio,
            estatus,
            pacientePrimero,
            telfPrimerPaciente,
            direccionPrimerPaciente,
            puebloPrimerPaciente,
            pacienteSegundo,
            telfSegundoPaciente,
            direccionSegundoPaciente,
            puebloSegundoPaciente,
            fechaInicio,
            vehiculo,
            direccionHospital,
            cliente,
            horaRecogida,
            lugarRecogida,
          });
        }}
      >
        <View style={styles.btn}>
          <Text style={styles.btnText}>Ver viaje</Text>
        </View>
      </TouchableOpacity>
    );
  };

  if (isLoading)
    return (
      <View style={styles.topBox}>
        <Text style={styles.headline}>Cargando viajes programados...</Text>
      </View>
    );

  if (error)
    return Alert.alert(
      "Taxis Lleida",
      "Hubo un error al cargar los datos, intenta cerrando la app y comenzando de nuevo. Error: " +
        error.message,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ],
      { cancelable: false }
    );

  if (status === "success" && data.proximosViajes.length > 0) {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Table borderStyle={{ borderColor: "transparent" }}>
            <Row
              data={tableHead}
              style={styles.head}
              textStyle={styles.celda}
            />
            {data.proximosViajes.map((e, i) => (
              <TableWrapper key={i} style={styles.row}>
                <Cell
                  key={i + 1}
                  data={e.idVP}
                  textStyle={styles.text}
                  style={styles.celda}
                />
                <Cell
                  key={i + 7}
                  data={estatusViaje(e.estatus)}
                  textStyle={styles.text}
                  style={styles.celda}
                />
                <Cell
                  key={i + 22}
                  data={detallesButton(
                    e.idVP,
                    e.nombre,
                    e.primerApellido,
                    e.segundoApellido,
                    e.servicio,
                    e.estatus,
                    e.pacientePrimero,
                    e.telfPrimerPaciente,
                    e.direccionPrimerPaciente,
                    e.puebloPrimerPaciente,
                    e.pacienteSegundo,
                    e.telfSegundoPaciente,
                    e.direccionSegundoPaciente,
                    e.puebloSegundoPaciente,
                    e.fechaInicio,
                    e.vehiculo,
                    e.direccionHospital,
                    e.cliente,
                    e.lugarRecogida,
                    e.horaRecogida
                  )}
                />
              </TableWrapper>
            ))}
          </Table>
        </ScrollView>
      </View>
    );
  } else {
    return (
      <View style={styles.topBox}>
        <Text style={styles.headline}>¡No hay viajes programados aún!</Text>
      </View>
    );
  }
};

export default ViajesProgramadosTable;

const styles = StyleSheet.create({
  celda: {
    width: 100,
    padding: 5,
    textAlign: "center",
  },
  container: {
    marginHorizontal: 10,
    paddingVertical: 30,
    flex: 1,
  },
  head: {
    height: 40,
    backgroundColor: "#bdbdbd",
  },
  text: {
    margin: 6,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    backgroundColor: "#eeeeee",
  },
  btn: {
    width: 100,
    height: 25,
    backgroundColor: "#78B7BB",
    borderRadius: 5,
    padding: 1,
    alignSelf: "center",
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
  },
  headline: {
    textAlign: "center", // <-- the magic
    fontWeight: "bold",
    fontSize: 18,
    // marginTop: 10,
    width: 200,
  },
  topBox: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
