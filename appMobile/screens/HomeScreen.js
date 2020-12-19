import React, { useEffect, useState, useRef } from "react";

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
import { BASE_URL, BASE_URL_NOT } from "../src/utils/index";
import { useQuery, setConsole } from "react-query";

//Expo
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});
//

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

  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    // registerForPushNotificationsAsync().then((token) =>
    //   alert("Todo bien: " + token)
    // );

    registerForPushNotificationsAsync().then((token) =>
      suscribirNotificationes(token).then((response) => {
        console.warn("El servidor dice:", response);
        if (String(response.message) == "Success!") {
          Alert.alert(
            "App",
            "¡Estás en línea! Todos los servicios operando",
            [{ text: "¡Gracias!", onPress: () => console.log("OK Pressed") }],
            { cancelable: false }
          );
        }
      })
    );

    notificationListener.current = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log(notification);
      }
    );

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log(response);
      }
    );

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);

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

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    // console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#de8226",
    });
  }

  return token;
}

const suscribirNotificationes = async (token) => {
  try {
    let email2 = await AsyncStorage.getItem("email");
    let password2 = await AsyncStorage.getItem("password");
    let idTaxista2 = await AsyncStorage.getItem("idTaxista");
    let numSocio = await AsyncStorage.getItem("numSocio");
    let response = await fetch(`${BASE_URL}/registrarDevice`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email2,
        password: password2,
        idTaxista: idTaxista2,
        expo_token: token,
        numSocio: numSocio,
      }),
    });
    let response2 = await response.json();
    console.warn("Servidor en peticion: ", response2);
    return response2;
  } catch (error) {
    alert(error);
  }
};
