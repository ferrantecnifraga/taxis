// @ts-ignore
import React, {useState, useEffect} from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
// @ts-ignore
} from "react-native";
// @ts-ignore
import FontAwesome from "react-native-vector-icons/FontAwesome";
// @ts-ignore
import Feather from "react-native-vector-icons/Feather";
// @ts-ignore
import { LinearGradient } from 'expo-linear-gradient';
// @ts-ignore
import * as Animatable from "react-native-animatable";




export const SignInComponent = (props) => {
    
    // @ts-ignore
    /* constructor(props){
        super(props);
        this.state={
            check_textInputChange: false,
            password:'',
            secureTextEntry: true
        }
    } */
    const [check_textInputChange, setCheck_textInputChange] = useState(false)
    const [password, setPassword] = useState("")
    const [secureTextEntry, setSecureTextEntry] = useState(true)


    // @ts-ignore
    const textInputChange = (value) => {
        if(value.lenght!==0){
            // @ts-ignore
            setCheck_textInputChange( () => !check_textInputChange)
        }
        /* else{
            // @ts-ignore
            this.setState({
                check_textInputChange: false
            });
        } */
    }

    
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text_header}>¡Bienvenido Usuario!</Text>
                </View>
                <Animatable.View 
                animation="fadeInUpBig"
                style={styles.footer}>
                    <Text style={styles.text_footer}> Correo Electronico</Text>
                    <View style={styles.action}>
                        <FontAwesome 
                            name="user-o"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput 
                            placeholder="Tu correo electronico"
                            // @ts-ignore
                            onChangeText={(text)=>textInputChange(text)}
                            style={styles.textInput}
                        />
                        {check_textInputChange ?
                        <Animatable.View 
                        animation="bounceIn" >
                            <Feather 
                                name="check-circle"
                                color="green"
                                size={20}
                            />
                        </Animatable.View>
                        :null}
                    </View>

                    <Text style={[styles.text_footer, {
                        marginTop:35
                    }]}> Contraseña </Text>
                    <View style={styles.action}>
                        <FontAwesome 
                            name="lock"
                            color="#05375a"
                            size={20}
                        />
                        {secureTextEntry ?
                        <TextInput 
                            placeholder="Tu contraseña"
                            secureTextEntry={true}
                            style={styles.textInput}
                            value={password}
                            // @ts-ignore
                            onChangeText={(text)=> setPassword (text) }
                        />
                        :
                        <TextInput 
                            placeholder="Tu contraseña"
                            style={styles.textInput}
                            value={password}
                            // @ts-ignore
                            onChangeText={(text)=> setPassword( text )}
                        />
                        }
                        <TouchableOpacity
                        onPress={()=>setSecureTextEntry(() => !secureTextEntry)}>
                            {secureTextEntry ?    
                            <Feather 
                                name="eye-off"
                                color="green"
                                size={20}
                            />
                            :
                            <Feather 
                                name="eye"
                                color="gray"
                                size={20}
                            />
                            }
                        </TouchableOpacity>
                    </View>
                    <Text style={{color:'#009bd1', marginTop:15}}>Olvide mi contraseña</Text>
                    <View style={styles.button}>
                        <TouchableOpacity
                        // @ts-ignore
                            onPress={()=>props.navigation.navigate("HomeScreen")}
                            style={[styles.signIn,{
                                borderColor:'#263238',
                                backgroundColor:'#263238',
                                borderWidth:1,
                                marginTop:15
                                }]}>
                                <Text style={[styles.textSign,{
                                    color:'#eceff1'
                                }]}>Entrar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                        // @ts-ignore
                            onPress={()=>props.navigation.navigate("HomeScreen")}
                            style={[styles.signIn,{
                                borderColor:'#4dc2f8',
                                borderWidth:1,
                                marginTop:15
                                }]}>
                                <Text style={[styles.textSign,{
                                    color:'#4dc2f8'
                                }]}>Registrate</Text>
                        </TouchableOpacity>
                    </View>
                </Animatable.View >
            </View>
        )
    }


var styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#393E46'
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
    },
    button: {
        alignItems: 'center',
        marginTop:50 
    },
    signIn: {
        width:'100%',
        height:50,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius:10
    },
    textSign: {
        fontSize:18,
        fontWeight:'bold'
    }

});