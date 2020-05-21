import React, {useState, useEffect} from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from "react-native-animatable";

export const SignUpComponent = (props) => {
    
   /*  constructor(props){
        super(props);
        this.state={
            check_textInputChange: false,
            password:'',
            password_confirm:'',
            secureTextEntry: true,
            secureTextEntry_confirm: true
        }
    } */
    const [check_textInputChange, setCheck_textInputChange] = useState(false)
    const [password, setPassword] = setState("")
    const [password_confirm, setPassword_confirm] = setState("")
    const [secureTextEntry, setSecureTextEntry] = useState(true)
    const [secureTextEntry_confirm, setSecureTextEntry_confirm] = useState(true)


    const textInputChange = (value) => {
        if(value.lenght!==0){
            setCheck_textInputChange( () => !check_textInputChange)
        }
        /* else{
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
                            onChangeText={(text)=>setPassword( (text) => {
                                password = text
                            })}
                        />
                        :
                        <TextInput 
                            placeholder="Tu contraseña"
                            style={styles.textInput}
                            value={password}
                            onChangeText={(text)=>setPassword( (text) => {
                                password = text
                            })}
                        />
                        }
                        <TouchableOpacity
                        onPress={()=>setSecureTextEntry( () => !secureTextEntry)}>
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
                    <Text style={[styles.text_footer, {
                        marginTop:35
                    }]}>Confirma tu contraseña </Text>
                    <View style={styles.action}>
                        <FontAwesome 
                            name="lock"
                            color="#05375a"
                            size={20}
                        />
                        {secureTextEntry_confirm ?
                        <TextInput 
                            placeholder="Confirma tu contraseña"
                            secureTextEntry={true}
                            style={styles.textInput}
                            value={password_confirm}
                            onChangeText={(text)=>setPassword_confirm( (text) => {
                                password_confirm = text
                            })}
                        />
                        :
                        <TextInput 
                            placeholder="Confirma tu contraseña"
                            style={styles.textInput}
                            value={password_confirm}
                            onChangeText={(text)=>setPassword_confirm( (text) => {
                                password_confirm = text
                            })}
                        />}
                        <TouchableOpacity
                        onPress={()=>setSecureTextEntry_confirm( ()=> !secureTextEntry_confirm)}>
                            {secureTextEntry_confirm ?    
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
                    <View style={styles.textPrivate}>
                        <Text style={styles.color_textPrivate}>
                            Al registrarme estoy deacuerdo con los
                        </Text>
                        <Text style={[styles.color_textPrivate,{
                            fontWeight:'bold'
                        }]}>
                            {""}
                            "Terminos del servicio 
                        </Text>
                        <Text style={styles.color_textPrivate}>
                            "
                             Y la
                            "
                        </Text>
                        <Text style={[styles.color_textPrivate,{
                            fontWeight:'bold'
                        }]}>
                            {""}
                             Politica de privacidad"
                        </Text>
                    </View>
                    <View style={styles.button}>
                        <LinearGradient 
                            colors={['#393E46', '#393E47',]}
                            style={styles.signIn}>
                                <Text style={[styles.textSign, {
                                    color:'white'
                                }]}>Registrarse</Text>
                        </LinearGradient>
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
        marginTop:10 
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
    },
    textPrivate:{
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop:20
    },
    color_textPrivate:{
        color:'gray'
    }

});