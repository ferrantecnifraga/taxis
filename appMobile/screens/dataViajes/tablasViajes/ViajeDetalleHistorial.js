import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Card, Divider, Button } from "react-native-elements";
import moment, { add } from "moment";
const ViajeDetalleHistorial = ({ route, navigation }) => {
  const {
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
  } = route.params;

  const llamar = (number) => {
    let phoneNumber = "";
    if (Platform.OS === "android") {
      phoneNumber = `tel:${number}`;
    } else {
      phoneNumber = `telprompt:${number}`;
    }
    Linking.openURL(phoneNumber);
  };
  return (
    <ScrollView>
      <Card>
        <View>
          <View>
            <Text
              style={{
                fontSize: 25,
                marginTop: 30,
                marginHorizontal: 30,
                textAlign: "center",
              }}
            >
              Numero de viaje: {idVP}
            </Text>
          </View>
          <Divider style={{ marginBottom: 20, marginTop: 10 }} />
          <View>
            <Text style={styles.textLabel}>Nombre:</Text>
            <Text style={styles.respuesta}>{nombre}</Text>
            <Divider style={styles.divider} />
            <Text style={styles.textLabel}>Primer apellido:</Text>
            <Text style={styles.respuesta}>{primerApellido}</Text>
            <Divider style={styles.divider} />
            <Text style={styles.textLabel}>Segundo apellido:</Text>
            <Text style={styles.respuesta}>{segundoApellido}</Text>
            <Divider style={styles.divider} />
            <Text style={styles.textLabel}>Servicio:</Text>
            <Text style={styles.respuesta}>{servicio}</Text>
            <Divider style={styles.divider} />
            <Text style={styles.textLabel}>Estatus:</Text>
            <Text style={styles.respuesta}>{estatus}</Text>
            <Divider style={styles.divider} />
            <Text style={styles.textLabel}>Primer paciente:</Text>
            <Text style={styles.respuesta}>{pacientePrimero}</Text>
            <Divider style={styles.divider} />
            <Text style={styles.textLabel}>Telefono del primer paciente:</Text>
            <TouchableOpacity
              style={{ alignSelf: "flex-end" }}
              onPress={() => {
                llamar(parseInt(telfPrimerPaciente));
              }}
            >
              <View style={styles.btn}>
                <Text style={{ fontSize: 20, color: "#0288d1" }}>
                  {telfPrimerPaciente}
                </Text>
              </View>
            </TouchableOpacity>
            <Divider style={styles.divider} />
            <Text style={styles.textLabel}>Direccion del primer paciente:</Text>
            <Text style={styles.respuesta}>{direccionPrimerPaciente}</Text>
            <Divider style={styles.divider} />
            <Text style={styles.textLabel}>Pueblo del primer paciente:</Text>
            <Text style={styles.respuesta}>{puebloPrimerPaciente}</Text>
            <Divider style={styles.divider} />
            <Text style={styles.textLabel}>Segundo paciente:</Text>
            <Text style={styles.respuesta}>{pacienteSegundo}</Text>
            <Divider style={styles.divider} />
            <Text style={styles.textLabel}>Telefono del segundo paciente:</Text>
            <TouchableOpacity
              style={{ alignSelf: "flex-end" }}
              onPress={() => {
                llamar(parseInt(telfSegundoPaciente));
              }}
            >
              <View style={styles.btn}>
                <Text style={{ fontSize: 20, color: "#0288d1" }}>
                  {telfSegundoPaciente}
                </Text>
              </View>
            </TouchableOpacity>
            <Divider style={styles.divider} />
            <Text style={styles.textLabel}>
              Direccion del segundo paciente:
            </Text>
            <Text style={styles.respuesta}>{direccionSegundoPaciente}</Text>
            <Divider style={styles.divider} />
            <Text style={styles.textLabel}>Pueblo del segundo paciente:</Text>
            <Text style={styles.respuesta}>{puebloSegundoPaciente}</Text>
            <Divider style={styles.divider} />
            <Text style={styles.textLabel}>Fecha de inicio:</Text>
            <Text style={styles.respuesta}>
              {moment(fechaInicio).format("DD/MM/YYYY HH:mm")}
            </Text>
            <Divider style={styles.divider} />
            <Text style={styles.textLabel}>Fecha de termino:</Text>
            <Text style={styles.respuesta}>
              {fechaTermino != null
                ? moment(fechaTermino).format("DD/MM/YYYY HH:mm")
                : fechaTermino}
            </Text>
            <Divider style={styles.divider} />
            <Text style={styles.textLabel}>Vehiculo:</Text>
            <Text style={styles.respuesta}>{vehiculo}</Text>
            <Divider style={styles.divider} />
            <Text style={styles.textLabel}>Centro de asistencia:</Text>
            <Text style={styles.respuesta}>{direccionHospital}</Text>
            <Divider style={styles.divider} />
            <Text style={styles.textLabel}>Cliente:</Text>
            <Text style={styles.respuesta}>{cliente}</Text>
            <Divider style={styles.divider} />

            <Text style={styles.textLabel}>Datos de facturación</Text>
            <Divider style={styles.divider} />
            <Text style={styles.textLabel}>Km Extra:</Text>
            <Text style={styles.respuesta}>{kmExtra}</Text>
            <Divider style={styles.divider} />
            <Text style={styles.textLabel}>Km Festivo:</Text>
            <Text style={styles.respuesta}>{kmfestivo}</Text>
            <Divider style={styles.divider} />
            <Text style={styles.textLabel}>Total Horas espera:</Text>
            <Text style={styles.respuesta}>{totalHoras}</Text>
            <Divider style={styles.divider} />
            <Text style={styles.textLabel}>Km Paciente Extra</Text>
            <Text style={styles.respuesta}>{kmPacienteExtra}</Text>
            <Divider style={styles.divider} />
            <Text style={styles.textLabel}>Km Viaje</Text>
            <Text style={styles.respuesta}>{kmViaje}</Text>
            <Divider style={styles.divider} />
          </View>
        </View>
      </Card>
    </ScrollView>
  );
};

export default ViajeDetalleHistorial;

const styles = StyleSheet.create({
  textLabel: {
    fontSize: 17,
    marginLeft: 15,
    marginTop: 15,
  },
  respuesta: {
    fontSize: 20,
    textAlign: "right",
  },
  divider: {
    height: 2,
  },
});
