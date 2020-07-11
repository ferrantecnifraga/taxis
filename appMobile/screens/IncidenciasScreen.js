import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const IncidenciasScreen = () => {
    return (
      <View style={styles.container}>
        <Text>IncidenciasScreen</Text>
        
      </View>
    );
};

export default IncidenciasScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});