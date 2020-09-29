import React, { useState, useEffect } from 'react';
import { StyleSheet,TouchableOpacity, Text, View, Alert,ScrollView,ActivityIndicator  } from "react-native";
import { ListItem } from 'react-native-elements';

import {Card, Divider} from 'react-native-elements'
import { DataTable, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { set } from 'react-native-reanimated';
import moment, {add} from "moment";
import { useNavigation } from '@react-navigation/native';

const ViajesEnRuta = () => { 

  const [viajes, setViajes] = useState({})
  const [current_page2, setCurrent_page2] = useState(1)
  const [total2, setTotal2] = useState(6)
  const [paginacion2, setPaginacion2] = useState("")
  const [loading, setLoading] = useState(true)
  const [estado, setEstado] = useState("Cargando...")

  //HOOKS DE NOTIFICACIONES:
  const [data, setData] = useState([])
  //ENDPOINT DE NOTICIACIONES:
  useEffect(() => {
    const fetchMyAPI = async () => {
      let email2 =  await AsyncStorage.getItem('email')
      let password2 = await AsyncStorage.getItem('password')
      let idTaxista = await AsyncStorage.getItem('idTaxista')
      
        let response = await fetch('https://taxis-lleida.herokuapp.com/api/taxistas/notificaciones', {
          method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email : email2 ,
                password : password2,
                idTaxista: idTaxista
            })
          })
  
        let response2 = await response.json()
        console.warn(response2.notificaciones)
        
          setData(response2.notificaciones)
          setLoading(false)       
         
         
          
       }
  
      fetchMyAPI()
     }, []) 

  
  

    useEffect(() => {
      const fetchMyAPI = async () => {
        
        let email2 = await AsyncStorage.getItem('email')
        let password2 = await AsyncStorage.getItem('password')
        let idTaxista2 = await AsyncStorage.getItem('idTaxista')
        let response = await fetch('https://taxis-lleida.herokuapp.com/api/taxistas/viajesEnRuta', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email2,
            password: password2,
            idTaxista: idTaxista2
          })
        })

        let response2 = await response.json()

        // console.log(idCliente2)
        
        console.warn(response2.viajes)
        console.log(response2.viajes)
        setViajes(response2.viajes)
        console.log("Viajes:" + viajes)
        if (response2.viajes.estatus == "Confirmado") {
          setEstado("Iniciar viaje")
        }else if(response2.viajes.estatus == "En ruta"){
          setEstado("Terminar viaje")
        }else if(response2.viajes.estatus == "Terminado"){
          setEstado("Terminado. ¡Gracias!")
        }
        
        
        
        
        
      }

      fetchMyAPI()
    }, [] )


     //Fetch a la API atender viaje
     const actualizarElViaje = async(idVP) => {
      let email2 = await AsyncStorage.getItem('email')
        let password2 = await AsyncStorage.getItem('password')
        let idTaxista2 = await AsyncStorage.getItem('idTaxista')


      try {
        let response = await fetch('https://taxis-lleida.herokuapp.com/api/taxistas/actualizarViaje', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email2,
            password: password2,
            idTaxista: idTaxista2,
            idVP: idVP,
            estatus: estado
          })
        })

        let response2 = await response.json()
        console.warn(response2)


        Alert.alert(
          "Viajes en ruta",
          String(response2.estatus),
          [
            {
              text: "Ok",
              onPress: () => actualizarEstado(),
              
            }
  
          ],
          { cancelable: true }
        )
      } catch (error) {
        Alert.alert(
          "Viajes en ruta",
          String(error),
          [
            {
              text: "Ok",
              onPress: () => console.warn("OK"),
              
            }
  
          ],
          { cancelable: true }
        )
      }

      
  }


    const boton = (idVP, estatus) => {
    
       return(
         <TouchableOpacity onPress={() => iniciarViaje(idVP) }>
           <View style={styles.btn}>
            <Text style={styles.btnText}>Iniciar viaje</Text>
           </View>
         </TouchableOpacity>
       ) 
     
     
     
      }

      const actualizarEstado = () => {
        if(estado == "Iniciar viaje"){
          setEstado("Terminar viaje")
        }else if(estado == "Terminar viaje"){
          setEstado("Terminado")
        }
      }
    

      const iniciarViaje = (idVP) =>{

        console.log("Jaloo")
        console.warn(estado)
        if(estado == "Iniciar viaje"){
          return(
            Alert.alert(
              "Estatus del viaje",
              "¿Segur@ de iniciar el viaje? Si inicias el viaje antes de la fecha, se te multara. ",
              [
                {
                  text: "Si, iniciar viaje",
                  onPress: () => actualizarElViaje(idVP),
                  
                },
                {
                  text: "No",
                  onPress: () => console.warn("Abortando"),
                  
                }
        
              ],
              { cancelable: true }
            )
            )
        }else if(estado == "Terminar viaje"){
          return(
            Alert.alert(
              "Estatus del viaje",
              "¿Segur@ de terminar el viaje?",
              [
                {
                  text: "Si, terminar viaje",
                  onPress: () => actualizarElViaje(idVP),
                  
                },
                {
                  text: "No",
                  onPress: () => console.warn("Abortando"),
                  
                }
        
              ],
              { cancelable: true }
            )
            )
        }
          
        

       
      }
  

