import React  from "react";
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Text, Divider, Input, Button } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select'

const SoporteScreen = () => {

  const placeholder = {
    label: 'Tipo de reporte',
    value: null,
    color: '#9EA0A4',
  }; 

    return (

      
      <ScrollView>
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
          <RNPickerSelect
            placeholder={placeholder}
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Funcionalidad', value: 'funcionalidad' },
                { label: 'Error', value: 'error' },
            ]}
          />
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
      </ScrollView>
    );
};

export default SoporteScreen;

const styles = StyleSheet.create({
  containerInput: {
    marginTop: 10
  }
});
