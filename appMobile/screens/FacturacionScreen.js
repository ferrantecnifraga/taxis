import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Divider, Icon, Button } from 'react-native-elements';

const FacturacionScreen = ({navigation}) => {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Card containerStyle={styles.cardContainer}>
          <Icon
            name='file-check'
            type='material-community'
            alignSelf='center'
            size={50}
            iconStyle={{marginVertical: 10}}
            onPress={() => {navigation.navigate('totalFacturas')}}
          />
          <Divider/>
          <Text style={styles.cardText}>Total facturado por mes</Text>
        </Card>
        <Card containerStyle={styles.cardContainer}>
          <Icon
            name='file-multiple'
            type='material-community'
            alignSelf='center'
            size={50}
            iconStyle={{marginVertical: 10}}
            onPress={() => {navigation.navigate('verFacturas')}}
          />
          <Divider/>
          <Text style={styles.cardText}>Mis facturas</Text>
        </Card>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Card containerStyle={styles.cardContainer}>
          <Icon
            name='file-undo'
            type='material-community'
            alignSelf='center'
            size={50}
            iconStyle={{marginVertical: 10}}
            onPress={() => {navigation.navigate('ultimasFacturas')}}
          />
          <Divider/>
          <Text style={styles.cardText}>Última facturas</Text>
        </Card>
        <Card containerStyle={styles.cardContainer}>
          <Icon
            name='file-plus'
            type='material-community'
            alignSelf='center'
            size={50}
            iconStyle={{marginVertical: 10}}
            onPress={() => {navigation.navigate('pedirFacturas')}}
          />
          <Divider/>
          <Text style={styles.cardText}>Pedir factura</Text>
        </Card>
      </View>

      <Button
        icon={
          <Icon
            name="play-circle"
            size={30}
            type='material-community'
            color="white"
          />
        }
        title="¿Como se preparan las facturas?"
        buttonStyle={{width: '85%', alignSelf: 'center', marginTop: 30, backgroundColor: '#009387'}}
      />
    </View>
  );
};

export default FacturacionScreen;

const styles = StyleSheet.create({
cardText: {
  color:"#777777",
  textAlign: 'center',
  fontSize: 20,
  flex:1,
  marginTop:10
},
cardContainer:{
  width: '40%', 
  marginHorizontal:'5%',
  height: 160,
  flexDirection:'row',
},
});