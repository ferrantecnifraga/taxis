import React from "react";
import { View, Text } from "react-native";

const   NotificacionDetalle = ({route, navigation}) => {

const { encabezado, descripcion } = route.params;

  return (
    <View>
      <Text>encabezado: {JSON.stringify(encabezado)}</Text>
      <Text>Descripcion: {JSON.stringify(descripcion)}</Text>
    </View>
  );
};

export default NotificacionDetalle;