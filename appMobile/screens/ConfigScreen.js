import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ConfigScreen = () => {
    return (
      <View style={styles.container}>
        <Text>ConfigScreen</Text>
        
      </View>
    );
};

export default ConfigScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});