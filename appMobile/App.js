import React, { useEffect, useRef, useState } from "react";
import { View, ActivityIndicator, Vibration } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { DrawerContent } from "./screens/DrawerContent";

import { HomeStackScreen, LicenciasStack } from "./stacks/MainStack";
import { NotificacionesStackScreen } from "./stacks/MainStack";
import { PerfilStackScreen } from "./stacks/MainStack";
import { LicenciasStackScreen } from "./stacks/MainStack";
import { ViajesStackScreen } from "./stacks/MainStack";
import { EstadisticasStackScreen } from "./stacks/MainStack";
import { IncidenciasStackScreen } from "./stacks/MainStack";
import { FacturacionStackScreen } from "./stacks/MainStack";
import { AyudaStackScreen } from "./stacks/MainStack";
import { SoporteStackScreen } from "./stacks/MainStack";
import { CalendarioStackScreen } from "./stacks/MainStack";

import { AuthContext } from "./src/context";
import AsyncStorage from "@react-native-community/async-storage";

import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

import RootStack from "./src/RootStack";

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

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  //

  const initialLoginState = {
    isLoading: true,
    email: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          email: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          email: null,
          userToken: null,
          isLoading: false,
        };
      case "REGISTER":
        return {
          ...prevState,
          email: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async (email, password, userToken) => {
        // setUserToken('abc');
        // setIsLoading(false);
        loginState.userToken = userToken;

        // console.log('user token: ',  userToken);
        dispatch({ type: "LOGIN", id: email, token: userToken });
      },
      signOut: async () => {
        // setUserToken(null);
        // setIsLoading(false);
        try {
          await AsyncStorage.removeItem("userToken");
          await AsyncStorage.removeItem("email");
          await AsyncStorage.removeItem("idTaxista");
          await AsyncStorage.removeItem("password");
          await AsyncStorage.removeItem("numLicencia");
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: "LOGOUT" });
      },
      signUp: () => {
        // setUserToken('abc');
        // setIsLoading(false);
      },
    }),
    []
  );

  useEffect(() => {
    //Login
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem("email");
      } catch (e) {
        console.log(e);
      }
      // console.log('user token: ',  userToken);
      dispatch({ type: "RETRIEVE_TOKEN", token: userToken });
    }, 1000);

    registerForPushNotificationsAsync().then((token) =>
      alert("Tu token: " + token)
    );

    notificationListener.current = Notifications.addNotificationReceivedListener(
      (notification) => {}
    );

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
    };
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
          <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
          >
            <Drawer.Screen name="HomeDrawer" component={HomeStackScreen} />
            <Drawer.Screen name="Perfil" component={PerfilStackScreen} />
            <Drawer.Screen name="Licencias" component={LicenciasStackScreen} />
            <Drawer.Screen
              name="Notificaciones"
              component={NotificacionesStackScreen}
            />
            <Drawer.Screen name="Viajes" component={ViajesStackScreen} />
            <Drawer.Screen
              name="configurarCalendario"
              component={CalendarioStackScreen}
            />
            {/* <Drawer.Screen name="Estadisticas" component={EstadisticasStackScreen} /> */}
            <Drawer.Screen
              name="Incidencias"
              component={IncidenciasStackScreen}
            />
            <Drawer.Screen
              name="Facturacion"
              component={FacturacionStackScreen}
            />
            <Drawer.Screen name="Soporte" component={SoporteStackScreen} />
          </Drawer.Navigator>
        ) : (
          <RootStack />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
export default App;

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
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}
