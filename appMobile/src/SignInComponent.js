import React, {useState, useCallback} from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert
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

import { AuthContext } from '../src/context';
import AsyncStorage from "@react-native-community/async-storage";


export const SignInComponent = ({navigation}) => {
    
    const [data, setData] = useState({
        email: '',
        password: '',
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const [respuesta, setRespuesta] = useState()

    // const [check_textInputChange, setCheck_textInputChange] = useState(false)
    // const [password, setPassword] = useState("")
    // const [email, setEmail] = useState("")
    // const [secureTextEntry, setSecureTextEntry] = useState(true)
    // const [data, setData] = useState([])
    
    const { signIn } = React.useContext(AuthContext);



    // const loginUser = () => {

    //     fetch('https://taxis-lleida.herokuapp.com/api/auth/login', {
    //         method: 'POST',
    //         headers: {
    //           Accept: 'application/json',
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             email : email ,
    //             password : password
    //         })
    //       } )
    //       .then((response) => response.json())
    //       .then((responseJson) => {
    //         console.log(responseJson);
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //     });
          
    // }

    const handlePasswordChange = (val) => {
        if( val.trim().length >= 6 ) {
        setData({
            ...data,
            password: val,
            isValidPassword: true
        });
    } else {
        setData({
            ...data,
            password: val,
            isValidPassword: false
        });
    }
 }
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleValidUser = (val) => {
        let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if( reg.test(val) === false ) {
            setData({
                ...data,
                email: val,
                isValidUser: false
            });
        } else {
            setData({
                ...data,
                email: val,
                isValidUser: true
            });
        }
    }

    const loginHandle = async(email, password) => {

        if( data.password == "" || data.email =="" ){
            Alert.alert(
                "Error",
                "Los campos están vacios",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    
                  },
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: true }
              );
        }
       

            try {

                if ( data.isValidUser === true && data.isValidPassword === true ) {
                    console.log(data.email)
                    console.log(data.password)
                    let response = await fetch('https://taxis-lleida.herokuapp.com/api/auth/login', {
                        method: 'POST',
                        headers: {
                          'Accept': 'application/json',
                           
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email : data.email ,
                            password : data.password
                        })
                      } )
                      
                      let dataServer = await response.json();
                      setRespuesta(dataServer)
                      console.log(dataServer)
                    
                    console.log(dataServer.message)
                    if(String(dataServer.message) == "Success!"){
                        try {
                            let userToken = dataServer.access_token;
                            
                            await AsyncStorage.setItem('userToken', userToken)
                            await AsyncStorage.setItem('email', email)
                            signIn(data.email, data.password, userToken)
                        } catch(e){
                            console.log(e);
                        }
                        console.log("Login jalando")
                    }else if(String(dataServer.message) == "Email no encontrado o Contraseña incorrecta"){
                        Alert.alert(
                            "Error",
                            dataServer.message,
                            [
                              {
                                text: "Cancel",
                                onPress: () => console.log("Cancel Pressed"),
                                
                              },
                              { text: "OK", onPress: () => console.log("OK Pressed") }
                            ],
                            { cancelable: true }
                          );
                    } 
        
        
        
                }else {
                    Alert.alert(
                        "Error",
                        "Los campos no son validos",
                        [
                          {
                            text: "Cancel",
                            onPress: () => console.log("Cancel Pressed"),
                            
                          },
                          { text: "OK", onPress: () => console.log("OK Pressed") }
                        ],
                        { cancelable: true }
                      );
                }

                
              
              //AsynStorage
              

             }  
             
            
        catch (error) {
            console.error(error);
        } 

        
         

        // const foundUser = respuesta.filter( item => {
        //     return  email == item.email && password == item.password;
        // });
        
        
    }



        
        return ( 
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text_header}>¡Bienvenido Taxista!</Text>
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
                            placeholder="Email"
                            style={styles.textInput}
                            autoCapitalize='none'
                            // onChange={e => setEmail(e.target.value)}
                            // onChangeText={(val)=>textInputChange(val)}
                            onChangeText={(e)=>handleValidUser(e)}
                            required
                        />
                        {data.check_textInputChange ?
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
                    
                    { data.isValidUser ? null :
                    <Animatable.View animation="fadeInLeft" duration={500} >
                    <Text style={styles.errorMsg}>Email incorrecto</Text>
                    </Animatable.View>
                    }

                    <Text style={[styles.text_footer, {
                        marginTop:35
                    }]}> Contraseña </Text>
                    <View style={styles.action}>
                        <FontAwesome 
                            name="lock"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput 
                            placeholder="Tu contraseña"
                            secureTextEntry={data.secureTextEntry ? true : false }
                            style={styles.textInput}
                            autoCapitalize='none'
                            // onChange={e => setPassword(e.target.value)}
                            onChangeText={(val)=> handlePasswordChange (val) }
                        />                        
                        <TouchableOpacity
                        onPress={updateSecureTextEntry}
                        >
                            {data.secureTextEntry ?    
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

                    { data.isValidPassword ? null : 
                        <Animatable.View animation="fadeInLeft" duration={500} >
                        <Text style={styles.errorMsg}>Contraseña muy corta</Text>
                        </Animatable.View>
                    }
                    

                    <TouchableOpacity>
                        <Text style={{color:'#009bd1', marginTop:15}}>Olvide mi contraseña</Text>
                    </TouchableOpacity>
                    <View style={styles.button}>
                        <TouchableOpacity
                            // onClick={loginUser}
                            onPress={() => {loginHandle( data.email, data.password )} }
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
                            onPress={()=>navigation.navigate("SignUpScreen")}
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
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },

});