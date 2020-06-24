import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const NotificacionesScreen = () => {
    return (
      <View style={styles.container}>
        <Text>NotificacionesScreen</Text>
        
      </View>
    );
};

export default NotificacionesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});