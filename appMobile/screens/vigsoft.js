import React from "react";
import { Text, ScrollView, StyleSheet,Image } from "react-native";
import { Card } from "react-native-elements";

const vigsoft = ({navigation}) => {

      return (
        <ScrollView>
            <Card>
            <Image
                source={  require("../assets/vigLogo.png")}
                style={{width: 200, height: 100, alignSelf: 'center', marginTop: 30 }}
            />
                <Text style={styles.title} > Aqui va el texto</Text>
                <Text style={styles.text} > Aqui va el texto</Text>
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
    text: {
        textAlign: 'auto',
        marginTop: 10
    }
});