import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  Avatar,
  Title
  
} from 'react-native-paper';

import { Card, Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PerfilScreen = () => {
  return (
    <View>

      <Card style={styles.userInfoSection}>
        
          <Avatar.Image
            style={{alignSelf: 'center'}}
            source={{
              uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
            }}
            size={100}
          />
      
      <View style={styles.userInfoSection}>
        <View style= {styles.row} >
          <Text style={styles.infoText}>Nombre: </Text>
          <Text style={styles.dataText}>Victor</Text>
        </View>
        <Divider style={{height: 2}} />
        <View style= {styles.row}>
          <Text style={styles.infoText}>Primer Apellido: </Text>
          <Text style={styles.dataText}>Pedraza</Text>          
        </View>
        <Divider style={{height: 2}}  />
        <View style= {styles.row}>
          <Text style={styles.infoText}>Segundo Apellido: </Text>
          <Text style={styles.dataText}>Moreno</Text>
        </View>
        <Divider style={{height: 2}}  />
        <View style= {styles.row}>
          <Text style={styles.infoText}>Municipio </Text>
          <Text style={styles.dataText}>Lleida</Text>
        </View>
        <Divider style={{height: 2}}  />
        <View style= {styles.row}>
          <Text style={styles.infoText}>Vehiculo</Text>
          <Text style={styles.dataText}>123 - CAT</Text>
        </View>
        <Divider style={{height: 2}}  />
        <View style= {styles.row}>
          <Text style={styles.infoText}>Telf</Text>
          <Text style={styles.dataText}>55-2345-2344</Text>
        </View>
        <Divider style={{height: 2}}  />
        <View style= {styles.row}>
          <Text style={styles.infoText}>Fecha de registro</Text>
          <Text style={styles.dataText}>09/07/2020</Text>
        </View>
        <Divider/>
        <View style= {styles.row}>
          <Text style={styles.infoText}>Estatus</Text>
          <Text style={styles.dataText}>Desconectado</Text>
        </View>
        <Divider style={{height: 2}}  />
      </View>
      </Card>
    </View>
  );
};

export default PerfilScreen;

const styles = StyleSheet.create({
  
  userInfoSection: {
    paddingHorizontal: 25,
    marginBottom: 25,
    marginTop:25
  },
  row: {
    flex:1,
    flexDirection: 'row',
    marginTop: 25,
  },
  
  infoText: {
    color:"#777777",
    textAlign: 'left',
    fontSize: 15,
    flex:1

  },
  dataText: {
    color:"#212121", 
    textAlign: 'right',
    marginRight: 10, 
    fontSize: 20,
    flex:1
  },

});