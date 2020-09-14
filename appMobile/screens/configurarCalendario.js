import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import { Card, Divider, Button } from "react-native-elements";

const configurarCalendario = ({navigation}) => {

    return(
        <View>
            <Card style={styles.card} >
                <Text style={styles.titulo} >Calendario de la asociación de Taxis Lleida</Text>
                <Button
                    title="Crear mi calendario de viajes"
                    buttonStyle={{width: '70%', alignSelf: 'center', marginTop: 30, backgroundColor: '#009387'}}
                    onPress={() => navigation.navigate('exitosoCalendario')}
                    //En caso de querer enviar al error poner lo siguiente:
                    //onPress={() => navigation.navigate('errorCalendario')}
                />
            </Card>
        </View>
    )

}

export default configurarCalendario;

const styles = StyleSheet.create({
    card: {
      alignContent: 'center'
    },
    titulo: {
     textAlign: 'center',
     fontSize: 20
    }
  });