import React from 'react';
import { View, Text,  StyleSheet } from 'react-native';
import { Card, Divider, Icon } from 'react-native-elements';

const EstadisticasScreen = ({navigation}) => {
    return (
      <View>
        <View style={{flexDirection: 'row'}}>
          <Card containerStyle={styles.cardContainer}>
            <Icon
              name='file-chart'
              type='material-community'
              alignSelf='center'
              size={50}
              iconStyle={{marginVertical: 10}}
              onPress={() => {navigation.navigate('cantidadViajes')}}
            />
            <Divider/>
            <Text style={styles.cardText}>Viajes pasados</Text>
          </Card>
          <Card containerStyle={styles.cardContainer}>
            <Icon
              name='chart-line'
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
              name='chart-areaspline'
              type='material-community'
              alignSelf='center'
              size={50}
              iconStyle={{marginVertical: 10}}
              onPress={() => {navigation.navigate('totalGanado')}}
            />
            <Divider/>
            <Text style={styles.cardText}>Total ganado por mes</Text>
          </Card>
          <Card containerStyle={styles.cardContainer}>
            <Icon
              name='report'
              type='material'
              
              size={50}
              iconStyle={{marginVertical: 10}}
              onPress={() => {navigation.navigate('sancionesEst')}}
            />
            <Divider/>
            <Text style={styles.cardText}>Sanciones </Text>
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
    fontSize: 23,
    marginTop:10

  },
  cardContainer:{
    width: '40%', 
    marginHorizontal:'5%',
    height: 200,
    flexDirection:'row',
  },
});