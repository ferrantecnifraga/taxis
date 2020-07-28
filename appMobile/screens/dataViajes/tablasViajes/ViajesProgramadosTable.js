import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

import  {Button} from 'react-native-elements'

import Modal from 'react-native-modal';
 
export default class ViajesProgramadosTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Tipo', 'Estatus', 'Descripción', 'Lugar', 'Taxista', 'ID Viaje', 'Atendida por', 'Acciones'],
      tableData: [
        ['1', '2', '3', '4', '1', '2', '3', '4'],
        ['1', '2', '3', '4', '1', '2', '3', '4'],
        ['1', '2', '3', '4', '1', '2', '3', '4'],
      ]
    }
  }
 
  
 
  state = {
    isModalVisible: false,
  };
 
  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  render() {
    
    const state = this.state;
    const element = (data, index) => (
      <TouchableOpacity onPress={() => this.toggleModal(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>button</Text>
        </View>
      </TouchableOpacity>
    );
 
    return (
      <ScrollView horizontal={true}>
        <Table borderStyle={{borderColor: 'transparent'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          {
            state.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex === 7 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>
        <Modal isVisible={this.state.isModalVisible}
        style={{backgroundColor: '#fff',
          padding: 20,
          alignSelf: "center",
          width: 270,
          marginVertical: 100
          
      }}
        >
          <View style={{flex: 1}}>
            <Text>Hello!</Text>
            <Text>Hello!</Text>
            <Text>Hello!</Text>
            <Text>Hello!</Text>
            <Text>Hello!</Text>
            <Text>Hello!</Text>
            
            <Button
            buttonStyle={{marginTop: 30, width: '80%', alignSelf: 'center', backgroundColor: '#009387'}}
             title="Hide modal" onPress={this.toggleModal} />
          </View>
        </Modal>
      </ScrollView>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#808B97' },
  text: { margin: 6 },
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' }
});