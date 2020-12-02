import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import { Avatar, Title } from "react-native-paper";

import { Card, Divider } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-community/async-storage";
import { useQuery } from "react-query";
import { BASE_URL } from "../src/utils/index";

const fetchProfile = async () => {
  let email2 = await AsyncStorage.getItem("email");
  let password2 = await AsyncStorage.getItem("password");
  let idTaxista2 = await AsyncStorage.getItem("idTaxista");

  let response = await fetch(`${BASE_URL}/profile`, {
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

const PerfilScreen = () => {
  const { isLoading, error, status, data } = useQuery("profile", fetchProfile);

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
        <Card style={styles.userInfoSection}>
          <Avatar.Icon
            style={{ alignSelf: "center", backgroundColor: "#009387" }}
            icon="taxi"
            size={100}
          />

          <View style={styles.userInfoSection}>
            <View style={styles.row}>
              <Text style={styles.infoText}>Nombre: </Text>
              <Text style={styles.dataText}>{data.taxista.nombre}</Text>
            </View>
            <Divider style={{ height: 2 }} />
            <View style={styles.row}>
              <Text style={styles.infoText}>Primer Apellido: </Text>
              <Text style={styles.dataText}>{data.taxista.primerApellido}</Text>
            </View>
            <Divider style={{ height: 2 }} />
            <View style={styles.row}>
              <Text style={styles.infoText}>Segundo Apellido: </Text>
              <Text style={styles.dataText}>
                {data.taxista.segundoApellido}
              </Text>
            </View>
            <Divider style={{ height: 2 }} />
            <View style={styles.row}>
              <Text style={styles.infoText}>Num Socio: </Text>
              <Text style={styles.dataText}>{data.taxista.numSocio}</Text>
            </View>
            <Divider style={{ height: 2 }} />
            <View style={styles.row}>
              <Text style={styles.infoText}>Acuerdo Marco:</Text>
              <Text style={styles.dataText}>{data.taxista.acuerdoMarco}</Text>
            </View>
            <Divider style={{ height: 2 }} />
            <View style={styles.row}>
              <Text style={styles.infoText}>Telf:</Text>
              <Text style={styles.dataText}>{data.taxista.telf}</Text>
            </View>
            <Divider style={{ height: 2 }} />

            <View style={styles.row}>
              <Text style={styles.infoText}>Estatus:</Text>
              <Text style={styles.dataText}>{data.taxista.estatus}</Text>
            </View>
            <Divider style={{ height: 2 }} />
          </View>
        </Card>
      </ScrollView>
    );
};

export default PerfilScreen;

const styles = StyleSheet.create({
  userInfoSection: {
    paddingHorizontal: 25,
    marginBottom: 25,
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    marginTop: 25,
  },

  infoText: {
    color: "#777777",
    textAlign: "left",
    fontSize: 15,
    flex: 1,
  },
  dataText: {
    color: "#212121",
    textAlign: "right",
    marginRight: 5,
    fontSize: 20,
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
});
