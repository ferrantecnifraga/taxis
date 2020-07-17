import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, ProgressBarAndroid,
ActivityIndicator, FlatList } from 'react-native';
import { Card, Icon } from 'react-native-elements';

const HomeScreen = ({navigation}) => {

  

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
          <Card 
            title='Total ganado esta semana'
            titleStyle={{
              fontSize: 15,
              textAlign: 'left',
              color: '#66bb6a'
            }}
            containerStyle={{
              borderLeftColor: '#66bb6a',
              borderLeftWidth: 3
            }}>
              <View style={{display: "flex",flexDirection: "row"}}>
      
                <Text style={{fontSize: 25}} >215,000</Text>
                <View style={{flexGrow: 1}} />
                <Icon name="euro" type='font-awesome' color="#9e9e9e" size= {25} /> 
              
              </View>
          </Card>
          <Card 
            title='Viajes programados'
            titleStyle={{
              fontSize: 15,
              textAlign: 'left',
              color: '#00bcd4'
            }}
            containerStyle={{
              borderLeftColor: '#00bcd4',
              borderLeftWidth: 3
            }}>
              <View style={{display: "flex",flexDirection: "row"}}>
      
              <Text style={{fontSize: 25}} >13</Text>
              <View style={{flexGrow: 1}} />
                <ProgressBarAndroid
                  styleAttr="Horizontal"
                  indeterminate={false}
                  progress={0.9}
                  color='#00bcd4'
                  style={{
                    width: 150
                  }}
                /> 
                <View style={{flexGrow: 1}} />
                <Icon name="calendar" type='font-awesome' color="#9e9e9e" size= {25} /> 
              
              </View>
          </Card>
          <Card 
            title='Quejas sin atender'
            titleStyle={{
              fontSize: 15,
              textAlign: 'left',
              color: '#e53935'
            }}
            containerStyle={{
              borderLeftColor: '#e53935',
              borderLeftWidth: 3
            }}>
              <View style={{display: "flex",flexDirection: "row"}}>
      
                <Text style={{fontSize: 25}} >2</Text>
                <View style={{flexGrow: 1}} />
                <Icon name="exclamation" type='font-awesome' color="#9e9e9e" size= {25} /> 
              
              </View>
          </Card>

       </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});