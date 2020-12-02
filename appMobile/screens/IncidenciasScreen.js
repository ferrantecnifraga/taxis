import React, { Component, useState, useEffect } from "react";
import {
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
import { BASE_URL } from "../src/utils/index";
import { useQuery } from "react-query";

const fetchIncidencias = async () => {
  let email2 = await AsyncStorage.getItem("email");
  let password2 = await AsyncStorage.getItem("password");
  let idTaxista2 = await AsyncStorage.getItem("idTaxista");
  let response = await fetch(
    "https://taxis-lleida.herokuapp.com/api/taxistas/incidencias",
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
      }),
    }
  );

  return response.json();
};

const IncidenciasScreen = () => {
  const { status, error, isLoading, data } = useQuery(
    "incidencias",
    fetchIncidencias
  );

  const tableHead = [
    "Numero de incidencia",
    "Nombre",
    "Primer Apellido",
    "Segundo Apellido",
    "Estatus",
    "Tipo",
    "Descripcion",
    "Lugar",
    "Numero de Viaje",
    "Mensaje",
    "Usuario que atendio",
  ];

  const detalles = (id, fecha) => {
    return Alert.alert(
      "Información de la incidencia",
      "Tu incidencia numero " + id + ", fue reportada el " + fecha,
      [{ text: "Ok", onPress: () => console.warn("OK Pressed: " + id) }],
      { cancelable: true }
    );
  };

  const boton = (id, fecha) => {
    return (
      <TouchableOpacity onPress={() => detalles(id, fecha)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Detalles incidencia</Text>
        </View>
      </TouchableOpacity>
    );
  };

  if (isLoading)
    return (
      <View style={[styles.loading]}>
        <ActivityIndicator size="large" color="#00ff00" />
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

  if (status === "success" && data.incidentes.length > 0) {
    return (
      <ScrollView style={styles.container} horizontal={true}>
        <Table borderStyle={{ borderColor: "transparent" }}>
          <Row data={tableHead} style={styles.head} textStyle={styles.celda} />
          {data.incidentes.map((e, i) => (
            <TableWrapper key={i} style={styles.row}>
              <Cell
                key={i + 16}
                data={e.id}
                textStyle={styles.text}
                style={styles.celda}
              />
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
                data={e.estatus}
                textStyle={styles.text}
                style={styles.celda}
              />
              <Cell
                key={i + 6}
                data={e.tipo}
                textStyle={styles.text}
                style={styles.celda}
              />
              <Cell
                key={i + 7}
                data={e.descripcion}
                textStyle={styles.text}
                style={styles.celda}
              />
              <Cell
                key={i + 8}
                data={e.lugar}
                textStyle={styles.text}
                style={styles.celda}
              />
              <Cell
                key={i + 9}
                data={e.idViaje}
                textStyle={styles.text}
                style={styles.celda}
              />
              <Cell
                key={i + 10}
                data={e.mensaje}
                textStyle={styles.text}
                style={styles.celda}
              />
              <Cell
                key={i + 11}
                data={e.usuarioAtendio}
                textStyle={styles.text}
                style={styles.celda}
              />
            </TableWrapper>
          ))}
        </Table>
      </ScrollView>
    );
  } else {
    return (
      <View style={styles.topBox}>
        <Text style={styles.headline}>¡No hay incidencias reportadas!</Text>
      </View>
    );
  }
};

export default IncidenciasScreen;

const styles = StyleSheet.create({
  celda: {
    width: 150,
    padding: 5,
    textAlign: "center",
  },
  container: {
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
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  headline: {
    textAlign: "center", // <-- the magic
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 0,
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
