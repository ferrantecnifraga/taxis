import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {Card,Icon} from 'react-native-elements';

const PerfilScreen = ({navigation}) => {
    return (
      <View>
        <Card 
            title='Viajes esta semana'
            titleStyle={{
              fontSize: 15,
              textAlign: 'left',
              color: '#1976d2'
            }}
            containerStyle={{
              borderLeftColor: '#1976d2',
              borderLeftWidth: 3
            }}>
              <View style={{display: "flex",flexDirection: "row"}}>

                <Text style={{fontSize: 25}} >27</Text>
                <View style={{flexGrow: 1}} />
                <Icon name="car" type='material-community' color="#9e9e9e" size= {25} /> 
              
              </View>
          </Card>
        
      </View>
    );
};

export default PerfilScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});