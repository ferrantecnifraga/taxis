import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Image,
} from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import AsyncStorage from "@react-native-community/async-storage";
import { BASE_URL } from "../src/utils/index";
import { useQuery } from "react-query";

const fetchLicencias = async () => {
  let email2 = await AsyncStorage.getItem("email");
  let password2 = await AsyncStorage.getItem("password");
  let idTaxista = await AsyncStorage.getItem("idTaxista");

  let response = await fetch(`${BASE_URL}/licencias`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email2,
      password: password2,
      idTaxista: idTaxista,
    }),
  });

  return response.json();
};

const LicenciasScreen = ({ navigation }) => {
  const { isLoading, data, error, status } = useQuery(
    "licenciasList",
    fetchLicencias
  );

  const changeIcon = (plazas, tipo) => {
    console.warn("Plazas: " + "plazas y" + " Tipo: " + tipo);
    if (plazas <= 5 && tipo == "TURISME") {
      return require("../assets/turisme-normal.png");
    } else if (plazas <= 5 && tipo == "ADAPTAT") {
      return require("../assets/adaptado-normal.png");
    } else if (plazas > 5 && tipo == "TURISME") {
      return require("../assets/turisme-combi.png");
    } else if (plazas > 5 && tipo == "ADAPTAT") {
      return require("../assets/adaptado-combi.png");
    }
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

  if (status === "success")
    return (
      <ScrollView>
        {data.licencias.map((e, i) => {
          return (
            <ListItem
              key={i}
              title={
                e.nombre + " " + e.primerApellido + " " + e.segundoApellido
              }
              titleStyle={{ marginLeft: 15, marginBottom: 10 }}
              rightAvatar={
                <Avatar
                  rounded
                  large
                  source={changeIcon(e.plazas, e.tipo)}
                  height={75}
                  width={75}
                />
              }
              subtitle={
                <View>
                  <Text style={{ color: "#757575", marginLeft: 15 }}>
                    Matricula: {e.numMatricula}
                  </Text>
                  <Text
                    style={{ color: "#757575", marginLeft: 15, marginTop: 10 }}
                  >
                    Vehículo: {e.vehiculo}
                  </Text>
                  {/* <Text style={{color: '#00796b', marginTop: 15, alignSelf: 'flex-end', fontSize: 15}} > {e.zona} </Text> */}
                </View>
              }
              bottomDivider
              onPress={() => {
                navigation.navigate("LicenciaDetalle", {
                  nombre: e.nombre,
                  primerApellido: e.primerApellido,
                  segundoApellido: e.segundoApellido,
                  vehiculo: e.vehiculo,
                  matricula: e.numMatricula,
                  pueblo: e.zona,
                  tipo: e.tipo,
                  plazas: e.plazas,
                });
              }}
            >
              {/* <Avatar source={changeIcon(e.plazas, e.tipo)} /> */}
            </ListItem>
          );
        })}
      </ScrollView>
    );
};

export default LicenciasScreen;

const styles = StyleSheet.create({
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});
