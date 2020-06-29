import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Card, ListItem } from 'react-native-elements';

const users = [
  {
     name: 'avatar1',
     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
  {
      name: 'avatar2'
  }
 ]

const MensajesScreen = () => {
    return (
      <View>
        <Card containerStyle={{padding: 0}} >
        {
          users.map((u, i) => {
            return (
              <ListItem
                key={i}
                roundAvatar
                title={u.name}
                avatar={{uri:u.avatar}}
              />
            );
          })
        }
        </Card> 
      </View>
    );
};

export default MensajesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});