import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { Card,  Button, Icon } from "react-native-elements";
import * as Animatable from 'react-native-animatable';

const errorCalendario = ({navigation}) => {

  return (
      <View>
          <Card containerStyle={styles.cardContainer} >
            <Animatable.View
            animation="bounceIn"
            duration={1500}>
                <Icon
                name='warning'
                type='font-awesome'
                color='#f44336'
                size={70}
                iconStyle={styles.icon}
                />
            </Animatable.View>
              <Text style={styles.textMsg} >
                Ha habido un error, no se ha podido sincronizar con tu calendario
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

export default errorCalendario;

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