import React from 'react';
import { View, StyleSheet } from 'react-native';
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

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const BadgedIcon = withBadge()(Icon)

export function DrawerContent(props) {
    return( 
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props} >
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image
                                source={{
                                    uri:'https://www.w3schools.com/w3images/avatar2.png'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15,
                            flexDirection:'column'}}>
                                <Title style={styles.title}>Victor Pedraza
                                </Title>
                                <Caption style={styles.caption}>384 CAT
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
                          onPress={() => {props.navigation.navigate('Viajes')}}
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
                          onPress={() => {props.navigation.navigate('Estadisticas')}}
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
                          onPress={() => {props.navigation.navigate('Facturacion')}}
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
                              name="settings"
                              color={color}
                              size={size}
                              />
                          )}
                          label="Configuración"
                          onPress={() => {props.navigation.navigate('Config')}}
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
                    onPress={() => {}}
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