const tableHead = ['Numero del viaje', 'Costo Parcial', 'Nombre', 'Primer Apellido', 'Segundo Apellido', 'Servicio', 'Estatus',
'Paciente 1', 'Paciente 2', 'Fecha Inicio', 'Vehiculo', 'Origen', 'Pasando por', 'Destino', 'Cliente', 'Acciones']

//NUEVO CODIGO A CONTINUACION:

const navigation = useNavigation();

return ( 

  loading ?

  <View style={[styles.loading]}>
  <ActivityIndicator size="large" color="#00ff00" />
  </View>
  :

<View>
  {
    data.map((e, i) => {
      return(
      <ListItem
        key={i}
        leftAvatar={{  source: require("../../../assets/logolleida2.png") }}
        title={e.encabezado}
        titleStyle= {{marginLeft: 15, marginBottom: 10}}
        subtitle= {
          <View>
            <Text style={{color: '#757575', marginLeft: 15,}} >{e.descripcion}</Text>
            <Text style={{color: '#757575', marginLeft: 15, marginTop: 10}} >Recibida el: {moment(e.created_at).format('DD/MM/YYYY HH:mm')}</Text>
            <Text style={{color: '#00796b', marginTop: 7, alignSelf: 'flex-end', fontSize: 15}} > Presiona para atender la notificación  </Text>
          </View>
        }
        bottomDivider
        onPress={() => {navigation.navigate('detallesViaje', {
          encabezado: e.encabezado, 
          descripcion: e.descripcion,
          tipo: e.tipo,
          fecha: moment(e.created_at).format('DD/MM/YYYY HH:mm')
        })}}
        
      />
      )
  }
      )
  }
</View>
)

//ANTIGUO CODIGO COMENTADO:

// if(viajes == null){
//   return(
//     <View style={{flex:1,justifyContent:'center', alignItems:'center', marginTop: 280}}>
//       <Text style={styles.titulo}  >No hay viajes para iniciar por el momento</Text>
//   </View>
//   )
// }else{
//   return(
    
//     <ScrollView>
  
        
//           <Card style={styles.userInfoSection}>
//             <Text style={styles.titulo}  >Datos del viaje</Text>
//             <Divider style={styles.dividerTit}  />
  
