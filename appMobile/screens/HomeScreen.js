import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ProgressBarAndroid,
  ScrollView,
  ActivityIndicator,
  FlatList,
  Alert,
} from "react-native";
import { Card, Icon } from "react-native-elements";
import { FAB } from "react-native-paper";
import AsyncStorage from "@react-native-community/async-storage";
import { BASE_URL } from "../src/utils/index";
import { useQuery, setConsole } from "react-query";

setConsole({
  log: console.log,
  warn: console.warn,
  error: console.warn,
});

//Function fetch Home

const fetchHome = async () => {
  let email2 = await AsyncStorage.getItem("email");
  let password2 = await AsyncStorage.getItem("password");
  let idTaxista2 = await AsyncStorage.getItem("idTaxista");
  let response = await fetch(`${BASE_URL}/home`, {
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

const HomeScreen = ({ navigation }) => {
  const { isLoading, error, data, status } = useQuery("home", fetchHome);

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
      <View>
        <ScrollView>
          <Card
            title="Viajes asignados en total"
            titleStyle={{
              fontSize: 15,
              textAlign: "left",
              color: "#1976d2",
            }}
            containerStyle={{
              borderLeftColor: "#1976d2",
              borderLeftWidth: 3,
              height: 130,
            }}
          >
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={{ fontSize: 25 }}>{data.viajesEnTotal}</Text>
              <View style={{ flexGrow: 1 }} />
              <Icon
                name="car"
                type="material-community"
                color="#9e9e9e"
                size={25}
              />
            </View>
          </Card>
          <Card
            title="Total de viajes realizados"
            titleStyle={{
              fontSize: 15,
              textAlign: "left",
              color: "#66bb6a",
            }}
            containerStyle={{
              borderLeftColor: "#66bb6a",
              borderLeftWidth: 3,
              height: 130,
            }}
          >
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={{ fontSize: 25 }}> {data.totalCobrado} €</Text>
              <View style={{ flexGrow: 1 }} />
              <Icon name="euro" type="font-awesome" color="#9e9e9e" size={25} />
            </View>
          </Card>
          <Card
            title="Viajes confirmados"
            titleStyle={{
              fontSize: 15,
              textAlign: "left",
              color: "#00bcd4",
            }}
            containerStyle={{
              borderLeftColor: "#00bcd4",
              borderLeftWidth: 3,
              height: 130,
            }}
          >
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={{ fontSize: 25 }}>{data.viajesMes}</Text>
              <View style={{ flexGrow: 1 }} />
              <ProgressBarAndroid
                styleAttr="Horizontal"
                indeterminate={false}
                progress={0.9}
                color="#00bcd4"
                style={{
                  width: 150,
                }}
              />
              <View style={{ flexGrow: 1 }} />
              <Icon
                name="calendar"
                type="font-awesome"
                color="#9e9e9e"
                size={25}
              />
            </View>
          </Card>
          <Card
            title="Sanciones en total"
            titleStyle={{
              fontSize: 15,
              textAlign: "left",
              color: "#e53935",
            }}
            containerStyle={{
              borderLeftColor: "#e53935",
              borderLeftWidth: 3,
              height: 130,
            }}
          >
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={{ fontSize: 25 }}>{data.sanciones}</Text>
              <View style={{ flexGrow: 1 }} />
              <Icon
                name="exclamation"
                type="font-awesome"
                color="#9e9e9e"
                size={25}
              />
            </View>
          </Card>
        </ScrollView>
        <View>
          <FAB
            style={styles.fab}
            large
            icon="alert-octagon"
            onPress={() => {
              navigation.navigate("incidenciasFormulario");
            }}
          />
        </View>
      </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 0,
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
