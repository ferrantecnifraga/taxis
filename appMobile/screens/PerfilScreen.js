import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, ListItem, Avatar} from 'react-native-elements';

const PerfilScreen = ({navigation}) => {
  const list = [
    {
       name: 'Bryan Occonner',
       subtitle: 'Quisiera cancelar mi viaje'
    },
    {
        name: 'Will Squarepants',
        subtitle: 'quiero hacer un cambio en la agenda'
    },
   ]
    return (
      <View>
        <Card 
        containerStyle={{alignItems:'center'}}
        > 
              <Avatar
                size='xlarge'
                
                rounded
                source={{
                  uri:
                    'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                }}
              />
           
        </Card>
        <View style={{marginTop: 20 }} >
              {
                list.map((l, i) => (
                  <ListItem
                    key={i}
                    title={l.name}
                    titleStyle= {{ flexDirection:'row', flex: 1 }}
                    subtitleStyle= {{textAlign: 'right' , flexDirection:'row', flex: 1 }}
                    subtitle={l.subtitle}
                    bottomDivider
                  />
                ))
              }
            </View>
        
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
  textCard :{
    fontSize: 20,
    marginTop: 13,
    flex: 1,
    flexDirection: 'row'
  }

});