import React from 'react';
import { View, Text,  StyleSheet, Alert } from 'react-native';
import { Card, Divider, Icon } from 'react-native-elements';


const ViajesScreen = ({navigation}) => {
    return (
      <View >
        <View style={{flexDirection: 'row'}}>
          <Card containerStyle={styles.cardContainer}>
            <Icon
              name='car-traction-control'
              type='material-community'
              size={50}
              iconStyle={{marginVertical: 10}}
              onPress={() => {navigation.navigate('iniciarViaje')}}
            //   onPress={ () =>{
            //     Alert.alert(
            //       "Inicar viaje",
            //       "Iniciar viaje estara disponible proximamente",
            //       [
            //         {
            //           text: "Ok",
            //           onPress: () => console.log("Cancel Pressed")
            //         }                                  
                
            //       ],
            //       { cancelable: true }
            //     )
              
            //   }
            // }
                
            />
            <Divider/>
            <Text style={styles.cardText}>Viajes en ruta</Text>
          </Card>
          <Card containerStyle={styles.cardContainer}>
            <Icon
              name='car'
              type='material-community'
              size={50}
              iconStyle={{marginVertical: 10}}
              onPress={() => {navigation.navigate('ProximosViajes')}}
            />
            <Divider/>
            <Text style={styles.cardText}>Próximos viajes</Text>
          </Card>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Card containerStyle={styles.cardContainer}>
            <Icon
              name='car-back'
              type='material-community'
              size={50}
              iconStyle={{marginVertical: 10}}
              onPress={() => {navigation.navigate('atenderViajes')}}
            />
            <Divider/>
            <Text style={styles.cardText}>Viajes por Atender</Text>
          </Card>
          <Card containerStyle={styles.cardContainer}>
            <Icon
              name='car-multiple'
              type='material-community'
              size={50}
              iconStyle={{marginVertical: 10}}
              onPress={() => {navigation.navigate('historialViajes')}}
            />
            <Divider/>
            <Text style={styles.cardText}>Historial de viajes</Text>
          </Card>
        </View>
        <View style={{flexDirection: 'row'}}>
        <Card containerStyle={styles.cardContainer}>
            <Icon
              name='car-side'
              type='material-community'
              alignSelf='center'
              size={50}
              iconStyle={{marginVertical: 10}}
              onPress={() => {navigation.navigate('rechazadosViajes')}}
            />
            <Divider/>
            <Text style={styles.cardText}>Viajes rechazados</Text>
          </Card>
          <Card containerStyle={styles.cardContainer}>
            <Icon
              name='report'
              type='material'
              size={50}
              iconStyle={styles.icon}
              onPress={() => {navigation.navigate('sancionesViajes')}}
            />
            <Divider/>
            <Text style={styles.cardText}>    Sanciones   </Text>
          </Card>
        </View>
      </View>
    );
};

export default ViajesScreen;

const styles = StyleSheet.create({
  cardText: {
    color:"#777777",
    textAlign: 'center',
    alignItems: 'center',
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