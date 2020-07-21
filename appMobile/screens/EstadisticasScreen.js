import React from 'react';
import { View, Text,  StyleSheet } from 'react-native';
import { Card, Divider, Icon } from 'react-native-elements';

const EstadisticasScreen = ({navigation}) => {
    return (
      <View>
        <View style={{flexDirection: 'row'}}>
          <Card containerStyle={styles.cardContainer}>
            <Icon
              name='chart-bar'
              type='material-community'
              alignSelf='center'
              size={50}
              iconStyle={{marginVertical: 10}}
              onPress={() => {navigation.navigate('cantidadViajes')}}
            />
            <Divider/>
            <Text style={styles.cardText}>Cantidad de Viajes</Text>
          </Card>
          <Card containerStyle={styles.cardContainer}>
            <Icon
              name='chart-bar'
              type='material-community'
              alignSelf='center'
              size={50}
              iconStyle={{marginVertical: 10}}
              onPress={() => {navigation.navigate('proxViajesEst')}}
            />
            <Divider/>
            <Text style={styles.cardText}>Próximos viajes</Text>
          </Card>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Card containerStyle={styles.cardContainer}>
            <Icon
              name='chart-bar'
              type='material-community'
              alignSelf='center'
              size={50}
              iconStyle={{marginVertical: 10}}
              onPress={() => {navigation.navigate('totalGanado')}}
            />
            <Divider/>
            <Text style={styles.cardText}>Total ganado</Text>
          </Card>
          <Card containerStyle={styles.cardContainer}>
            <Icon
              name='chart-bar'
              type='material-community'
              alignSelf='center'
              size={50}
              iconStyle={styles.icon}
              onPress={() => {navigation.navigate('sancionesEst')}}
            />
            <Divider/>
            <Text style={styles.cardText}>Sanciones</Text>
          </Card>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Card containerStyle={styles.cardContainer}>
            <Icon
              name='chart-bar'
              type='material-community'
              alignSelf='center'
              size={50}
              iconStyle={styles.icon}
              onPress={() => {navigation.navigate('rechazadosEst')}}
            />
            <Divider/>
            <Text style={styles.cardText}>Viajes rechazados</Text>
          </Card>
          <Card containerStyle={styles.cardContainer}>
            <Icon
              name='chart-bar'
              type='material-community'
              alignSelf='center'
              size={50}
              iconStyle={styles.icon}
              onPress={() => {navigation.navigate('secSerEst')}}
            />
            <Divider/>
            <Text style={styles.cardText}>Sectores y Servicios</Text>
          </Card>
        </View>
      </View>
    );
};

export default EstadisticasScreen;

const styles = StyleSheet.create({
  cardText: {
    color:"#777777",
    textAlign: 'center',
    fontSize: 20,
    marginTop:10
  },
  cardContainer:{
    width: '40%', 
    marginHorizontal:'5%',
    height: 160,
    flexDirection:'row',
  },
  icon:{
    marginVertical:10,
    alignItems:"center"
  }
});