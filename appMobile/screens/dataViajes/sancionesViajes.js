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
import { useQuery } from "react-query";

const fetchSanciones = async () => {
  let email2 = await AsyncStorage.getItem("email");
  let password2 = await AsyncStorage.getItem("password");
  let idTaxista2 = await AsyncStorage.getItem("idTaxista");
  let response = await fetch(
    "https://taxis-lleida.herokuapp.com/api/taxistas/sanciones",
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

const sancionesViajes = ({ navigation }) => {
  const { isLoading, error, data, status } = useQuery(
    "sanciones",
    fetchSanciones
  );

  //Headers de tabla(categorias):
  const tableHead = ["Numero de sanción", "Tipo", "Descripción", "Estatus"];
  //Mi Data donde deberia de ir toda nuestra info

  if (isLoading)
    return (
      <View style={styles.topBox}>
        <Text style={styles.headline}>Cargando sanciones...</Text>
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
  if (status === "success" && data.sanciones.length > 0) {
    return (
      <ScrollView style={styles.container} horizontal={true}>
        <Table borderStyle={{ borderColor: "transparent" }}>
          <Row data={tableHead} style={styles.head} textStyle={styles.celda} />
          {data.sanciones.map((e, i) => (
            <TableWrapper key={i} style={styles.row}>
              <Cell
                key={i + 1}
                data={e.idSancionTaxista}
                textStyle={styles.text}
                style={styles.celda}
              />
              <Cell
                key={i + 2}
                data={e.tipo}
                textStyle={styles.text}
                style={styles.celda}
              />
              <Cell
                key={i + 3}
                data={e.descripcion}
                textStyle={styles.text}
                style={styles.celda}
              />
              <Cell
                key={i + 4}
                data={e.estatus}
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
        <Text style={styles.headline}>¡No hay sanciones!</Text>
      </View>
    );
  }
};

export default sancionesViajes;
const styles = StyleSheet.create({
  celda: {
    width: 150,
    padding: 5,
    textAlign: "center",
  },
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: "#fff",
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