//             <Text style={styles.infoText}>Numero de Viaje</Text>
//             <Text style={styles.dataText}>{viajes.idVP}</Text>
//             <Divider/>
//             <Text style={styles.infoText}>Costo Parcial</Text>
//             <Text style={styles.dataText}>{viajes.costoParcial}</Text>
//             <Divider/>
//             <Text style={styles.infoText}>Nombre</Text>
//             <Text style={styles.dataText}>{viajes.nombre}</Text>
//             <Divider/>
//             <Text style={styles.infoText}>Primer Apellido</Text>
//             <Text style={styles.dataText}>{viajes.primerApellido}</Text>
//             <Divider/>
//             <Text style={styles.infoText}>Segundo Apellido</Text>
//             <Text style={styles.dataText}>{viajes.segundoApellido}</Text>
//             <Divider/>
//             <Text style={styles.infoText}>Servicio</Text>
//             <Text style={styles.dataText}>{viajes.servicio}</Text>
//             <Divider/>
//             <Text style={styles.infoText}>Estatus</Text>
//             <Text style={styles.dataText}>{viajes.estatus}</Text>
//             <Divider/>
//             <Text style={styles.infoText}>Nombre del primer Paciente</Text>
//             <Text style={styles.dataText}>{viajes.pacientePrimero}</Text>
//             <Divider/>
//             <Text style={styles.infoText}>Telefono del primer Paciente</Text>
//             <Text style={styles.dataText}>{viajes.telfPrimerPaciente}</Text>
//             <Divider/>
//             <Text style={styles.infoText}>Dirección del primer Paciente</Text>
//             <Text style={styles.dataText}>{viajes.direccionPrimerPaciente}</Text>
//             <Divider/>
//             <Text style={styles.infoText}>Nombre del segundo Paciente</Text>
//             <Text style={styles.dataText}>{viajes.pacienteSegundo}</Text>
//             <Divider/>
//             <Text style={styles.infoText}>Telefono del segundo Paciente</Text>
//             <Text style={styles.dataText}>{viajes.telfSegundoPaciente}</Text>
//             <Divider/>
//             <Text style={styles.infoText}>Direccion del segundo Paciente</Text>
//             <Text style={styles.dataText}>{viajes.direccionSegundoPaciente}</Text>
//             <Divider/>
//             <Text style={styles.infoText}>Fecha de inicio</Text>
//             <Text style={styles.dataText}>{moment(viajes.fechaInicio).format('DD/MM/YYYY HH:mm')}</Text>
//             <Divider/>
//             <Text style={styles.infoText}>Vehiculo</Text>
//             <Text style={styles.dataText}>{viajes.vehiculo}</Text>
//             <Divider/>
//             <Text style={styles.infoText}>Origen</Text>
//             <Text style={styles.dataText}>{viajes.origen}</Text>
//             <Divider/>
//             <Text style={styles.infoText}>Pasando por</Text>
//             <Text style={styles.dataText}>{viajes.pasando_por}</Text>
//             <Divider/>
//             <Text style={styles.infoText}>Destino</Text>
//             <Text style={styles.dataText}>{viajes.destino}</Text>
//             <Divider/>
//             <Text style={styles.infoText}>Dirección de Hospital</Text>
//             <Text style={styles.dataText}>{viajes.direccionHospital}</Text>
//             <Divider/>
//             <Text style={styles.infoText}>Cliente</Text>
//             <Text style={styles.dataText}>{viajes.cliente}</Text>
//             <Divider/>
//             <Button style={styles.btn} mode="contained"  onPress={() => iniciarViaje(viajes.idVP) }>
//               {estado}
//             </Button>
//           </Card>
          
    
//   </ScrollView>
//     )
// }

  
}

export default ViajesEnRuta;

const styles = StyleSheet.create({
  celda:{
    width: 150,
    padding: 5,
    textAlign: 'center'
  },
  container: { 
    marginHorizontal: 10,
    paddingVertical: 30,
  },
  head: { 
    height: 40, 
    backgroundColor: '#bdbdbd',
  },
  text: { 
    margin: 6, 
    textAlign: 'center',
  },
  row: { 
    flexDirection: 'row', 
    backgroundColor: '#eeeeee',
  },
  btn: { 
    width: 200, 
    backgroundColor: '#78B7BB',  
    borderRadius: 5,
    padding:1,
    marginTop: 10,
    alignSelf: 'center',
  },
  btnText: { 
    textAlign: 'center', 
    color: '#fff' 
  },
  infoText: {
    color:"#777777",
    fontSize: 20,
    alignSelf: 'center'  
},
  dataText: {
    color:"#212121", 
    fontSize: 20,
    marginBottom: 10,
    alignSelf: 'center'  
  },
  userInfoSection: {
    paddingHorizontal: 25,
    marginBottom: 25,
    marginTop:10
  },
  titulo: {
    alignSelf: 'center',
    color: "#212121",
    fontSize: 30,
    marginTop: 20
  },
  dividerTit: {
    marginBottom: 30
  }
})