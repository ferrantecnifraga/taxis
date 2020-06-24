import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MensajesScreen = () => {
    return (
      <View style={styles.container}>
        <Text>MensajesScreen</Text>
        
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