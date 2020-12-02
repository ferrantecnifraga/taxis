import React, { useState, useEffect } from "react";
import {
  RefreshControl,
  Linking,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Alert,
  ScrollView,
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

const ViajesHistorialTable = () => {
  const [data, setData] = useState([]);
  const [current_page2, setCurrent_page2] = useState(1);
  const [total2, setTotal2] = useState(6);
  const [paginacion2, setPaginacion2] = useState("");
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    const fetchMyAPI = async () => {
      let email2 = await AsyncStorage.getItem("email");
      let password2 = await AsyncStorage.getItem("password");
      let idTaxista2 = await AsyncStorage.getItem("idTaxista");
      let response = await fetch(
        "https://taxis-lleida.herokuapp.com/api/taxistas/historialViajes",
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

      let response2 = await response.json();

      // console.log(idCliente2)
      console.log(response2.viajes);
      console.warn(response2.viajes);

      setData(response2.viajes);
      setLoading(false);
      if (response2.viajes.length == 0) {
        Alert.alert(
          "Historial de viajes",
          "No hay viajes",
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

    fetchMyAPI();
  }, []);

  const descargar = async () => {
    let email2 = await AsyncStorage.getItem("email");
    let password2 = await AsyncStorage.getItem("password");
    let idTaxista2 = await AsyncStorage.getItem("idTaxista");
    let response = await fetch(
      "https://taxis-lleida.herokuapp.com/api/taxistas/descargarFacturacion",
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

    let response2 = await response.json();
    console.warn(response2);
  };

  //Refresh
  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    let email2 = await AsyncStorage.getItem("email");
    let password2 = await AsyncStorage.getItem("password");
    let idCliente2 = await AsyncStorage.getItem("idCliente");
    try {
      let response = await fetch(
        "https://taxis-lleida.herokuapp.com/api/taxistas/historialViajes",
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
      let responseJson = await response.json();
      console.warn(responseJson.viajes);
      setData(responseJson.viajes.data);
      setRefreshing(false);
    } catch (error) {
      console.error(error);
    }
  }, [refreshing]);

  // refresh

  const tableHead = ["Número", "Estatus", "Detalles"];

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
    fechaTermino,
    vehiculo,
    direccionHospital,
    cliente,
    kmExtra,
    kmfestivo,
    totalHoras,
    kmPacienteExtra,
    kmViaje
  ) => {
    const navigation = useNavigation();
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ViajeDetalleHistorial", {
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
            fechaTermino,
            vehiculo,
            direccionHospital,
            cliente,
            kmExtra,
            kmfestivo,
            totalHoras,
            kmPacienteExtra,
            kmViaje,
          });
        }}
      >
        <View style={styles.btn}>
          <Text style={styles.btnText}>Ver viaje</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return loading ? (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 280,
      }}
    >
      <ActivityIndicator size="large" color="#009387" />
    </View>
  ) : (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Table borderStyle={{ borderColor: "transparent" }}>
          <Row data={tableHead} style={styles.head} textStyle={styles.celda} />
          {data.map((e, i) => (
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
                key={i + 23}
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
                  e.fechaTermino,
                  e.vehiculo,
                  e.direccionHospital,
                  e.cliente
                )}
              />
            </TableWrapper>
          ))}
        </Table>
        {/* <Text style={styles.botonsito} onPress={descargar}>
          Descargar facturación
        </Text> */}
      </ScrollView>
    </View>
  );
};

export default ViajesHistorialTable;

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
    backgroundColor: "#2196f3",
    borderRadius: 5,
    padding: 1,
    alignSelf: "center",
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
  },
  botonsito: {
    fontSize: 20,
    textAlign: "right",
    alignSelf: "center",
    backgroundColor: "#21A0E6",
    margin: 60,
    borderStyle: "dashed",
  },
});
