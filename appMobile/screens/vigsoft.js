import React from "react";
import { Text, ScrollView, StyleSheet,Image, TouchableOpacity, View } from "react-native";
import { Card, Button } from "react-native-elements";
import { Linking } from 'react-native'

const vigsoft = ({navigation}) => {


    const dialCall = (number) => {
        let phoneNumber = '';
        if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
        else {phoneNumber = `telprompt:${number}`; }
        Linking.openURL(phoneNumber);
     };

      return (
        <ScrollView>
          <Card>
            <Image
                source={  require("../assets/vigLogo.png")}
                style={{width: 200, height: 100, alignSelf: 'center', marginTop: 30, borderRadius: 10 }}
            />
            <Button styles={styles.title} buttonStyle={styles.btnTitle} onPress={() => Linking.openURL('mailto:ferrantclk@gmail.com?subject=SendMail&body=Description') }
              title="Envíanos un correo:  Ferran Prieto - CEO" />
            <Button styles={styles.title} buttonStyle={styles.btnTitle} onPress={() => Linking.openURL('mailto:ferrantclk@gmail.com?subject=SendMail&body=Description') }
              title="Envíanos un correo: Jimmy Vasquez - CTO" />
            <TouchableOpacity onPress={()=>{dialCall(+34647738533)}}>
              <View style={styles.Viewbtn}>
                  <Text style={styles.btnText}>Llámanos: +34647738533</Text>
              </View>
            </TouchableOpacity>
            <Button buttonStyle={{width: '70%', alignSelf: 'center', marginTop: 5, marginBottom: 5, backgroundColor: '#009387'}} onPress={() => Linking.openURL('vigsoft.tech') }
              title="Checa nuestra web" />
            <Button buttonStyle={{width: '70%', alignSelf: 'center', marginTop: 5, marginBottom: 5, backgroundColor: '#009387'}} onPress={() => Linking.openURL('https://www.facebook.com/Vigsoft/') }
              title="Vísitanos en Facebook" />
          </Card>
        </ScrollView>
      );
    };

    export default vigsoft;


    const styles = StyleSheet.create({
      title:{
          textAlign:'center',
          fontSize: 20,
          marginTop: 10
      },
      btnTitle: {
          width: '100%',
          marginTop: 20,
          alignSelf: 'center'
      },
      Viewbtn: { 
          width: 150, 
          height: 40, 
          marginVertical:10,
          backgroundColor: '#f9a825',  
          borderRadius: 5,
          padding:1,
          alignSelf: 'center',
        },
        btnText: { 
          textAlign: 'center', 
          color: '#fff' 
        },
  });