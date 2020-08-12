import React, {useState}  from "react";
import { ScrollView, StyleSheet, Alert, TextInput } from 'react-native';
import { Card, Text, Divider, Input, Button } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select'
import AsyncStorage from "@react-native-community/async-storage";

const incidenciasFormulario = () => {

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


    
    return (

      
      <ScrollView>
        <Card>
          <Text style={{color:"#777777", textAlign: 'center', fontSize: 20, margin: 30}}>Reportar incidencia</Text>
          <Divider/>
          <Input
            containerStyle={styles.containerInput}
            label='Nombre del taxista'
            placeholder='Nombre del taxista'
          />
          <Input
            containerStyle={styles.containerInput}
            label='Viaje en curso'
            placeholder='Viaje en curso'
          />
          <Input
            containerStyle={styles.containerInput}
            label='Ubicación'
            placeholder='Ubicación'
          />
          <Input
            containerStyle={styles.containerInput}
            label='¿Que pasó?'
            placeholder='¿Que pasó?'
          />
          <Input
            containerStyle={styles.containerInput}
            label='Origen del segundo paciente'
            placeholder='Origen del paciente'
          />
        <Text style={{ fontSize: 16 , color: '#86939e', fontWeight: 'bold', marginLeft: 10 }}>Estatus Taxista </Text>
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
