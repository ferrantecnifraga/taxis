import React, { useState } from "react";
import { View, StyleSheet } from 'react-native';
import { Card, Text, Divider, Input, Button } from 'react-native-elements';
import { Picker } from '@react-native-community/picker';

const SoporteScreen = () => {

  const [selectedValue, setSelectedValue] = useState("");

    return (
      <View>
        <Card>
          <Text style={{color:"#777777", textAlign: 'center', fontSize: 20, margin: 30}}>Reporta errores o sugiere un cambio</Text>
          <Divider/>
          <Input
            containerStyle={styles.containerInput}
            label='Nombre'
            placeholder='Tu nombre'
          />
          <Input
            containerStyle={styles.containerInput}
            label='Email'
            placeholder='TuEmail@ejemplo.com '
          />
          <Text style={{ fontSize: 16 , color: '#86939e', fontWeight: 'bold', marginLeft: 10 }}>Tipo: </Text>
          <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 150, margin:10 }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Error" value="error" />
            <Picker.Item label="Funcionalidad" value="func" />
          </Picker>
          <Input
            label='Cuentanos que pasá...'
            placeholder='Cuentanos que pasá...'
            multiline={true}  
            numberOfLines={5}  
          />
          <Button
            title="Enviar"
            buttonStyle={{width: '70%', alignSelf: 'center', marginTop: 30, backgroundColor: '#009387'}}
          />
        </Card>
      </View>
    );
};

export default SoporteScreen;

const styles = StyleSheet.create({
  containerInput: {
    marginTop: 10
  }
});
