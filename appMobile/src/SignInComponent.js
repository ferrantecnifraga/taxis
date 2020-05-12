import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome"

export default class SignInComponent extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text_header}>¡Bienvenido Usuario!</Text>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.text_footer}> Correo Electronico</Text>
                    <View style={styles.action}>
                        <FontAwesome 
                            name="user-o"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput 
                            placeholder="Tu correo electronico"
                            style={styles.textInput}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#05375a'
    },
    header: {
        flex:1,
        justifyContent:'flex-end',
        paddingHorizontal:20,
        paddingBottom:50
    },
    footer: {
        flex:3,
        backgroundColor: 'white',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:20,
        paddingVertical:30
    },
    text_header: {
        color: 'white',
        fontWeight:'bold',
        fontSize:30
    },
    text_footer: {
        color: '#05375a',
        fontSize:18 
    },
    action: {
        flexDirection: 'row',
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor: '#f2f2f2',
        paddingBottom:5
    },
    textInput: {
        flex:1,
        paddingLeft:10,
        color:'#05375a'
    }
});