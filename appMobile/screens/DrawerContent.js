import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import {  Badge, withBadge } from 'react-native-elements'

import { AuthContext } from '../src/context'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const BadgedIcon = withBadge()(Icon)

export function DrawerContent(props){

const { signOut } = React.useContext(AuthContext); 


const [email, setEmail] = useState("");
const [nombre, setNombre] = useState("Cargando...")
const [numSocio, setNumSocio] = useState("Cargando...")

useEffect(() => {
  const fetchMyAPI = async () => {

    try {     
    let email2 =  await AsyncStorage.getItem('email')
    let password2 = await AsyncStorage.getItem('password')
    let idTaxista2=  await AsyncStorage.getItem('idTaxista')
    console.warn("Idtaxista: "+idTaxista2)
    // let userToken = await AsyncStorage.getItem('userToken')
    //   if(userToken == null || userToken == undefined){
    //     signOut()
    //   }

      let response = await fetch('https://taxis-lleida.herokuapp.com/api/taxistas/profile', {
        method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              email : email2,
              password : password2,
              idTaxista: idTaxista2
          })
        })

      let response2 = await response.json()
      const {message} = response2
         
      //Aqui quiero llamar Id taxista para guardarlo en el async Storage
      const {idTaxista, nombre, numSocio, primerApellido, segundoApellido} = response2.taxista
        console.log(response2)
        console.log(nombre)
        console.log(idTaxista)

          setNombre(""+nombre+" "+primerApellido)
          setNumSocio(numSocio)
          
          //Aqui lo trato de guardar :C
          // let idPrueba = await AsyncStorage.getItem('idTaxista')
          // console.log(idPrueba)
            //  if(idPrueba == null || idPrueba == undefined) {
            // let id =  await AsyncStorage.setItem('idTaxista', String(idTaxista))
            //  }
    } catch (e) {
      // saving error
    }
  }

    fetchMyAPI()
   }, [])



    return( 
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props} >
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Icon
                                style={{alignSelf: 'center', backgroundColor: "#009387"}}
                                icon='taxi'
                                size={50}
                            />
                            <View style={{marginLeft:15,
                            flexDirection:'column'}}>
                                <Title style={styles.title}> {nombre}
                                </Title>
                                <Caption style={styles.caption}> {numSocio}
                                </Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                      <DrawerItem 
                            icon={({color, size}) => (
                              <Icon
                              name="home"
                              color={color}
                              size={size}
                              />
                          )}
                          label="Inicio"
                            onPress={() => {props.navigation.navigate('Home')}}
                      />
                      <DrawerItem 
                            icon={({color, size}) => (
                              <BadgedIcon
                              name="bell"
                              color={color}
                              size={size}
                              />
                          )}
                          label="Notificaciones"
                          onPress={() => {props.navigation.navigate('Notificaciones')}}
                      />
                      <DrawerItem 
                            icon={({color, size}) => (
                              <Icon
                              name="account-outline"
                              color={color}
                              size={size}
                              />
                          )}
                          label="Mi Perfil"
                          onPress={() => {props.navigation.navigate('Perfil')}}
                      />
                      <DrawerItem 
                            icon={({color, size}) => (
                              <Icon
                              name="car-side"
                              color={color}
                              size={size}
                              />
                          )}
                          label="Mis viajes"
                          onPress={() => {props.navigation.navigate('Viajes', {screen: 'Viajes'})}}
                      />
                      <DrawerItem 
                            icon={({color, size}) => (
                              <Icon
                              name="trending-up"
                              color={color}
                              size={size}
                              />
                          )}
                          label="Estadísticas"
                          // onPress={() => {props.navigation.navigate('Estadisticas')}}
                          onPress={() => {
                            Alert.alert(
                              "Estadísticas",
                              "Las estadisticas estaran disponibles proximamente",
                              [
                                {
                                  text: "Ok",
                                  onPress: () => console.log("Cancel Pressed")
                                }                                  
                            
                              ],
                              { cancelable: true }
                            );
                          
                          }}
                      />
                      <DrawerItem 
                            icon={({color, size}) => (
                              <Icon
                              name="alert"
                              color={color}
                              size={size}
                              />
                          )}
                          label="Incidencias"
                          onPress={() => {props.navigation.navigate('Incidencias')}}
                      />
                      <DrawerItem 
                            icon={({color, size}) => (
                              <Icon
                              name="note-outline"
                              color={color}
                              size={size}
                              />
                          )}
                          label="Facturación"
                          // onPress={() => {props.navigation.navigate('Facturacion')}}
                          onPress={() => {
                            Alert.alert(
                              "Facturacion",
                              "La facturacion estara disponible proximamente",
                              [
                                {
                                  text: "Ok",
                                  onPress: () => console.log("Cancel Pressed")
                                }                                  
                            
                              ],
                              { cancelable: true }
                            );
                          }}
                          
                      />
                      <DrawerItem 
                            icon={({color, size}) => (
                              <Icon
                              name="help-box"
                              color={color}
                              size={size}
                              />
                          )}
                          label="Ayuda"
                          onPress={() => {props.navigation.navigate('Ayuda')}}
                      />
                      <DrawerItem 
                            icon={({color, size}) => (
                              <Icon
                              name="hand-left"
                              color={color}
                              size={size}
                              />
                          )}
                          label="Soporte"
                          onPress={() => {props.navigation.navigate('Soporte')}}
                      />
                      
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon
                        name="exit-to-app"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {signOut()}}
                />
            </Drawer.Section>
            
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 2,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: .1,
    },
    bottomDrawerSection: {
        marginBottom: 1,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });