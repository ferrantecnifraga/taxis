import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Alert,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import moment, { add } from "moment";
import { Card, Text, Divider, Input, Button } from "react-native-elements";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import AsyncStorage from "@react-native-community/async-storage";
import { useNavigation } from "@react-navigation/native";

const DatosCancelacion = ({ navigation, route }) => {
  const { idVP } = route.params;

  const [lugarRecogida, setLugarRecogida] = useState("");
  const [horaRecogida, setHoraRecogida] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [estado, setEstado] = useState("Cancelar viaje");

  //Date Picker:
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    const horasNum = date.getHours();
    const minutos = date.getMinutes();
    console.warn("Hora picada: " + horasNum + " " + minutos);
    let horaString = "" + horasNum + ":" + minutos + ":" + "00";
    setHoraRecogida(horaString);
    let buena = moment(date).format("HH:mm:ss");
    setHoraRecogida(buena);
    hideDatePicker();
  };

  const cancelarViaje = async () => {
    if (horaRecogida == "" || lugarRecogida == "") {
      Alert.alert(
        "Cancelar viaje",
        "Llena los datos por favor",
        [
          {
            text: "Ok",
            onPress: () => console.log("rechazado"),
          },
        ],
        { cancelable: true }
      );
    } else {
      setEstado("Cancelando..");
      let email2 = await AsyncStorage.getItem("email");
      let password2 = await AsyncStorage.getItem("password");
      let idTaxista2 = await AsyncStorage.getItem("idTaxista");
      console.warn(
        "Hora: " + horaRecogida + " Lugar: " + lugarRecogida + " ID: " + idVP
      );
      try {
        let response = await fetch(
          "https://taxis-lleida.herokuapp.com/api/taxistas/cancelarViaje",
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
              idVP: idVP,
              horaRecogida: horaRecogida,
              lugarRecogida: lugarRecogida,
            }),
          }
        );

        let response2 = await response.json();

        if (String(response2.message) == "Success!") {
          setEstado("Cancelado");
          Alert.alert(
            "Cancelar viaje",
            response2.estatus,
            [
              {
                text: "Ok",
                onPress: () =>
                  navigation.navigate("Viajes", { screen: "Viajes" }),
              },
            ],
            { cancelable: true }
          );
        }
      } catch (error) {
        Alert.alert(
          "Cancelar viaje",
          error,
          [
            {
              text: "Ok",
              onPress: () => console.warn("OK"),
            },
          ],
          { cancelable: true }
        );
      }
    }
  };

  return (
    <ScrollView>
      <Card>
        <Text
          style={{
            color: "#777777",
            textAlign: "center",
            fontSize: 25,
            marginTop: 5,
          }}
        >
          Datos del viaje
        </Text>

        <Divider style={{ marginBottom: 10 }} />

        <Input
          containerStyle={styles.containerInput}
          label="Lugar acordado de recogida"
          placeholder="Escribe la dirección"
          onChangeText={(text) => setLugarRecogida(text)}
          value={lugarRecogida}
        />

        <Divider style={{ marginBottom: 10 }} />
        <Button
          title="Escoger hora de recogida acordada"
          onPress={showDatePicker}
        />
        <Divider style={{ marginBottom: 10 }} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="time"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          locale="en_GB"
        />
        <Input
          containerStyle={styles.containerInput}
          label="Hora escogida"
          value={horaRecogida}
        />
        <Divider style={{ marginBottom: 10 }} />
        <Button
          title={estado}
          buttonStyle={{
            width: "70%",
            alignSelf: "center",
            backgroundColor: "#009387",
          }}
          onPress={() => cancelarViaje()}
        />
      </Card>
    </ScrollView>
  );
};

export default DatosCancelacion;

const styles = StyleSheet.create({
  containerInput: {
    marginBottom: -5,
  },
  divider: {
    borderWidth: 0.5,
    marginBottom: 10,
  },
  input: { maxHeight: 100 },
  inputContainer: {
    display: "flex",
    flexShrink: 0,
    flexGrow: 0,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#c7c6c1",
    paddingVertical: 10,
    paddingLeft: 12,
    paddingRight: "5%",
    width: "100%",
    justifyContent: "flex-start",
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  plus: {
    position: "absolute",
    left: 15,
    top: 10,
  },
});
