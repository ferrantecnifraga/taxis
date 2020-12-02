import React, { useState, useEffect } from "react";
import {
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Alert,
  ScrollView,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { ListItem } from "react-native-elements";

import { Card, Divider } from "react-native-elements";
import { DataTable, Button } from "react-native-paper";
import TouchableScale from "react-native-touchable-scale";
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
import { set } from "react-native-reanimated";
import moment, { add } from "moment";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "react-query";
import { BASE_URL } from "../../../src/utils/index";

const fetchViajesEnRuta = async () => {
  let email2 = await AsyncStorage.getItem("email");
  let password2 = await AsyncStorage.getItem("password");
  let idTaxista2 = await AsyncStorage.getItem("idTaxista");
  let response = await fetch(`${BASE_URL}/viajesEnRuta`, {
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

const ViajesEnRuta = () => {
  const { isLoading, error, data, status } = useQuery(
    "viajesEnRuta",
    fetchViajesEnRuta
  );

  const navigation = useNavigation();

  if (isLoading)
    return (
      <View style={styles.topBox}>
        <Text style={styles.headline}>
          Cargando viajes en ruta o viajes para iniciar...
        </Text>
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
      <ScrollView>
        {data.viajes.map((e, i) => {
          return (
            <ListItem
              Component={TouchableScale}
              friction={90} //
              tension={100} // These props are passed to the parent component (here TouchableScale)
              activeScale={0.95} //
              key={i}
              leftAvatar={{
                source: require("../../../assets/turisme-normal.png"),
              }}
              title={
                e.servicio == "Dialisis"
                  ? "Hora de entrada: " +
                    moment(e.fechaInicio).format("DD/MM/YYYY HH:mm")
                  : "Hora del viaje: " +
                    moment(e.fechaInicio).format("DD/MM/YYYY HH:mm")
              }
              titleStyle={{ marginLeft: 15, marginBottom: 10 }}
              subtitle={
                <View>
                  <Text style={{ color: "#757575", marginLeft: 15 }}>
                    Taxista: {e.nombre} {e.primerApellido} {e.segundoApellido}
                  </Text>
                  <Text style={{ color: "#757575", marginLeft: 15 }}>
                    Servicio: {e.servicio}{" "}
                  </Text>
                  <Text style={{ color: "#757575", marginLeft: 15 }}>
                    Número de viaje: {e.idVP}
                  </Text>

                  <Text
                    style={{
                      color: "#00796b",
                      marginTop: 7,
                      alignSelf: "flex-end",
                      fontSize: 15,
                    }}
                  >
                    {" "}
                    Estatus: {e.estatus}
                  </Text>
                </View>
              }
              bottomDivider
              onPress={() => {
                navigation.navigate("DetallesViajesEnRuta", {
                  idVP: e.idVP,
                  nombre: e.nombre,
                  primerApellido: e.primerApellido,
                  segundoApellido: e.segundoApellido,
                  servicio: e.servicio,
                  estatus: e.estatus,
                  pacientePrimero: e.pacientePrimero,
                  telfPrimerPaciente: e.telfPrimerPaciente,
                  direccionPrimerPaciente: e.direccionPrimerPaciente,
                  puebloPrimerPaciente: e.puebloPrimerPaciente,
                  pacienteSegundo: e.pacienteSegundo,
                  telfSegundoPaciente: e.telfSegundoPaciente,
                  direccionSegundoPaciente: e.direccionSegundoPaciente,
                  puebloSegundoPaciente: e.puebloSegundoPaciente,
                  fechaInicio: moment(e.fechaInicio).format("DD/MM/YYYY HH:mm"),
                  vehiculo: e.vehiculo,
                  direccionHospital: e.direccionHospital,
                  cliente: e.cliente,
                });
              }}
            />
          );
        })}
      </ScrollView>
    );
  } else {
    return (
      <View style={styles.topBox}>
        <Text style={styles.headline}>
          ¡No hay viajes en esta fecha para realizar! Checa detalles en próximos
          viajes.
        </Text>
      </View>
    );
  }
};

export default ViajesEnRuta;

const styles = StyleSheet.create({
  celda: {
    width: 150,
    padding: 5,
    textAlign: "center",
  },
  container: {
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
    width: 200,
    backgroundColor: "#78B7BB",
    borderRadius: 5,
    padding: 1,
    marginTop: 10,
    alignSelf: "center",
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
  },
  infoText: {
    color: "#777777",
    fontSize: 20,
    alignSelf: "center",
  },
  dataText: {
    color: "#212121",
    fontSize: 20,
    marginBottom: 10,
    alignSelf: "center",
  },
  userInfoSection: {
    paddingHorizontal: 25,
    marginBottom: 25,
    marginTop: 10,
  },
  titulo: {
    alignSelf: "center",
    color: "#212121",
    fontSize: 30,
    marginTop: 20,
  },
  dividerTit: {
    marginBottom: 30,
  },
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 460,
  },
  headline: {
    textAlign: "center", // <-- the magic
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 460,
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
