import React, {useEffect}  from "react";
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Text, Divider, Input, Button } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select'

const SoporteScreen = () => {

  useEffect(() => {
    async function fetchMyAPI() {
      
    let userToken = await AsyncStorage.getItem('userToken')
     if(userToken == null){
       signOut()
     }
      let response = await fetch('https://taxis-lleida.herokuapp.com/api/taxistas/soporte', {
      method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer '+(userToken),
          
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre : nombre,
            email: email,
            tipo: tipo,
            mensaje: mensaje 
        })
      } )

      let response2 = await response.json()
      console.log(response2)
      const {message} = response2.taxista[0]

      if(message=="Error"){
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
          "Gracias!",
          "Se enviarón tus comentarios",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ],
          { cancelable: true }
        );
      }

    }



   fetchMyAPI()
  }, [])



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
