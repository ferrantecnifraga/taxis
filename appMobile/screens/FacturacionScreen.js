import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Divider, Icon, Button } from 'react-native-elements';

const FacturacionScreen = () => {
  return (
    <View>
      <View style= {styles.row}>
        <Card containerStyle={styles.cardContainer}>
          <Icon
            name='file-check'
            type='material-community'
            alignSelf='central'
            size={50}
            iconStyle={{marginVertical: 10}}
          />
          <Divider/>
          <Text style={styles.cardText}>Total facturado</Text>
        </Card>
        <Card containerStyle={styles.cardContainer}>
          <Icon
            name='file-multiple'
            type='material-community'
            alignSelf='central'
            size={50}
            iconStyle={{marginVertical: 10}}
          />
          <Divider/>
          <Text style={styles.cardText}>Ver mis facturas</Text>
        </Card>
      </View>
      <View style= {styles.row}>
        <Card containerStyle={styles.cardContainer}>
          <Icon
            name='file-undo'
            type='material-community'
            alignSelf='central'
            size={50}
            iconStyle={{marginVertical: 10}}
          />
          <Divider/>
          <Text style={styles.cardText}>Últimas facturas</Text>
        </Card>
        <Card containerStyle={styles.cardContainer}>
          <Icon
            name='file-plus'
            type='material-community'
            alignSelf='central'
            size={50}
            iconStyle={{marginVertical: 10}}
          />
          <Divider/>
          <Text style={styles.cardText}>Agregar facturas</Text>
        </Card>
      </View>

      <Button
        icon={
          <Icon
            name="play-circle"
            size={30}
            type='material-community'
            color="white"
            iconStyle={{marginLeft: 10}}
          />
        }
        title="¿Como se preparan las facturas"
        buttonStyle={{width: '70%', alignSelf: 'center', marginTop: 30, backgroundColor: '#009387'}}
      />
    </View>
  );
};

export default FacturacionScreen;

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