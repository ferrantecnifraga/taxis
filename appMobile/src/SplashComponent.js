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

export const SplashComponent = (props) => {
    
        return(
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.header}>
                    <Animatable.Image
                        animation="bounceIn"
                        duration={1500}
                        source={require('../assets/logolleida2.png')}
                        style={styles.logo}
                        resizeMode={'stretch'}
                    />

                </View>
                <Animatable.View 
                style={styles.footer}
                animation="fadeInUpBig"
                >
                    <Text style={styles.title}> Taxis Lleida V3 </Text>
                    <Text style={styles.text}> Viatge Segur</Text>
                    <View style={styles.button}>
                        <TouchableOpacity
                        onPress={ () => props.navigation.navigate("SignInScreen")}>
                            <LinearGradient colors={['#393E46', '#393E47',]}
                            style={styles.signIn}>
                                <Text style={styles.textSign}> Inicia Sesión </Text>
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
const {height} = Dimensions.get("screen");
const height_logo = height * 0.7 * 0.4;

var styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#393E46'
    },
    header:{
        flex:2,
        justifyContent:'center',
        alignItems:'center'
    },
    footer: {
        flex:1,
        backgroundColor:'#dddddd',
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
        color: '#393E46',
        fontWeight: 'bold',
        fontSize: 30
    },
    text: {
        color: 'gray',
        marginTop:5,
        fontSize: 20,
        marginLeft: 9
    },
    button: {
        alignItems:'flex-end',
        marginTop:60,
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