import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Alert,
  ActivityIndicator,
  ScrollView,
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
import moment, { add } from "moment";
import { useQuery } from "react-query";
import { BASE_URL } from "../../../src/utils/index";

const fetchViajesRechazados = async () => {
  let email2 = await AsyncStorage.getItem("email");
  let password2 = await AsyncStorage.getItem("password");
  let idTaxista2 = await AsyncStorage.getItem("idTaxista");
  let response = await fetch(`${BASE_URL}/viajesRechazados`, {
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

const ViajesRechazadosTable = () => {
  const { isLoading, error, data, status } = useQuery(
    "viajesRechazados",
    fetchViajesRechazados
  );

  const tableHead = [
    "Costo Parcial",
    "Nombre",
    "Primer Apellido",
    "Segundo Apellido",
    "Servicio",
    "Estatus",
    "Paciente 1",
    "Paciente 2",
    "Fecha Inicio",
    "Vehiculo",
    "Origen",
    "Pasando por",
    "Destino",
    "Cliente",
  ];

  if (isLoading)
    return (
      <View style={styles.topBox}>
        <Text style={styles.headline}>Cargando viajes rechazados...</Text>
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

  if (status === "success" && data.viajes.length > 0) {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.containerScroll} horizontal={true}>
          <Table borderStyle={{ borderColor: "transparent" }}>
            <Row
              data={tableHead}
              style={styles.head}
              textStyle={styles.celda}
            />
            {data.viajes.map((e, i) => (
              <TableWrapper key={i} style={styles.row}>
                <Cell
                  key={i + 2}
                  data={e.nombre}
                  textStyle={styles.text}
                  style={styles.celda}
                />
                <Cell
                  key={i + 3}
                  data={e.primerApellido}
                  textStyle={styles.text}
                  style={styles.celda}
                />
                <Cell
                  key={i + 4}
                  data={e.segundoApellido}
                  textStyle={styles.text}
                  style={styles.celda}
                />
                <Cell
                  key={i + 5}
                  data={e.servicio}
                  textStyle={styles.text}
                  style={styles.celda}
                />
                <Cell
                  key={i + 6}
                  data={e.estatus}
                  textStyle={styles.text}
                  style={styles.celda}
                />
                <Cell
                  key={i + 7}
                  data={e.pacientePrimero}
                  textStyle={styles.text}
                  style={styles.celda}
                />
                <Cell
                  key={i + 8}
                  data={e.pacienteSegundo}
                  textStyle={styles.text}
                  style={styles.celda}
                />
                <Cell
                  key={i + 9}
                  data={moment(e.fechaInicio).format("DD/MM/YYYY HH:mm")}
                  textStyle={styles.text}
                  style={styles.celda}
                />
                <Cell
                  key={i + 10}
                  data={e.vehiculo}
                  textStyle={styles.text}
                  style={styles.celda}
                />
                <Cell
                  key={i + 14}
                  data={e.cliente}
                  textStyle={styles.text}
                  style={styles.celda}
                />
                {/* <Cell key={i+15} data={element2(e.idVP)}  /> */}
              </TableWrapper>
            ))}
          </Table>
        </ScrollView>
      </View>
    );
  } else {
    return (
      <View style={styles.topBox}>
        <Text style={styles.headline}>¡No hay viajes rechazados aún!</Text>
      </View>
    );
  }
};

export default ViajesRechazadosTable;

const styles = StyleSheet.create({
  celda: {
    width: 150,
    padding: 5,
    textAlign: "center",
  },
  container: {
    flex: 1,
  },
  containerScroll: {
    marginHorizontal: 10,
    paddingVertical: 30,
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
    marginTop: 260,
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
