import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Card, Divider, Icon } from 'react-native-elements';

const ViajesScreen = () => {
    return (
      <View>
        <View style= {styles.row}>
          <Card containerStyle={styles.cardContainer}>
            <Icon
              name='car-traction-control'
              type='material-community'
              alignSelf='central'
              size={50}
              iconStyle={{marginVertical: 10}}
            />
            <Divider/>
            <Text style={styles.cardText}>Próximo viaje</Text>
          </Card>
          <Card containerStyle={styles.cardContainer}>
            <Icon
              name='car-back'
              type='material-community'
              alignSelf='central'
              size={50}
              iconStyle={{marginVertical: 10}}
            />
            <Divider/>
            <Text style={styles.cardText}>Último viaje</Text>
          </Card>
        </View>
        <View style= {styles.row}>
          <Card containerStyle={styles.cardContainer}>
            <Icon
              name='car-multiple'
              type='material-community'
              alignSelf='central'
              size={50}
              iconStyle={{marginVertical: 10}}
            />
            <Divider/>
            <Text style={styles.cardText}>Historial de viajes</Text>
          </Card>
          <Card containerStyle={styles.cardContainer}>
            <Icon
              name='car-side'
              type='material-community'
              alignSelf='central'
              size={50}
              iconStyle={{marginVertical: 10}}
            />
            <Divider/>
            <Text style={styles.cardText}>Viajes rechazados</Text>
          </Card>
        </View>
        <View style= {styles.row}>
          <Card containerStyle={styles.cardContainer}>
            <Icon
              name='graph-trend'
              type='foundation'
              alignSelf='central'
              size={50}
              iconStyle={{marginVertical: 10}}
            />
            <Divider/>
            <Text style={styles.cardText}>Costos y Porcentajes</Text>
          </Card>
          <Card containerStyle={styles.cardContainer}>
            <Icon
              name='car-side'
              type='material-community'
              alignSelf='central'
              size={50}
              iconStyle={{marginVertical: 10}}
            />
            <Divider/>
            <Text style={styles.cardText}>Sectores y Servicios</Text>
          </Card>
        </View>
      </View>
    );
};

export default ViajesScreen;

const styles = StyleSheet.create({
  row: {
    flex:1,
    flexDirection: 'row',
    height: 300
  },
  cardText: {
    color:"#777777",
    textAlign: 'center',
    fontSize: 20,
    flex:1,
    marginTop:10
  },
  cardContainer:{
    width: '40%', 
    alignSelf: 'stretch', 
    marginHorizontal:'5%',
    height: 175
  },
});