import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import * as Animatable from 'react-native-animatable'
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class SignUpScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.header}>
                    <Animatable.Image
                        animation="bounceIn"
                        duration={1500}
                        source={require('./asset/logo.png')}
                        style={styles.logo}
                        resizeMode={'strech'}
                    />

                </View>
                <Animatable.View 
                style={styles.footer}
                animation="fadeInUpBig"
                >
                    <Text style={styles.title}> Ya  </Text>
                    <Text style={styles.text}> Es Toda </Text>
                    <View style={styles.button}>
                        <TouchableOpacity
                        onPress={ () => this.props.navigation.navigate("SignInScreen")}>
                            <LinearGradient colors={['#4c669f', '#3b5998',]}
                            style={styles.signIn}>
                                <Text style={styles.textSign}>we </Text>
                                <MaterialIcons 
                                    name='navigate-next' 
                                    color="white"
                                    size={20}
                                />
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </View>
        )
    }
}
const {height} = Dimensions.get("screen");
const height_logo = height * 0.7 * 0.4;

var styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#05375a'
    },
    header:{
        flex:2,
        justifyContent:'center',
        alignItems:'center'
    },
    footer: {
        flex:1,
        backgroundColor:'white',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        paddingVertical:50,
        paddingHorizontal:30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontWeight: 'bold',
        fontSize: 30
    },
    text: {
        color: 'gray',
        marginTop:5 
    },
    button: {
        alignItems:'flex-end',
        marginTop:30
    },
    signIn: {
        width:150,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
    
})