import React, {useState} from 'react';
import { Text, View, Button } from 'react-native';
import {Login} from './components/Login'
export default function App() {
  const [nombre, setnombre] = useState("")

  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Button
        title="Hola"
      />
      <Login
        name="Jimmy"
      />
    </View>
  );
}