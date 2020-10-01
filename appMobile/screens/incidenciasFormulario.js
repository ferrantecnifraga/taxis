import React, {useState}  from "react";
import { ScrollView, StyleSheet, Alert, TextInput } from 'react-native';
import { Card, Text, Divider, Input, Button } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select'

import AsyncStorage from "@react-native-community/async-storage";

const incidenciasFormulario = () => {
    const [descripcion, setDescripcion] = useState("")
    const [lugar, setLugar] = useState("")
    const [idViaje, setIdViaje] = useState("")
    const [tipo, setTipo] = useState("")

    const itemsTipo = [
        { label: 'CHOQUE', value: 'CHOQUE' },
        { label: 'ACCIDENTE', value: 'ACCEDINTE' },
        { label: 'PROBLEMAS CON EL AUTO', value: 'PROBLEMAS' },
      ]

      const placeholderTipo = {
        label: 'Escoger tipo',
        value: null,
        color: '#9EA0A4',
      }; 


      const requestHandle = async() => {
        let email2 = await AsyncStorage.getItem('email')
        let password2 = await AsyncStorage.getItem('password')
        let idTaxista2 = await AsyncStorage.getItem('idTaxista')
        let response = await fetch('https://taxis-lleida.herokuapp.com/api/taxistas/levantarIncidencia', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email2,
            password: password2,
            idTaxista: idTaxista2,
            lugar: lugar,
            tipo: tipo,
            idViaje: idViaje,
            descripcion: descripcion
          })
        })
    
          let response2 = await response.json()
          console.log(response2)
          const {message} = response2
    
          if(String(message)=="Error!"){
            Alert.alert(
              "Error",
              "Checa tu conexión a internet",
              [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
              ],
              { cancelable: true }
            );
          }else{
            Alert.alert(
              "Recibido!",
              response2.estatus,
              [
                { text: "OK", onPress: () => console.log("OK Pressed") }
              ],
              { cancelable: true }
            );
            setIdViaje("")
            setDescripcion("")
            setLugar("")
          }
    
        }


    
    return (

      
      <ScrollView>
        <Card>
          <Text style={{color:"#777777", textAlign: 'center', fontSize: 20, margin: 30}}>Reportar incidencia</Text>
          <Divider/>
          <Input
            containerStyle={styles.containerInput}
            label='Numero del viaje'
            placeholder='Viaje'
            value={idViaje}
            onChangeText={(text) => setIdViaje(text)}
          />
          <Input
            containerStyle={styles.containerInput}
            label='Lugar del suceso'
            placeholder='Ubicación'
            value={lugar}
            onChangeText={(text) => setLugar(text)}
          />
          <Input
            containerStyle={styles.containerInput}
            label='¿Que pasó?'
            placeholder='¿Que pasó?'
            value={descripcion}
            onChangeText={(text) => setDescripcion(text)}
          />
        <Text style={{ fontSize: 16 , color: '#86939e', fontWeight: 'bold', marginLeft: 10 }}>Tipo de suceso </Text>
          <RNPickerSelect
            placeholder={placeholderTipo}
            onValueChange={(value) => setTipo(value)}
            items={itemsTipo}
          />
          <Button
            title="Enviar"
            buttonStyle={{width: '70%', alignSelf: 'center', marginTop: 30, backgroundColor: '#009387'}}
            onPress={() => {requestHandle()} }
          />
        </Card>
      </ScrollView>
    );
};

export default incidenciasFormulario;

const styles = StyleSheet.create({
  containerInput: {
    marginTop: 10
  },
});
