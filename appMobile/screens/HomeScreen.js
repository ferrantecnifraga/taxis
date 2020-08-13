import React, {useEffect} from 'react';
import { View, Text, StyleSheet, ProgressBarAndroid, ScrollView,
ActivityIndicator, FlatList } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { FAB } from 'react-native-paper'; 



const HomeScreen = ({navigation}) => {



    return (

      <View>
      <ScrollView>
        <Card 
            title='Viajes realizados este mes'
            titleStyle={{
              fontSize: 15,
              textAlign: 'left',
              color: '#1976d2'
            }}
            containerStyle={{
              borderLeftColor: '#1976d2',
              borderLeftWidth: 3,
              height: 130
            }}>
              <View style={{display: "flex",flexDirection: "row"}}>

                <Text style={{fontSize: 25}} >27</Text>
                <View style={{flexGrow: 1}} />
                <Icon name="car" type='material-community' color="#9e9e9e" size= {25} /> 
              
              </View>
          </Card>
          <Card 
            title='Total ganado por mes'
            titleStyle={{
              fontSize: 15,
              textAlign: 'left',
              color: '#66bb6a'
            }}
            containerStyle={{
              borderLeftColor: '#66bb6a',
              borderLeftWidth: 3,
              height: 130
              
            }}>
              <View style={{display: "flex",flexDirection: "row"}}>
      
                <Text style={{fontSize: 25}} >215,000</Text>
                <View style={{flexGrow: 1}} />
                <Icon name="euro" type='font-awesome' color="#9e9e9e" size= {25} /> 
              
              </View>
          </Card>
          <Card 
            title='Viajes programados por mes'
            titleStyle={{
              fontSize: 15,
              textAlign: 'left',
              color: '#00bcd4'
            }}
            containerStyle={{
              borderLeftColor: '#00bcd4',
              borderLeftWidth: 3,
              height: 130
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
            title='Sanciones por mes'
            titleStyle={{
              fontSize: 15,
              textAlign: 'left',
              color: '#e53935'
            }}
            containerStyle={{
              borderLeftColor: '#e53935',
              borderLeftWidth: 3,
              height: 130
            }}>
              <View style={{display: "flex",flexDirection: "row"}}>
      
                <Text style={{fontSize: 25}} >2</Text>
                <View style={{flexGrow: 1}} />
                <Icon name="exclamation" type='font-awesome' color="#9e9e9e" size= {25} /> 
              
              </View>
          </Card>
          
          </ScrollView>
          <View>
            <FAB
              style={styles.fab}
              large
              icon="alert-octagon"
              onPress={() => {navigation.navigate('incidenciasFormulario')}}
            />

          </View>

       </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 0,
  },
});