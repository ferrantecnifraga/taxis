import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { Card,  Button, Icon } from "react-native-elements";
import * as Animatable from 'react-native-animatable';

const viajeRechazado = ({navigation}) => {

  return (
      <View>
          <Card containerStyle={styles.cardContainer} >
            <Animatable.View
            animation="bounceIn"
            duration={1500}>
                <Icon
                name='cancel'
                type='material-community'
                color='#f44336'
                size={70}
                iconStyle={styles.icon}
                />
            </Animatable.View>
              <Text style={styles.textMsg} >
                Haz rechazado el viaje, Se te tomara en cuenta como realizado. ¡No rechazes viajes!
              </Text>
              <Button
                title="Ir a inicio"
                buttonStyle={{width: '70%', alignSelf: 'center', backgroundColor: '#009387', marginBottom: 20}}
                onPress={() => navigation.navigate('Home', {screen: 'Home'} )}
                />
          </Card>
      </View>
  );
};

export default viajeRechazado;

const styles = StyleSheet.create({
    textMsg: {
        alignSelf: 'center',
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 60,
        color: '#424242'
    },
    icon:{
        marginTop: 60
    },
    cardContainer: {
        marginVertical: '10%',
    }
});