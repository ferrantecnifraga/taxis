import React, { useState, useEffect } from "react";
import { View, StyleSheet, Alert, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Badge, withBadge } from "react-native-elements";

import { AuthContext } from "../src/context";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { useQuery } from "react-query";
import { BASE_URL } from "../src/utils/index";

const BadgedIcon = withBadge()(Icon);

const fetchDrawer = async () => {
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

export function DrawerContent(props) {
  const { signOut } = React.useContext(AuthContext);
  const { data, isLoading, error, status } = useQuery("drawer", fetchDrawer);

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
      <View style={{ flex: 1 }}>
        <DrawerContentScrollView {...props}>
          <View style={styles.drawerContent}>
            <View style={styles.userInfoSection}>
              <View style={{ flexDirection: "row", marginTop: 15 }}>
                <Avatar.Icon
                  style={{ alignSelf: "center", backgroundColor: "#009387" }}
                  icon="taxi"
                  size={50}
                />
                <View style={{ marginLeft: 15, flexDirection: "column" }}>
                  <Title style={styles.title}>
                    {data.taxista.nombre} {data.taxista.primerApellido}
                  </Title>
                  <Caption style={styles.caption}>
                    {data.taxista.numSocio}
                  </Caption>
                  <Caption style={styles.caption}>
                    {data.taxista.estatus}
                  </Caption>
                </View>
              </View>
            </View>

            <Drawer.Section style={styles.drawerSection}>
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon name="home" color={color} size={size} />
                )}
                label="Inicio"
                onPress={() => {
                  props.navigation.navigate("Home");
                }}
              />
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon name="bell" color={color} size={size} />
                )}
                label="Notificaciones"
                onPress={() => {
                  props.navigation.navigate("Notificaciones", {
                    screen: "Notificaciones",
                  });
                }}
              />
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon name="account-outline" color={color} size={size} />
                )}
                label="Mi Perfil"
                onPress={() => {
                  props.navigation.navigate("Perfil");
                }}
              />

              <DrawerItem
                icon={({ color, size }) => (
                  <Icon name="id-card" color={color} size={size} />
                )}
                label="Mis Licencias"
                onPress={() => {
                  props.navigation.navigate("Licencias");
                }}
              />
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon name="car-side" color={color} size={size} />
                )}
                label="Mis viajes"
                onPress={() => {
                  props.navigation.navigate("Viajes", { screen: "Viajes" });
                }}
              />
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon name="calendar-month" color={color} size={size} />
                )}
                label="Configurar calendario"
                onPress={() => {
                  props.navigation.navigate("configurarCalendario");
                }}
              />
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon name="alert-octagon" color={color} size={size} />
                )}
                label="Levantar incidencia"
                // onPress={() => {props.navigation.navigate('Estadisticas')}}
                onPress={() => {
                  props.navigation.navigate("incidenciasFormulario");
                }}
              />
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon name="alert" color={color} size={size} />
                )}
                label="Incidencias"
                onPress={() => {
                  props.navigation.navigate("Incidencias");
                }}
              />
              {/* <DrawerItem 
                            icon={({color, size}) => (
                              <Icon
                              name="note-outline"
                              color={color}
                              size={size}
                              />
                          )}
                          label="Facturación"
                          // onPress={() => {props.navigation.navigate('Facturacion')}}
                          onPress={() => {
                            Alert.alert(
                              "Facturacion",
                              "La facturacion estara disponible proximamente",
                              [
                                {
                                  text: "Ok",
                                  onPress: () => console.log("Cancel Pressed")
                                }                                  
                            
                              ],
                              { cancelable: true }
                            );
                          }}
                          
                      /> */}
              {/* <DrawerItem 
                            icon={({color, size}) => (
                              <Icon
                              name="help-box"
                              color={color}
                              size={size}
                              />
                          )}
                          label="Ayuda"
                          onPress={() => {props.navigation.navigate('Ayuda')}}
                      /> */}
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon name="hand-left" color={color} size={size} />
                )}
                label="Soporte"
                onPress={() => {
                  props.navigation.navigate("Soporte");
                }}
              />
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon name="information" color={color} size={size} />
                )}
                label="Acerca de nosotros"
                onPress={() => {
                  props.navigation.navigate("vigsoft");
                }}
              />
            </Drawer.Section>
          </View>
        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="exit-to-app" color={color} size={size} />
            )}
            label="Cerrar sesión"
            onPress={() => {
              signOut();
            }}
          />
        </Drawer.Section>
      </View>
    );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    marginLeft: 5,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 0.1,
  },
  bottomDrawerSection: {
    marginBottom: 1,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
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
