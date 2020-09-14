import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { Card,  Button, Icon } from "react-native-elements";
import * as Animatable from 'react-native-animatable';

const exitosoCalendario = ({navigation}) => {

  return (
      <View>
          <Card containerStyle={styles.cardContainer} >
            <Animatable.View
            animation="bounceIn"
            duration={1500}>
                <Icon
                name='check-circle'
                type='material-community'
                color='#4caf50'
                size={70}
                iconStyle={styles.icon}
                />
            </Animatable.View>
              <Text style={styles.titleMsg} >
                ¡Gracias!
              </Text>
              <Text style={styles.textMsg}>
                  Todos tus viajes se sincronizaran con tu calendario
              </Text>
              <Button
                icon={
                    <Icon
                    name="check-circle"
                    type='material-community'
                    size={25}
                    color="white"
                    iconStyle={{marginRight:10}}
                    />
                }
                title="Ir a inicio"
                buttonStyle={{width: '70%', alignSelf: 'center', backgroundColor: '#009387', marginBottom: 20}}
                onPress={() => navigation.navigate('Home', {screen: 'Home'} )}
                />
          </Card>
      </View>
  );
};

export default exitosoCalendario;

const styles = StyleSheet.create({
    titleMsg: {
        alignSelf: 'center',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 60,
        color: '#424242'
    },
    textMsg: {
        alignSelf: 'center',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 50,
        color: '#424242'
    },
    icon:{
        marginTop: 60
    },
    cardContainer: {
        marginVertical: '10%',
    }
});